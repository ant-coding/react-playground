import { Suspense } from 'react';
import Skeleton from '../Skeleton/Skeleton';

interface Props {
  children: React.ReactNode;
}

const SuspenseWrapper = ({ children }: Props) => {
  return <Suspense fallback={<Skeleton />}>{children}</Suspense>;
};

export default SuspenseWrapper;
