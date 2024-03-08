import { Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';

async function EncryptUserPassword(user: Prisma.UserCreateInput): Promise<Prisma.UserCreateInput> {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  return user;
}
export default EncryptUserPassword;