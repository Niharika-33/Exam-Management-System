
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Sample user data - in a real app, this would come from a backend
const MOCK_USERS = [
  {
    id: "AP22110011482",
    email: "palak_mishra@srmap.edu.in",
    password: "02052005",
    name: "Palak Mishra",
    role: "student",
  },
  {
    id: "AP22110011493",
    email: "niharika_kumar@srmap.edu.in",
    password: "03032005",
    name: "Niharika Kumar",
    role: "student",
  },
  {
    id: "FP1001",
    email: "rahul_verma@srmap.edu.in",
    password: "21011989",
    name: "Dr. Rahul Verma",
    role: "faculty",
  },
  {
    id: "FP1002",
    email: "vikrant_mehta@srmap.edu.in",
    password: "01011985",
    name: "Dr. Vikrant Mehta",
    role: "faculty",
  },
  {
    id: "AD3001",
    email: "abhisekh@srmap.edu.in",
    password: "12122000",
    name: "Abhisekh Sharma",
    role: "admin",
  },
  {
    id: "AD3002",
    email: "priyanka@srmap.edu.in",
    password: "12121982",
    name: "Priyanka Shah",
    role: "admin",
  },
];

// Create context
const AuthContext = createContext(undefined);

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing saved user:", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(
      (u) => u.id === email && u.password === password
    );
    

    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      toast.success(`Welcome back, ${userWithoutPassword.name}!`);
      setIsLoading(false);
      return true;
    }

    toast.error("Invalid email or password");
    setIsLoading(false);
    return false;
  };


  // const login = async (email, password) => {
  //   setIsLoading(true);
  
  //   try {
  //     const response = await fetch("http://localhost:8080/api/users/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });
  
  //     const text = await response.text();
  
  //     if (text.includes("successful")) {
  //       const user = { email }; // You might want to get user details back later
  //       setUser(user);
  //       localStorage.setItem("user", JSON.stringify(user));
  //       toast.success(`Welcome back, ${email}!`);
  //       return true;
  //     } else {
  //       toast.error("Invalid email or password");
  //       return false;
  //     }
  //   } catch (error) {
  //     toast.error("Login failed. Please try again later.");
  //     console.error("Login error:", error);
  //     return false;
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  
  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("You have been logged out");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
