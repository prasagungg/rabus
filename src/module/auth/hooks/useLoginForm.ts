import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "email is required.",
    })
    .email("Email Tidak Valid"),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export const useLoginForm = () => {
  return useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
};
