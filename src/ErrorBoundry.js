import React from 'react';

export class ErrorBoundary extends React.Component {
      state = { 
          hasError: false,
          error: { message: "", stack: ""},
          info: {componentStack: ""}
        };
  
    static getDerivedStateFromError = error => {
      return { hasError: true };
    };
  
    componentDidCatch = (error, errorInfo) => {
      this.setState(error, errorInfo);
    };
  
    render() {
       if (this.state.hasError) {
         return <h1>Something went wrong.</h1>;
       }
    // const { hasError, error, info } = this.state;
    // const { children } = this.props;
    // return hasError ? <ErrorComponent error = {error} info = {info}></ErrorComponent>: children;
      return this.props.children; 
    }
  }

//   const ErrorComponent = (props) => {
//       return (
//           <h2>Something went wrong.</h2>
//           {props.error && props.error.toString()}

//       )
//   }