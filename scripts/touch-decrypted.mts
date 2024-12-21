import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

function touchFile(filePath: string): void {
  const time = new Date()
  try {
    fs.utimesSync(filePath, time, time)
    console.log(`Updated timestamp for ${filePath}`)
  } catch (err) {
    console.error(`Error touching ${filePath}:`, err)
  }
}

function walkDirectory(directory: string): void {
  const files = fs.readdirSync(directory)

  files.forEach((file) => {
    const fullPath = path.join(directory, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      walkDirectory(fullPath)
    } else if (file.endsWith('.tsx') && !file.endsWith('.enc')) {
      touchFile(fullPath)
    }
  })
}

// Touch all decrypted files
walkDirectory(path.join(projectRoot, 'app', 's', 'p'))
