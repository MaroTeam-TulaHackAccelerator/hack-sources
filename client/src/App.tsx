import { Routes, Route, Navigate } from "react-router-dom";
import { Drafts } from "./views/Drafts";
import { Project } from "./views/Project";
import { SignIn } from "./views/SignIn";
import { SignUp } from "./views/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Drafts />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
    </Routes>
  );
};

export default App;
