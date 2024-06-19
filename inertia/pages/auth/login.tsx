import { Link, useForm } from "@inertiajs/react";
import type { FormEvent } from "react";

export default function LoginPage() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  });

  function submit(e: FormEvent) {
    e.preventDefault();

    if (processing) {
      return;
    }
    post("/login"),
      {
        onFinish() {
          setData("password", "");
        },
      };
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="rounded-lg bg-white px-6 py-8 shadow sm:px-10">
        <h1 className="text-4xl">Se connecter</h1>
        {"code" in errors && errors.code === "E_INVALID_CREDENTIALS" && (
          <span>No account found with the provided credentials</span>
        )}
        <form className="mb-0 space-y-6" onSubmit={submit}>
          <div className="mx-auto max-w-sm">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                className="block w-full rounded-lg border-gray-200 px-4 py-2.5 shadow-sm outline-none"
              />
              {errors.email && <small>{errors.email}</small>}
            </div>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              className="block w-full rounded-lg border-gray-200 px-4 py-2.5 shadow-sm outline-none"
            />
            {errors.password && <small>{errors.password}</small>}
          </div>
          <button type="submit" disabled={processing}>
            {processing ? "Chargement..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
