import { useSuspenseQuery } from '@tanstack/react-query';

const DataFetching = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/todos').then(res =>
        res.json(),
      ),
  });

  return (
    <div className="max-h-96 overflow-y-auto">
      {data?.map((todo: { title: string }) => {
        return <div key={todo.title}>{todo?.title}</div>;
      })}
    </div>
  );
};

export default DataFetching;
