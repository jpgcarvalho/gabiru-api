import bcrypt from 'bcrypt';

async function ComparePassword(password: string, hash: string): Promise<boolean> {
  const match = await bcrypt.compare(password, hash);
  return match;
}
export default ComparePassword;
