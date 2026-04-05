import React from 'react'
import FaceExpression from './features/Expression/FaceExpression'
import "../src/features/shared/style.scss";
import {Router} from './app.routes.jsx';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './features/auth/auth.context.jsx';

const App = () => {
  return (

    <AuthProvider>
      <RouterProvider router={Router} >
      {/* <main className='mainDiv' >
        <FaceExpression/>
      </main> */}
      </RouterProvider>
    </AuthProvider>
  )
}

export default App