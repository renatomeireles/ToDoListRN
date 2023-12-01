import { MMKV } from "react-native-mmkv"
import { IStorage } from "./storageService"


const storage = new MMKV()

export const mmkvStorage: IStorage = {
  getItem:  key => {
    const item = storage.getString(key)
    if (item) {
      return JSON.parse(item)
    }
    return null
  },
  setItem: (key, value) => {
    storage.set(key, JSON.stringify(value))
  },
  removeItem: (key: string) => {
    storage.delete(key)
  },
}