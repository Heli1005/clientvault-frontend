// src/features/auth/signup/signup.form.ts

import { Mail, Lock } from "lucide-react"
import { FormFieldConfig } from "@/components/dynamic-form"

  export const formFields: FormFieldConfig[] = [
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