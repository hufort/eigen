#!/bin/bash

# Download pre-compiled git-crypt binary
curl -L -o /tmp/git-crypt https://github.com/AGWA/git-crypt/releases/download/0.7.0/git-crypt-0.7.0-linux-x86_64
chmod +x /tmp/git-crypt
export PATH="/tmp:$PATH"

# Decrypt files
echo $GIT_CRYPT_KEY | base64 -d > /tmp/git-crypt-key
git-crypt unlock /tmp/git-crypt-key
rm /tmp/git-crypt-key

# Run Next.js build
next build