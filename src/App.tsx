import { Suspense, useState } from 'react';
import DataFetching from './components/DataFetching/DataFetching';
import Skeleton from './components/Skeleton/Skeleton';
import { useQueryClient } from '@tanstack/react-query';

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
        <Suspense fallback={<Skeleton />}>
          <DataFetching />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
