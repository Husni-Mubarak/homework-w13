import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Add from "./Pages/Add";
import Dashboard from "./Pages/Dashboard";
import All from "./Pages/All";
import Edit from "./Pages/Edit";
import Detail from "./Pages/Detail";

function App() {
  return (
    <Routes>
      <Route exact path="/detail/:id" Component={Detail} />
      <Route exact path="/login" Component={Login} />
      <Route exact path="/register" Component={Register} />
      <Route exact path="/" Component={Home} />
      <Route
        exact
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/all"
        element={
          <ProtectedRoute>
            <All />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/add"
        element={
          <ProtectedRoute>
            <Add />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path="/edit/:id"
        element={
          <ProtectedRoute>
            <Edit />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function ProtectedRoute({ children }) {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default App;
