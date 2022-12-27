import React, {ErrorInfo, PropsWithChildren} from 'react';

interface IErrorBoundaryProps extends PropsWithChildren {
  fallback: any;
}

interface IErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  fallback: any;
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props) {
    super(props);
    this.state = {error: null, errorInfo: null, fallback: props.fallback};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <>{this.state.fallback}</>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
