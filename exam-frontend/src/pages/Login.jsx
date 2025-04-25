import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

// Update schema to use userid instead of email
const formSchema = z.object({
  userid: z.string().min(2, { message: "Please enter a valid User ID" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

// Demo users for quick login
const demoUsers = [
  { role: "Student", userid: "s1", password: "palak123" },
  { role: "Faculty", userid: "f1", password: "faculty123" },
  { role: "Admin", userid: "a1", password: "admin123" },
];

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userid: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const isDemoUser = demoUsers.some(
        (user) => user.userid === data.userid && user.password === data.password
      );

      const success = await login(data.userid, data.password);

      if (success) {
        if (!isDemoUser) {
          toast.success("Login successful!");
        }
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("An error occurred during login");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async (userid, password) => {
    form.setValue("userid", userid);
    form.setValue("password", password);

    setTimeout(() => {
      form.handleSubmit(onSubmit)();
    }, 500);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted/50 p-4">
      <div className="animate-fade-in w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <GraduationCap className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold">Exam Management System</h1>
          <p className="text-muted-foreground mt-2">
            Sign in to access your account
          </p>
        </div>

        <Card className="animate-slide-up border border-border/40 shadow-md">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="userid"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User ID</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </form>
            </Form>
          </CardContent>
          {/* <CardFooter className="flex flex-col">
            <div className="mt-2 flex w-full items-center gap-2">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">
                Or try demo accounts
              </span>
              <Separator className="flex-1" />
            </div>
            <div className="mt-4 grid w-full gap-2 sm:grid-cols-3">
              {demoUsers.map((user) => (
                <Button
                  key={user.role}
                  variant="outline"
                  size="sm"
                  onClick={() => handleDemoLogin(user.userid, user.password)}
                >
                  {user.role}
                </Button>
              ))}
            </div>
          </CardFooter> */}
        </Card>
      </div>
    </div>
  );
};

export default Login;
