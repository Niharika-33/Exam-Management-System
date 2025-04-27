import React, { createContext, useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  ClipboardList,
  File,
  GraduationCap,
  Calendar,
  Users,
  RefreshCw,
  Settings,
  Home,
  ChevronRight,
} from "lucide-react";

// Sidebar Context
const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const { user } = useAuth();
  const [isHovering, setIsHovering] = useState(false);

  // Define navigation items based on user role
  const studentNavItems = [
    {
      title: "Student",
      items: [
        { to: "/dashboard", icon: Home, label: "Dashboard" },
        { to: "/internals", icon: ClipboardList, label: "Internal Exams" },
        { to: "/externals", icon: File, label: "External Exams" },
        { to: "/results", icon: GraduationCap, label: "Results" },
        { to: "/revaluation", icon: RefreshCw, label: "Revaluation" },
      ],
    },
  ];

  const facultyNavItems = [
    {
      title: "Faculty",
      items: [
        { to: "/dashboard", icon: Home, label: "Dashboard" },
        { to: "/publish-syllabus", icon: BookOpen, label: "Publish Syllabus" },
        // { to: "/clas-tests", icon: ClipboardList, label: "Class Tests (CLAS)" },
        {
          to: "/publish-results",
          icon: GraduationCap,
          label: "Publish Results",
        },
      ],
    },
  ];

  const adminNavItems = [
    {
      title: "Admin",
      items: [
        { to: "/dashboard", icon: Home, label: "Dashboard" },
        { to: "/date-sheet", icon: Calendar, label: "Date Sheet" },
        { to: "/seating", icon: Users, label: "Seating Arrangement" },
        {
          to: "/published-results",
          icon: GraduationCap,
          label: "Published Results",
        },
        { to: "/issues", icon: File, label: "Issues" },
        {
          to: "/revaluation-requests",
          icon: RefreshCw,
          label: "Revaluation Requests",
        },
        // { to: "/settings", icon: Settings, label: "Settings" },
      ],
    },
  ];

  // Determine which navigation items to display based on user role
  let navGroups = [];

  if (user) {
    switch (user.role) {
      case "student":
        navGroups = studentNavItems;
        break;
      case "faculty":
        navGroups = facultyNavItems;
        break;
      case "admin":
        navGroups = adminNavItems;
        break;
      default:
        navGroups = []; // Fallback for unknown roles
    }
  }

  // Sidebar trigger tab shown when sidebar is hidden
  const SidebarTrigger = () => (
    <div
      className="fixed top-20 left-0 z-50 bg-primary/90 text-primary-foreground px-2 py-3 rounded-r-lg shadow-md flex items-center transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
      onClick={toggleSidebar}
    >
      <ChevronRight className="h-4 w-4" />
    </div>
  );

  // Control sidebar visibility on mouse events
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="relative h-full z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 h-full w-64 bg-sidebar border-r border-border transition-all duration-300 ease-in-out shadow-elegant",
          isHovering || isOpen ? "translate-x-0" : "-translate-x-60"
        )}
      >
        <div className="flex h-16 items-center border-b px-4 bg-primary/5">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Exam Management
          </h1>
        </div>

        <div className="px-3 py-4">
          {navGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-6">
              <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-primary/80">
                {group.title}
              </h2>
              <nav className="space-y-1">
                {group.items.map((item, itemIndex) => (
                  <NavLink
                    key={itemIndex}
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all duration-200",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "hover:bg-accent hover:text-accent-foreground"
                      )
                    }
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </aside>

      {/* Show tab indicator when sidebar is hidden */}
      {!isOpen && !isHovering && <SidebarTrigger />}
    </div>
  );
};

export default Sidebar;
