import { Input } from "@/components/ui/input"
import { LucideIcon } from "lucide-react"
import { useField } from "formik"

export interface FormFieldConfig {
  name: string
  label: string
  type?: string
  placeholder?: string
  icon?: LucideIcon
  required?: boolean
  colSpan?:number

}

interface FormFieldProps {
  fieldConfig: FormFieldConfig
}

export function FormField({ fieldConfig }: FormFieldProps) {
  const [field, meta] = useField(fieldConfig.name)

  return (
    <div className="space-y-2">
      <label htmlFor={fieldConfig.name} className="text-sm font-medium">
        {fieldConfig.label}
        {fieldConfig.required && <span className="text-destructive ml-1">*</span>}
      </label>
      <Input
        id={fieldConfig.name}
        type={fieldConfig.type || "text"}
        placeholder={fieldConfig.placeholder}
        icon={fieldConfig.icon}
        error={meta.touched && meta.error ? meta.error : undefined}
        {...field}
      />
    </div>
  )
}