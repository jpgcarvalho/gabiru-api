import { Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';

async function EncryptUserPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  password = hashedPassword;
  return password;
}
export default EncryptUserPassword;