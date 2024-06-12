interface AuthService {
  login: (username: string, password: string) => Promise<{ jwt: string }>
}

export class AuthServiceLogin implements AuthService {
  constructor() {}

  async login(email: string, password: string): Promise<{ jwt: string }> {
    return fetch("https://backend-login-placeholder.deno.dev/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === "error") {
        throw new Error(data.code);
      }
      return { jwt: data.payload.jwt };
    });
  }
}
/**
 * AuthServiceLogin provides the implementation of the AuthService interface.
 * It handles the login functionality by resolving the promise immediately.
 * This is a placeholder implementation and should be replaced with actual authentication logic.
 */
