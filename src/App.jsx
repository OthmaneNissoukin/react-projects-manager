import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import ProjectBoard from "./components/ProjectBoard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProjectDetails from "./pages/ProjectDetails";
import Members from "./pages/Members";
import CreateProject from "./pages/CreateProject";
import ProtectedRoute from "./components/ProtectedRoute";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <ProtectedRoute requireAdmin={false}>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-project"
          element={
            <ProtectedRoute requireAdmin={true}>
              <CreateProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/members"
          element={
            <ProtectedRoute requireAdmin={false}>
              <Members />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute requireAdmin={true}>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <ProtectedRoute requireAdmin={true}>
              <ProjectDetails />
            </ProtectedRoute>
          }
        />
        <Route path="/projects/:id/board" element={<ProjectBoard />} />
        <Route path="/auth-err" element={<h1>Not enough permissions</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
