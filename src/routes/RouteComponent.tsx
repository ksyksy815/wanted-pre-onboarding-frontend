import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SigninPage, SignupPage, TodoPage, NotFound } from "../pages";

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouteComponent;
