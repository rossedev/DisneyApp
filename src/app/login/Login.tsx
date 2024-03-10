"use client";

import { useAuthContext } from "@/context/AuthContext";
import { Input } from "../components/Input";
import { Loading } from "../components/Loading";
import { useModifyUser } from "../hooks/useModifyUser";
import { LayoutFormUser } from "../components/LayoutFormUser";

export default function Login() {
  const authContext = useAuthContext();
  const { user, loading, errors, handleChange, handleFormSubmit } =
    useModifyUser();

  const onSubmitLogin = () => {
    if (authContext) {
      handleFormSubmit(authContext.login);
    }
  };

  return (
    <LayoutFormUser
      title="We miss you!"
      nameButton="Log on"
      onSubmit={onSubmitLogin}
      loading={loading}
      errors={errors}
    >
      <Input
        type="email"
        name="email"
        placeholder="example@example.com"
        onChange={handleChange}
        value={user.email}
        label="Email"
        idName="email"
        className="text-gray-200"
        classNameInput={`${errors.email ? "border-2 border-red-800" : ""}`}
      />
      {errors.email && (
        <p className="text-sm text-red-500 mt-1">{errors.email}</p>
      )}
      <Input
        type="password"
        name="password"
        placeholder="*****"
        onChange={handleChange}
        value={user.password}
        label="Password"
        idName="password"
        className="text-gray-200 mt-4"
        classNameInput={`${errors.password ? "border-2 border-red-800" : ""}`}
      />
      {errors.password && (
        <p className="text-sm text-red-500 mt-1">{errors.password}</p>
      )}
    </LayoutFormUser>
  );
}
