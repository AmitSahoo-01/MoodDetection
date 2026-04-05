import React from 'react'
import FaceExpression from './features/Expression/FaceExpression'
import "../src/features/shared/style.scss";
import {Router} from './app.routes.jsx';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <RouterProvider router={Router} >
    {/* <main className='mainDiv' >
      <FaceExpression/>
    </main> */}
    </RouterProvider>
  )
}

export default App