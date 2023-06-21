import { ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

const ShellForm = ({ children }: IChildren) => {
  return (
    <div className="bg-base-secondary px-5 py-10 w-[400px] rounded-[20px] animate-scaleIn">
      {children}
    </div>
  );
};

export default ShellForm;
