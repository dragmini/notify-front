// import Header from '@/ui/Header';
import Header from '../ui/Header';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <section className="h-screen">
      {/* <Header /> */}
      {/* <Header /> */}

      <main className="h-full flex items-center justify-center">
        {children}
      </main>

      {/* <footer>
        &copy; {new Date().getFullYear()} Мой сайт. Все права защищены.
      </footer> */}
    </section>
  );
};

export default AuthLayout;
