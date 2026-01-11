import { Formik, Form, FormikValues, FormikHelpers } from "formik";
import { Button } from "@/components/ui/button";
import { FormField, FormFieldConfig } from "@/components/form-field";
import { LucideIcon } from "lucide-react";
import * as Yup from "yup";
import { useField } from "formik";
import { Link } from "react-router-dom";

export type { FormFieldConfig };

export interface DynamicFormProps {
  fields: FormFieldConfig[];
  initialValues: FormikValues;
  validationSchema: Yup.ObjectSchema<any>;
  onSubmit: (
    values: FormikValues,
    helpers: FormikHelpers<FormikValues>
  ) => void | Promise<void>;
  submitButtonText?: string;
  submitButtonIcon?: LucideIcon;
  footerText?: string;
  footerLinkText?: string;
  footerLinkPath?: string;
  onFooterLinkClick?: () => void;
  additionalFields?: React.ReactNode;
}

const colSpanMap: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
};

function CheckboxField({
  name,
  label,
  linkText,
  linkPath,
  colSpan
}: {
  name: string;
  label: string;
  linkText?: string;
  linkPath?: string;
  colSpan?:number
}) {
  const [field] = useField({ name, type: "checkbox" });

  return (
    <div className={`flex items-center space-x-2 ${colSpanMap[colSpan ?? 12]}`}>
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
  );
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
        <Form className="grid grid-cols-12 gap-6">
          {fields.map((field) => (
            <div
              key={field.name}
             className={colSpanMap[field.colSpan ?? 12]}
            >
              <FormField fieldConfig={field} />
            </div>
          ))}

          {additionalFields}

          <Button
            type="submit"
            className="w-full col-span-12"
            size="lg"
            disabled={isSubmitting}
          >
            {SubmitIcon && <SubmitIcon className="mr-2 h-4 w-4" />}
            {submitButtonText}
          </Button>

          {(footerText || footerLinkText) && (
            <div className="text-center text-sm col-span-12">
              {footerText && (
                <span className="text-muted-foreground">{footerText} </span>
              )}
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
  );
}

export { CheckboxField };
