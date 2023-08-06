import { AuthProvider } from "./context/AuthContext";
import RouteComponent from "./routes/RouteComponent";
import GlobalStyles from "./styles/GlobalStyles";
const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <RouteComponent />
    </AuthProvider>
  );
};

export default App;
