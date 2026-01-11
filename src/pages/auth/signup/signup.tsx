import { useNavigate } from "react-router-dom"
import { DynamicForm, CheckboxField } from "@/components/dynamic-form"
import { UserPlus } from "lucide-react"

import {
  signupFormFields,
  signupInitialValues,
  signupValidationSchema,
} from "./"

export function Signup() {
  const navigate = useNavigate()

  const handleSubmit = async (values: any) => {
    console.log("Signup:", values)
    navigate("/dashboard")
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <DynamicForm
          fields={signupFormFields}
          initialValues={signupInitialValues}
          validationSchema={signupValidationSchema}
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
              colSpan={12}
            />
          }
        />
      </div>
    </div>
  )
}
