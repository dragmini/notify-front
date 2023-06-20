import { ReactNode } from 'react';

interface IChildren {
  children: ReactNode;
}

const AuthForm = ({ children }: IChildren) => {
  return (
    <div className="bg-base-secondary px-5 py-10 w-[400px] rounded-[10px]">
      {children}
    </div>
  );
};

export default AuthForm;
