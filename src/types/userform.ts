import { z } from 'zod';

const passwordSchema = z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number");

export const userFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    age: z.number().min(18, "Must be at least 18 years old"),
    password: passwordSchema,
    confirmPassword: z.string(),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    gender: z.enum(['male', 'female', 'other'], {
        errorMap: () => ({ message: "Please select a valid gender" })
    })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

// Export the type
export type userFormSchema = z.infer<typeof userFormSchema>;

// Export the error type
export type FormErrors = Partial<Record<keyof UserForm, string[]>>;