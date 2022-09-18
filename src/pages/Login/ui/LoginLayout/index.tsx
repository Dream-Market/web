import { Layout } from 'shared/ui/Layout';
import { Header } from '../Header';
import { ReactNode } from 'react';

type LoginLayoutProps = {
  main?: ReactNode;
};

export const LoginLayout = ({ main }: LoginLayoutProps) => {
  return <Layout header={<Header />} main={main} />;
};
