
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthProvider, useAuth, UserRole } from "./context/AuthContext";

// Layout
import Layout from "./components/Layout";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// Student Pages
import InternalExams from "./pages/student/InternalExams";
import ExternalExams from "./pages/student/ExternalExams";
import Results from "./pages/student/Results";
import Revaluation from "./pages/student/Revaluation";

// Faculty Pages
import PublishSyllabus from "./pages/faculty/PublishSyllabus";
import ClassTests from "./pages/faculty/ClassTests";
import PublishResults from "./pages/faculty/PublishResults";

// Admin Pages
import DateSheet from "./pages/admin/DateSheet";
import Seating from "./pages/admin/Seating";
import PublishedResults from "./pages/admin/PublishedResults";
import Issues from "./pages/admin/Issues";
import RevaluationRequests from "./pages/admin/RevaluationRequests";
// import Settings from "./pages/admin/Settings";

const queryClient = new QueryClient();

// Role-based route protection component
interface ProtectedRouteProps {
  element: React.ReactNode;
  allowedRoles: UserRole[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, allowedRoles }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{element}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      
      {/* Protected routes */}
      <Route element={<Layout requireAuth={true} />}>
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Student routes */}
        <Route path="/internals" element={
          <ProtectedRoute element={<InternalExams />} allowedRoles={["student"]} />
        } />
        <Route path="/externals" element={
          <ProtectedRoute element={<ExternalExams />} allowedRoles={["student"]} />
        } />
        <Route path="/results" element={
          <ProtectedRoute element={<Results />} allowedRoles={["student"]} />
        } />
        <Route path="/revaluation" element={
          <ProtectedRoute element={<Revaluation />} allowedRoles={["student"]} />
        } />
        
        {/* Faculty routes */}
        <Route path="/publish-syllabus" element={
          <ProtectedRoute element={<PublishSyllabus />} allowedRoles={["faculty"]} />
        } />
        <Route path="/clas-tests" element={
          <ProtectedRoute element={<ClassTests />} allowedRoles={["faculty"]} />
        } />
        <Route path="/publish-results" element={
          <ProtectedRoute element={<PublishResults />} allowedRoles={["faculty"]} />
        } />
        
        {/* Admin routes */}
        <Route path="/date-sheet" element={
          <ProtectedRoute element={<DateSheet />} allowedRoles={["admin"]} />
        } />
        <Route path="/seating" element={
          <ProtectedRoute element={<Seating />} allowedRoles={["admin"]} />
        } />
        <Route path="/published-results" element={
          <ProtectedRoute element={<PublishedResults />} allowedRoles={["admin"]} />
        } />
        <Route path="/issues" element={
          <ProtectedRoute element={<Issues />} allowedRoles={["admin"]} />
        } />
        <Route path="/revaluation-requests" element={
          <ProtectedRoute element={<RevaluationRequests />} allowedRoles={["admin"]} />
        } />
        {/* <Route path="/settings" element={
          <ProtectedRoute element={<Settings />} allowedRoles={["admin"]} />
        } /> */}
      </Route>
      
      {/* Redirect from root to dashboard or login */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet
        titleTemplate="%s | Exam Management System"
        defaultTitle="Exam Management System"
      />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
