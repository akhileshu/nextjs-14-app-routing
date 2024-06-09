"use client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorBoundaryAndSuspenseWrapper = ({ children, loadingMsg }) => {
  return (
    /* 
    ErrorBoundary , Suspense will act as a boundary here , loading , error will not propagate outside of this component
    */
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      <Suspense fallback={loadingMsg}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export function Fallback({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

export default ErrorBoundaryAndSuspenseWrapper;
