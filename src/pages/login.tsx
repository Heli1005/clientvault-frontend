import { useNavigate, useLocation, Link } from "react-router-dom"
import { DynamicForm, FormFieldConfig, CheckboxField } from "@/components/dynamic-form"
import { Mail, Lock, LogIn } from "lucide-react"
import * as Yup from "yup"

export function Login() {
  const navigate = useNavigate()
  const location = useLocation()

  const formFields: FormFieldConfig[] = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      icon: Mail,
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      icon: Lock,
      required: true,
    },
  ]

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })

  const handleSubmit = async (values: any) => {
    // Handle login logic here
    console.log("Login:", values)
    // Navigate to dashboard after login
    navigate("/dashboard", { state: { from: location } })
  }

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
      
      {/* Decorative Circles */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl hidden sm:block"></div>
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl hidden sm:block"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl hidden sm:block"></div>

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
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
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