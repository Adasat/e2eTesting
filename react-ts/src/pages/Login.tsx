import * as Sentry from '@sentry/react';
import { useCallback, useEffect, useState } from "react";
import "./Login.css";
import { EmailField } from "../components/EmailField.js";
import { PasswordField } from "../components/PasswordField.js";
import { Title } from "../components/Title.js";
import { Button } from "../components/Button.js";
import { translateError } from "../utils/translateError.js";
import { RouterService } from "../services/RouterService.js";
import { AuthServiceLogin } from "../services/AuthService.js";
import { LocalStorageServiceToken } from "../services/LocalStorageService.js";
import { DomainError } from '../utils/ErrorBoundary.js';

type LoginProps = {
  routerService: RouterService,
  authService: AuthServiceLogin,
  localStorageService: LocalStorageServiceToken

}

export const useAsyncError = () => {
  const [, setError] = useState();
  const useCallback1 = useCallback(
    (e: any) => {
      setError(() => {
        throw e;
      });
    },
    [setError],
  );
  return { propagateError: useCallback1 };
};

export const Login = ({routerService, authService, localStorageService} : LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState <string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { propagateError } = useAsyncError()

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
            .then((payload) => {
              localStorageService.setToken(payload.jwt)
            }) 
            .then(() => {
              routerService.goToRecipes();
            })
            .catch((error) => {
              if (error instanceof DomainError) {
                console.log(error.code);
                setErrorMessage(error.code);
                return;
              }
              throw error;
            })
            .catch(propagateError)
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
