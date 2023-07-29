import React, { ReactNode, useState } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  function handleComponentError() {
    // Update state so the next render will show the fallback UI.
    setHasError(true);
  }

  if (hasError) {
    // You can render any custom fallback UI
    return <h1>Something went wrong.</h1>;
  }

  return (
    <React.Fragment>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          onError: handleComponentError,
        });
      })}
    </React.Fragment>
  );
}
