import { Personal, Prisma } from "@prisma/client";

export interface IPersonalService {
  create(personal: Prisma.PersonalCreateInput): Promise<Personal | null>;
  getAll(): Promise<Personal[] | null>;
  delete(personalId: string): Promise<boolean>;
  update(personalId: string, personal: Prisma.PersonalUpdateInput): Promise<boolean>;
  getById(personalId: string): Promise<Personal | null>;
  getByEmail(email: string): Promise<Personal | null>;
}
