import Cookies from "js-cookie";
import React, { createContext, useEffect, ReactNode } from "react";
import { io, Socket } from "socket.io-client";

const socketUrl = process.env.REACT_APP_SOCKET_URL;

// Создаем новый контекст
export const SocketContext = createContext<Socket | null>(null);

// Исправляем тип параметра children на ReactNode
interface SocketProviderProps {
  children: ReactNode;
}

// Создаем компонент провайдера сокета
export const SocketProvider: React.FC<SocketProviderProps> = ({
  children,
}: SocketProviderProps) => {
  // Создаем экземпляр сокета
  const token = Cookies.get("accessToken");
  const socket = io(socketUrl!, {
    query: {
      token: token,
    },
  });

  useEffect(() => {
    return () => {
      // Отключаем сокет при размонтировании компонента
      console.log(1);
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
