import React from "react";
import FaceExpression from "./features/Expression/FaceExpression";
import "../src/features/shared/style.scss";
import { Router } from "./app.routes.jsx";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { SongContextProvider } from "./features/home/song.context.jsx";

const App = () => {
  return (
    <AuthProvider>
      <SongContextProvider>
        <RouterProvider router={Router} />
      </SongContextProvider>
    </AuthProvider>
  );
};

export default App;
