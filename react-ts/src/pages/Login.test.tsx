import { describe, it, expect, vi } from "vitest";
import userEvent, { UserEvent } from '@testing-library/user-event';
import {Login} from './Login'
import { render, screen, waitFor } from "@testing-library/react";
import { RouterService } from "../services/RouterService";
import { AuthServiceLogin } from "../services/AuthService";
import { LocalStorageService, LocalStorageServiceToken } from '../services/LocalStorageService';



describe("Login", () => {
  it("redirects to recipe page after login", async () => {

    const user  = userEvent.setup()

    const routerService : RouterService = {
      goToRecipes: vi.fn()
    }

    const authService : AuthServiceLogin = {
      login: async () => ({jwt: "token"})
    }
    
    const LocalStorageService : LocalStorageServiceToken = {
      setToken: vi.fn(),
      getToken: () => 'token'
    }
    render(<Login routerService={routerService} authService={authService} localStorageService={LocalStorageService}/>)
    
    await user.type(screen.getByLabelText('Your email'), 'linustorvalds@gmail.com')
    await user.type(screen.getByLabelText('Your password'), 'ilovecats')

    await user.click(screen.getByRole('button', { name: 'Login'}))

    await waitFor(() => {
      expect(routerService.goToRecipes).toHaveBeenCalled()
    })
  });

  it("redirects to recipe page after login", async () => {

    const user  = userEvent.setup()

    const routerService : RouterService = {
      goToRecipes: vi.fn()
    }

    const authService : AuthServiceLogin = {
      login: async () => ({jwt: "token"})
    }
    
    const LocalStorageService : LocalStorageServiceToken = {
      setToken: vi.fn(),
      getToken: () => 'token'
    }
    render(<Login routerService={routerService} authService={authService} localStorageService={LocalStorageService}/>)
    
    await user.type(screen.getByLabelText('Your email'), 'linustorvalds@gmail.com')
    await user.type(screen.getByLabelText('Your password'), 'ilovecats')

    await user.click(screen.getByRole('button', { name: 'Login'}))

    await waitFor(() => {
      expect(routerService.goToRecipes).toHaveBeenCalled()
    })
  });
  it("redirects to recipe page after login", async () => {

    const user  = userEvent.setup()

    const routerService : RouterService = {
      goToRecipes: vi.fn()
    }

    const authService : AuthServiceLogin = {
      login: async () => ({jwt: "token"})
    }
    
    const LocalStorageService : LocalStorageServiceToken = {
      setToken: vi.fn(),
      getToken: () => 'token'
    }
    render(<Login routerService={routerService} authService={authService} localStorageService={LocalStorageService}/>)
    
    await user.type(screen.getByLabelText('Your email'), 'linustorvalds@gmail.com')
    await user.type(screen.getByLabelText('Your password'), 'ilovecats')

    await user.click(screen.getByRole('button', { name: 'Login'}))

    await waitFor(() => {
      expect(routerService.goToRecipes).toHaveBeenCalled()
    })
  });

  it("redirects to recipe page after login", async () => {

    const user  = userEvent.setup()

    const routerService : RouterService = {
      goToRecipes: vi.fn()
    }

    const authService : AuthServiceLogin = {
      login: async () => ({jwt: "token"})
    }
    
    const LocalStorageService : LocalStorageServiceToken = {
      setToken: vi.fn(),
      getToken: () => 'token'
    }
    render(<Login routerService={routerService} authService={authService} localStorageService={LocalStorageService}/>)
    
    await user.type(screen.getByLabelText('Your email'), 'linustorvalds@gmail.com')
    await user.type(screen.getByLabelText('Your password'), 'ilovecats')

    await user.click(screen.getByRole('button', { name: 'Login'}))

    await waitFor(() => {
      expect(routerService.goToRecipes).toHaveBeenCalled()
    })
  });
});


//linustorvalds@gmail.com
//ilovecats