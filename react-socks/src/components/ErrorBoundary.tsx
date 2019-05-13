import React from 'react';

// Custom ErrorBoundary Component
// Should be used only for truly exceptional errors
// within render() not for your usual business flow


// ATTN: Errors thrown in event handlers are not handled. Use a try/catch instead!

type ErrorBoundaryProps = {
    fallback: React.ReactNode
}

type ErrorBoundaryState = {
    error: Error | null
}


class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { error: null };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('didCatch', error, errorInfo);
    this.setState({error});
  }

  // Alternatively:
  // static getDerivedStateFromError(error: Error) {
  //   return {error};
  // }
  
  render() {
    if (this.state.error) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
