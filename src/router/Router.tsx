import { useRoutes } from "react-router-dom";
import { AuthScreen, MainScreen, ChatScreen } from "../screens";

export function RouterContainer() {
  return useRoutes([
    { path: "/", element: <MainScreen /> },
    { path: "/auth", element: <AuthScreen /> },
    { path: "/chat", element: <ChatScreen /> },
  ]);
}
