import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { loginFormSchema, useLoginForm } from "./hooks";
import { z } from "zod";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

function Login() {
  const form = useLoginForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    setLoading(true);

    try {
      const response = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[343px] bg-white p-6 shadow-lg rounded-lg grid gap-3">
      <h1 className="text-2xl font-bold text-center">RABUS</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Passowrd" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Login {loading}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Login;
