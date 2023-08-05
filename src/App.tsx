import { AuthProvider } from "./context/AuthContext";
const App = () => {
  return (
    <AuthProvider>
      <div className="App">hello world</div>
    </AuthProvider>
  );
};

export default App;
