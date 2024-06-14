import { Component, ReactNode } from "react";
import * as Sentry from '@sentry/react';


export class ErrorBoundary extends Component <{children: ReactNode}> {
    constructor(props: {children: ReactNode}) {
      super(props);
    }
  
    static getDerivedStateFromError(error: Error) {
      return { };
    }
  
    componentDidCatch(error : unknown, errorInfo: unknown) {
      // You can also log the error to an error reporting service
      console.error('ErrorBoundary ', error, errorInfo);
      Sentry.captureException(error)
    }
    
  
    render() {
      
  
      return this.props.children; 
    }
  }



  
  export class DomainError extends Error {
    public readonly code: string;
  
    constructor(code: string) {
      super(code);
      this.code = code;
    }
  }