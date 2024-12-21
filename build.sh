#!/bin/bash

# Download and setup git-crypt
curl -sL https://github.com/AGWA/git-crypt/releases/download/0.7.0/git-crypt-0.7.0-linux-amd64.tar.gz | tar xz -C /tmp
export PATH="/tmp/git-crypt-0.7.0-linux-amd64:$PATH"

# Decrypt files
echo $GIT_CRYPT_KEY | base64 -d > /tmp/git-crypt-key
git-crypt unlock /tmp/git-crypt-key
rm /tmp/git-crypt-key

# Run Next.js build
next build