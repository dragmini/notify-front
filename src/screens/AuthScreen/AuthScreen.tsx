import AuthForm from '../../ui/form/AuthForm';
import { useActions } from 'hooks/useActions';
import AuthLayout from 'layout/AuthLayout';
import { useState } from 'react';

export const AuthScreen = () => {
  const { login, register } = useActions();
  const [type, setType] = useState<'login' | 'register'>('login');

  const send = () => {
    register({
      email: 'belyaev@test.ru',
      password: 'Linkoln228',
    });
  };

  return (
    <AuthLayout>
      <AuthForm>
        <button className="text-white" onClick={send}>
          Auth
        </button>
      </AuthForm>
      {/* //{' '} */}
    </AuthLayout>
  );
};
