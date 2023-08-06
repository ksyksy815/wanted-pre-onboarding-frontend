import { AuthProvider } from "./context/AuthContext";
import RouteComponent from "./routes/RouteComponent";
const App = () => {
  return (
    <AuthProvider>
      <RouteComponent />
    </AuthProvider>
  );
};

export default App;
