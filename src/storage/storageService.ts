import { mmkvStorage } from "./mmkvStorage";
import { TypeTask } from "../types/TypeTask";

export interface IStorage {
  getItem: (key: string) => string | any | null
  setItem: (key: string, value: TypeTask[]) => void
  removeItem: (key: string) => void
}

export const storageService: IStorage = mmkvStorage;