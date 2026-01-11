import { useNavigate, useLocation, Link } from "react-router-dom"
import { DynamicForm, CheckboxField } from "@/components/dynamic-form"
import {  LogIn } from "lucide-react"
import { formFields } from "./login.form"
import { initialValues } from "./login.state"
import { validationSchema } from "./login.validation"
import { useAuth } from "@/context/auth"

export function Login() {

  const navigate = useNavigate()

  const { login } = useAuth();

  const handleSubmit = (values: any) => {
    login({ username: values.email });
    navigate("/dashboard");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 w-full max-w-md space-y-6 sm:space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        <div className="rounded-2xl glass-card p-6 sm:p-8 shadow-2xl border border-white/20">
          <DynamicForm
            fields={formFields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            submitButtonText="Sign In"
            submitButtonIcon={LogIn}
            footerText="Don't have an account?"
            footerLinkText="Sign up"
            onFooterLinkClick={() => navigate("/signup")}
            additionalFields={
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 col-span-12">
                <CheckboxField name="rememberMe" label="Remember me" />
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}