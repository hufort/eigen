import { decrypt } from '../lib/crypto.js'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'

// Load .env.local file
dotenv.config({ path: '.env.local' })

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY!
if (!ENCRYPTION_KEY) {
  throw new Error('ENCRYPTION_KEY environment variable is required')
}

// Get directory name in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Function to decrypt a file
function decryptFile(filePath: string): void {
  const encryptedContent = fs.readFileSync(filePath, 'utf8')
  const decrypted = decrypt(encryptedContent, ENCRYPTION_KEY)

  // Write decrypted content without .enc extension
  const decryptedPath = filePath.replace('.enc', '')
  fs.writeFileSync(decryptedPath, decrypted)

  console.log(`Decrypted ${filePath} to ${decryptedPath}`)
}

// Function to walk directory and decrypt files
function decryptDirectory(directory: string): void {
  const files = fs.readdirSync(directory)

  files.forEach((file) => {
    const fullPath = path.join(directory, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      decryptDirectory(fullPath)
    } else if (file.endsWith('.enc')) {
      decryptFile(fullPath)
    }
  })
}

// Decrypt the sensitive directory
const projectRoot = path.resolve(__dirname, '..')
decryptDirectory(path.join(projectRoot, 'app', 's', 'p'))
