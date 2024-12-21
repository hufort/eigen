import crypto from 'node:crypto'

const ALGORITHM = 'aes-256-cbc'
const IV_LENGTH = 16

export function encrypt(text: string, key: string): string {
  // Ensure key is 32 bytes (256 bits)
  const hash = crypto.createHash('sha256')
  const hashedKey = hash.update(key).digest()

  // Generate random IV
  const iv = crypto.randomBytes(IV_LENGTH)

  // Create cipher
  const cipher = crypto.createCipheriv(
    ALGORITHM,
    Uint8Array.from(hashedKey),
    Uint8Array.from(iv)
  )

  // Encrypt the text
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')

  // Prepend IV to encrypted data
  return iv.toString('hex') + ':' + encrypted
}

export function decrypt(encryptedData: string, key: string): string {
  // Ensure key is 32 bytes (256 bits)
  const hash = crypto.createHash('sha256')
  const hashedKey = hash.update(key).digest()

  // Split IV and encrypted data
  const [ivHex, encryptedText] = encryptedData.split(':')
  const iv = Buffer.from(ivHex, 'hex')

  // Create decipher
  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    Uint8Array.from(hashedKey),
    Uint8Array.from(iv)
  )

  // Decrypt the text
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8')
  decrypted += decipher.final('utf8')

  return decrypted
}
