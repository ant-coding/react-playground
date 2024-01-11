import { useTodos } from '../../queries';

const DataFetchingComponent = () => {
  const { data } = useTodos();

  return (
    <div className="max-h-96 overflow-y-auto">
      {data?.map((todo: { title: string }) => {
        return <div key={todo.title}>{todo?.title}</div>;
      })}
    </div>
  );
};

export default DataFetchingComponent;
