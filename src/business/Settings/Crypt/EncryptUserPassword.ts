import { Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';

async function EncryptUserPassword(client: Prisma.ClientCreateInput): Promise<Prisma.ClientCreateInput> {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(client.password!, salt);
  client.password = hashedPassword;
  return client;
}
export default EncryptUserPassword;