 export interface LocalStorageService {
  setToken: (token: string) => void
  getToken: () => string
}

export class LocalStorageServiceToken implements LocalStorageService {
  setToken(token: string) {
    localStorage.setItem("token", token)
  }
  getToken() : string {
    const token = localStorage.getItem("token");
    return token ? token : ""
  }
}