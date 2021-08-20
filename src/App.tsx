import Routes from "./routes";
import { AuthContextProvider } from "./context/AuthContext";

export function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}
