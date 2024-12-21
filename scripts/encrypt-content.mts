import { encrypt } from '../lib/crypto.mts'
import fs from 'node:fs'
import path from 'node:path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'node:url'

// Load .env.local file
dotenv.config({ path: '.env.local' })

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY!
if (!ENCRYPTION_KEY) {
  throw new Error('ENCRYPTION_KEY environment variable is required')
}

// Get directory name in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Function to encrypt a file
function encryptFile(filePath: string): void {
  const content = fs.readFileSync(filePath, 'utf8')
  const encrypted = encrypt(content, ENCRYPTION_KEY)

  // Write encrypted content with .enc extension
  const encryptedPath = `${filePath}.enc`
  fs.writeFileSync(encryptedPath, encrypted)

  console.log(`Encrypted ${filePath} to ${encryptedPath}`)
}

// Function to walk directory and encrypt files
function encryptDirectory(directory: string): void {
  const files = fs.readdirSync(directory)

  files.forEach((file) => {
    const fullPath = path.join(directory, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      encryptDirectory(fullPath)
    } else if (file.endsWith('.tsx') && !file.endsWith('.enc')) {
      encryptFile(fullPath)
    }
  })
}

// Encrypt the sensitive directory
// Using path.resolve to get absolute path from project root
const projectRoot = path.resolve(__dirname, '..')
encryptDirectory(path.join(projectRoot, 'app', 's', 'p'))
