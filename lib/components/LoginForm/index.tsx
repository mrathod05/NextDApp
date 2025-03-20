"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import FormErrorMessage from "@/lib/components/FormErrorMessage";
import { authSchema } from "@/lib/FormSchema";

type AuthPayload = {
  email: string;
  password: string;
  username?: string;
};

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver<AuthPayload>(authSchema),
  });

  const handleAuth = async (data: AuthPayload) => {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (!res?.ok) {
      alert("Something went wrong");
      return;
    }

    redirect("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-black text-yellow-400 shadow-lg rounded-lg p-8 max-w-md w-full border border-yellow-500"
      >
        {/* Toggle Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-extrabold">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h1>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-yellow-300 text-sm underline hover:text-yellow-500 transition"
          >
            {isSignUp ? "Have an account? Sign In" : "New user? Sign Up"}
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleAuth)} className="space-y-4">
          {/* Email Field */}
          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="w-full border border-yellow-400 bg-transparent text-yellow-300 placeholder-yellow-500 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.email?.message && (
              <FormErrorMessage message={errors.email.message} />
            )}
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="w-full border border-yellow-400 bg-transparent text-yellow-300 placeholder-yellow-500 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.password?.message && (
              <FormErrorMessage message={errors.password.message} />
            )}
          </div>

          {/* Username Field (Only for Sign-Up) */}
          {isSignUp && (
            <div>
              <input
                type="text"
                {...register("username")}
                placeholder="Username"
                className="w-full border border-yellow-400 bg-transparent text-yellow-300 placeholder-yellow-500 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.username?.message && (
                <FormErrorMessage message={errors.username.message} />
              )}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 px-4 rounded-lg hover:bg-yellow-600 transition mt-6 font-bold"
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>

        {/* Redirect Button */}
        {!isSignUp && (
          <div className="text-center mt-4">
            <button className="text-yellow-300 hover:text-yellow-500 transition">
              Forgot password?
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AuthForm;
