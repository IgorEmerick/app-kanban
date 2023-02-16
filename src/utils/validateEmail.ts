export function validateEmail(email: string): boolean {
  return /^([a-z]|\d|_|\.)+@([a-z]|_|\.)+\.com(\.br)?$/i.test(email);
}
