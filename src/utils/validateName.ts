export function validateName(name: string): boolean {
  return /^([a-z]| |')+([a-z]|')$/i.test(name) && name.length <= 64;
}
