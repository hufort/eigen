#!/bin/bash

# Download and install git-crypt
curl -o /tmp/git-crypt.deb https://mirrors.edge.kernel.org/ubuntu/pool/universe/g/git-crypt/git-crypt_0.7.0-2_amd64.deb
dpkg -x /tmp/git-crypt.deb /tmp/git-crypt
export PATH="/tmp/git-crypt/usr/bin:$PATH"

# Decrypt files
echo $GIT_CRYPT_KEY | base64 -d > /tmp/git-crypt-key
git-crypt unlock /tmp/git-crypt-key
rm /tmp/git-crypt-key

# Run Next.js build
next build