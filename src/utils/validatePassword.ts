export function validatePassword(password: string): boolean {
  return (
    /[a-z]/g.test(password) &&
    /[A-Z]/g.test(password) &&
    /\d/g.test(password) &&
    password.length >= 8 &&
    password.length <= 16
  );
}
