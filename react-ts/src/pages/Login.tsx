import { useEffect, useState } from "react";
import "./Login.css";
import { EmailField } from "../components/EmailField.js";
import { PasswordField } from "../components/PasswordField.js";
import { Title } from "../components/Title.js";
import { Button } from "../components/Button.js";
import { translateError } from "../utils/translateError.js";
import { RouterService } from "../services/RouterService.js";
import { AuthServiceLogin } from "../services/AuthService.js";
import { LocalStorageServiceToken } from "../services/LocalStorageService.js";

type LoginProps = {
  routerService: RouterService,
  authService: AuthServiceLogin,
  localStorageService: LocalStorageServiceToken

}

export const Login = ({routerService, authService, localStorageService} : LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setErrorMessage(null);
    
  }, [email, password]);

  return (
    <main className="login-container">
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
          setIsLoading(true);
          setErrorMessage(null);


          authService.login(email, password)

          /* fetch("https://backend-login-placeholder.deno.dev/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
            },
            
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.status === "error") {
                throw new Error(data.code);
              }
              return data.payload;
            }) */
            .then((payload) => {
              localStorageService.setToken(payload.jwt)
            }) 
            .then(() => {
              routerService.goToRecipes();
            })
            .catch((error) => {
              setErrorMessage(error.message);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }}
      >
        <Title>Login with email</Title>
        <p>Enter your email address to login with your account.</p>

        <EmailField
          id="email"
          labelText="Your email"
          value={email}
          onChange={setEmail}
        />
        <PasswordField
          id="password"
          labelText="Your password"
          value={password}
          onChange={setPassword}
        />
        {errorMessage && <p>{translateError(errorMessage)}</p>}
        <Button title="Login" disabled={isLoading} />
      </form>
    </main>
  );
};
