import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import DataFetchingComponent from './components/DataFetchingComponent/DataFetchingComponent';
import ErrorBoundaryWrapper from './components/ErrorBoundaryWrapper/ErrorBoundaryWrapper';
import SuspenseWrapper from './components/SuspenseWrapper/SuspenseWrapper';

function App() {
  const queryClient = useQueryClient();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1);
    queryClient.invalidateQueries({ queryKey: ['todos'] });
  };

  return (
    <div className="flex gap-10 items-center">
      <div className="p-2 border-2">
        <button onClick={handleClick}>Invalidate queries: {count}</button>
      </div>
      <div className="p-2 border-2">
        <ErrorBoundaryWrapper>
          <SuspenseWrapper>
            <DataFetchingComponent />
          </SuspenseWrapper>
        </ErrorBoundaryWrapper>
      </div>
    </div>
  );
}

export default App;
