import { ErrorBoundary } from 'react-error-boundary';

interface Props {
  children: React.ReactNode;
}

const ErrorBoundaryWrapper = ({ children }: Props) => {
  return (
    <ErrorBoundary fallback={<div>Error happened</div>}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWrapper;
