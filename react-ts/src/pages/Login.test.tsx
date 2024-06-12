import { describe, it, expect, vi } from "vitest";
import userEvent, { UserEvent } from '@testing-library/user-event';
import {Login} from './Login'
import { render, screen, waitFor } from "@testing-library/react";
import { RouterService } from "../services/RouterService";



describe("Login", () => {
  it("redirects to recipe page after login", async () => {

    const user  = userEvent.setup()

    const routerService : RouterService = {
      goToRecipes: vi.fn()
    }

    render(<Login routerService={routerService}/>)
    
    await user.type(screen.getByLabelText('Your email'), 'linustorvalds@gmail.com')
    await user.type(screen.getByLabelText('Your password'), 'ilovecats')

    await user.click(screen.getByRole('button', {name: 'Login'}))

    await waitFor(() => {
      expect(routerService.goToRecipes).toHaveBeenCalled()
    }, {timeout: 10000})
  });
});


//linustorvalds@gmail.com
//ilovecats