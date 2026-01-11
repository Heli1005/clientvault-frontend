import { useNavigate } from "react-router-dom"
import { DynamicForm, FormFieldConfig, CheckboxField } from "@/components/dynamic-form"
import { Mail, Lock, User, UserPlus } from "lucide-react"
import * as Yup from "yup"

export function Signup() {
  const navigate = useNavigate()

  const formFields: FormFieldConfig[] = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      icon: User,
      required: true,
    },
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
      placeholder: "Create a password",
      icon: Lock,
      required: true,
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password",
      icon: Lock,
      required: true,
    },
  ]

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
    terms: Yup.boolean()
      .oneOf([true], "You must agree to the terms and conditions"),
  })

  const handleSubmit = async (values: any) => {
    // Handle signup logic here
    console.log("Signup:", values)
    // Navigate to dashboard after signup
    navigate("/dashboard")
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-signup" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-secondary/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-signup)" />
        </svg>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl hidden sm:block"></div>
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl hidden sm:block"></div>
      <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl hidden sm:block"></div>

      <div className="relative z-10 w-full max-w-md space-y-6 sm:space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Sign up to get started with ClientVault
          </p>
        </div>

        <div className="rounded-2xl glass-card p-6 sm:p-8 shadow-2xl border border-white/20">
          <DynamicForm
            fields={formFields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            submitButtonText="Create Account"
            submitButtonIcon={UserPlus}
            footerText="Already have an account?"
            footerLinkText="Sign in"
            onFooterLinkClick={() => navigate("/login")}
            additionalFields={
              <CheckboxField 
                name="terms" 
                label="I agree to the" 
                linkText="Terms and Conditions" 
                linkPath="/terms" 
              />
            }
          />
        </div>
      </div>
    </div>
  )
}