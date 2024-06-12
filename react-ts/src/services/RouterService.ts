import { NavigateFunction } from "react-router-dom"

export interface RouterService {
    goToRecipes() : void
}

export class RouterServiceReactRouter implements RouterService {
    constructor(private navigate : NavigateFunction) {}
    goToRecipes() : void {
        this.navigate('/recipes')
    }
}

