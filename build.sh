#!/bin/bash

# Create lib directory
mkdir -p /tmp/lib

# Download and extract OpenSSL 1.1
curl -L -o /tmp/openssl.tar.gz https://github.com/openssl/openssl/archive/refs/tags/OpenSSL_1_1_1w.tar.gz
tar xzf /tmp/openssl.tar.gz -C /tmp
cd /tmp/openssl-OpenSSL_1_1_1w
./config --prefix=/tmp/openssl
make
make install
export LD_LIBRARY_PATH="/tmp/openssl/lib:$LD_LIBRARY_PATH"

# Download pre-compiled git-crypt binary
curl -L -o /tmp/git-crypt https://github.com/AGWA/git-crypt/releases/download/0.7.0/git-crypt-0.7.0-linux-x86_64
chmod +x /tmp/git-crypt
export PATH="/tmp:$PATH"

# Decrypt files
echo $GIT_CRYPT_KEY | base64 -d > /tmp/git-crypt-key
git-crypt unlock /tmp/git-crypt-key
rm /tmp/git-crypt-key

# Run Next.js build
cd /vercel/path0  # Return to project directory
next build