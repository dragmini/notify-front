import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <img src="logo.png" />
      </header>

      <main>{children}</main>

      <footer>
        &copy; {new Date().getFullYear()} Мой сайт. Все права защищены.
      </footer>
    </div>
  );
};

export default AuthLayout;
