import { useSuspenseQuery } from '@tanstack/react-query';

export const useTodos = () => {
  return useSuspenseQuery({
    queryKey: ['todos'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/todos').then(res =>
        res.json(),
      ),
  });
};
