import React from 'react';
import { BrowserRouter }  from "react-router-dom";
import Routes from './Routes';
import { AuthProvider } from './contexts/jwt-context'; // Import AuthProvider

function App() {
  return (
      <AuthProvider> {/* Wrap the application with AuthProvider */}
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;