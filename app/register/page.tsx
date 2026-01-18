"use client";

import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans selection:bg-zinc-200 dark:bg-black dark:selection:bg-zinc-800">
      <div className="w-full max-w-xl p-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50">
              Create Account
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Enter your information to secure your medical profile.
            </p>
          </div>

          <form className="space-y-4">
            {/* Row 1: Names */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm outline-none transition-all focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-50"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm outline-none transition-all focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-50"
                  required
                />
              </div>
            </div>

            {/* Row 2: Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm outline-none transition-all focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-50"
                required
              />
            </div>

            {/* Row 3: Phone & SSN */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm outline-none transition-all focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-50"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  SSN (Last 4)
                </label>
                <input
                  type="password"
                  maxLength={11}
                  placeholder="XXX-XX-XXXX"
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm outline-none transition-all focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-50"
                  required
                />
              </div>
            </div>

            {/* Row 4: Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm outline-none transition-all focus:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:focus:border-zinc-50"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 flex h-11 w-full items-center justify-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>

          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
