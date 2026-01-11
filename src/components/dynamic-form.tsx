import { Formik, Form, FormikValues, FormikHelpers } from "formik"
import { Button } from "@/components/ui/button"
import { FormField, FormFieldConfig } from "@/components/form-field"
import { LucideIcon } from "lucide-react"
import * as Yup from "yup"
import { useField } from "formik"
import { Link } from "react-router-dom"

export type { FormFieldConfig }

export interface DynamicFormProps {
  fields: FormFieldConfig[]
  initialValues: FormikValues
  validationSchema: Yup.ObjectSchema<any>
  onSubmit: (values: FormikValues, helpers: FormikHelpers<FormikValues>) => void | Promise<void>
  submitButtonText?: string
  submitButtonIcon?: LucideIcon
  footerText?: string
  footerLinkText?: string
  footerLinkPath?: string
  onFooterLinkClick?: () => void
  additionalFields?: React.ReactNode
}

function CheckboxField({ name, label, linkText, linkPath }: { name: string; label: string; linkText?: string; linkPath?: string }) {
  const [field] = useField({ name, type: "checkbox" })
  
  return (
    <div className="flex items-center space-x-2">
      <input
        {...field}
        type="checkbox"
        id={name}
        className="rounded border-input"
      />
      <label htmlFor={name} className="text-sm text-muted-foreground">
        {label}{" "}
        {linkText && linkPath && (
          <Link to={linkPath} className="text-primary hover:underline">
            {linkText}
          </Link>
        )}
      </label>
    </div>
  )
}

export function DynamicForm({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
  submitButtonText = "Submit",
  submitButtonIcon: SubmitIcon,
  footerText,
  footerLinkText,
  footerLinkPath,
  onFooterLinkClick,
  additionalFields,
}: DynamicFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-6">
          {fields.map((field) => (
            <FormField key={field.name} fieldConfig={field} />
          ))}

          {additionalFields}

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {SubmitIcon && <SubmitIcon className="mr-2 h-4 w-4" />}
            {submitButtonText}
          </Button>

          {(footerText || footerLinkText) && (
            <div className="text-center text-sm">
              {footerText && <span className="text-muted-foreground">{footerText} </span>}
              {footerLinkText && (
                <button
                  type="button"
                  onClick={onFooterLinkClick}
                  className="text-primary font-medium hover:underline"
                >
                  {footerLinkText}
                </button>
              )}
            </div>
          )}
        </Form>
      )}
    </Formik>
  )
}

export { CheckboxField }