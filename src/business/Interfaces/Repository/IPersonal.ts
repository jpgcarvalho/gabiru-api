import { Personal, Prisma } from "@prisma/client";


export interface IPersonalRepository {
  create(personal: Prisma.PersonalCreateInput): Promise<Personal | null>;
  getOneById(id: string): Promise<Personal | null>;
  getOneByEmail(email: string): Promise<Personal | null>;
  getAll(): Promise<Personal[] | null>;
  update(personalId: string, personal: Prisma.PersonalUpdateInput): Promise<boolean>;
  delete(personalId: string): Promise<boolean>;
}
