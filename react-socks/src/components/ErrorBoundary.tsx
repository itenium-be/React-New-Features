import React from 'react';


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
  
  render() {
    if (this.state.error) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
