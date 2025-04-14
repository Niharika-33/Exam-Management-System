
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Header from "./Header";
import Sidebar, { SidebarProvider, useSidebar } from "./Sidebar";

const MainContent = () => {
  const { isOpen } = useSidebar();
  
  return (
    <div className={`flex-1 transition-all duration-300 ${isOpen ? "md:ml-64" : "ml-0"}`}>
      <Header />
      <main className="container mx-auto px-4 pt-20 pb-10 md:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

const Layout = ({ requireAuth = true }) => {
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <MainContent />
      </div>
    </SidebarProvider>
  );
};

export default Layout;
