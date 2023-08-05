import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signin, Signup, Todo, NotFound } from "../pages";

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" Component={Signup} />
        <Route path="/signin" Component={Signin} />
        <Route path="/todo" Component={Todo} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;
