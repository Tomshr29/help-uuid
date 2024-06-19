import { useForm } from "@inertiajs/react";
import React from "react";

export default function RegisterPage() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  });

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    post("/register");
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={submit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => setData("password", e.target.value)}
          />
          {errors.password && <div>{errors.password}</div>}
        </div>
        <button type="submit" disabled={processing}>
          Register
        </button>
      </form>
    </div>
  );
}
