export function processLuhn(code: string): [string, string] {

  const getChecksum = (str: string): number => {
    const len = str.length
    const parity = len % 2
    let sum = 0
    for (let i = len - 1; i >= 0; i--) {
      let d = parseInt(str.charAt(i))
      if (i % 2 === parity) d *= 2
      if (d > 9) d -= 9
      sum += d
    }
    return sum % 10
  }
  const checksum = getChecksum(code + '0')
  const checkDigit = checksum === 0 ? 0 : 10 - checksum

  const digits = String(checkDigit)
  const fullCode = code + digits

  return [digits, fullCode]
}
