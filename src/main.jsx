/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'

import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Container from './layout/Container.jsx'

import './globals.css'
import App from './App.jsx'

function Layout({ children }) {
  const location = useLocation();
  const isAuthRoute = location.pathname === "/login-user";

  return (
    <Container>
      {!isAuthRoute && <Navbar />}
      
      <main className={`w-full min-h-screen flex flex-col overflow-x-hidden ${!isAuthRoute ? "pt-[100px]" : ""}`}>
        {children}
      </main>
      
      {!isAuthRoute && <Footer />}
    </Container>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)