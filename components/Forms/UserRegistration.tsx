"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, TextField } from "@mui/material";

// Define the Zod schema for validation
const registrationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must include at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must include at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must include at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must include at least one special character",
    }),
});
type RegistrationFormValues = z.infer<typeof registrationSchema>;

const UserRegistration: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [apiMessage, setApiMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const onSubmit = async (data: RegistrationFormValues) => {
    console.log("Form data:", data);

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success message
        setApiMessage({ type: "success", text: result.message });
      } else {
        // Show error message
        setApiMessage({ type: "error", text: result.message });
      }
    } catch (error) {
      // Handle fetch errors
      setApiMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      });
    }
  };

  return (
    <div>
      {apiMessage && (
        <Alert severity={apiMessage.type} sx={{ marginBottom: "16px" }}>
          {apiMessage.text}
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        {/* Name Field */}
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant="outlined"
              label="Name"
              placeholder="Enter Name"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />

        {/* Email Field */}
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              label="Email"
              placeholder="Enter Email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        {/* Password Field */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              type="password"
              variant="outlined"
              label="Password"
              placeholder="Enter Password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />

        {/* Submit Button */}
        <div className="flex justify-start mt-4">
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
