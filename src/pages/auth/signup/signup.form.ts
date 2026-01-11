// src/features/auth/signup/signup.form.ts

import { Mail, Lock, User } from "lucide-react"
import { FormFieldConfig } from "@/components/dynamic-form"

export const signupFormFields: FormFieldConfig[] = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your full name",
    icon: User,
    required: true,
    colSpan: 12,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    icon: Mail,
    required: true,
    colSpan: 12,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Create a password",
    icon: Lock,
    required: true,
    colSpan: 12,
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    icon: Lock,
    required: true,
    colSpan: 12,
  },
]
