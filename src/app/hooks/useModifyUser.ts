import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { User } from "../types/User.types";

export const useModifyUser = () => {
  const router = useRouter();

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
    general: "",
  });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = (
    funcModify: (email: string, password: string) => Promise<User>
  ) => {
    setErrors((prevErrors) => ({ ...prevErrors, general: "" }));
    const hasErrorEmail =  handleValidation("email", user.email);
    const hasErrorPassword = handleValidation("password", user.password);

    if (!user.email || !user.password || !!hasErrorEmail || !!hasErrorPassword) {
      return;
    }

    setLoading(true);

    if (funcModify) {
      funcModify(user.email, user.password)
        .then(() => {
          setLoading(false);

          router.push("/home");
        })
        .catch(() => {
          setLoading(false);
          setErrors((prevErrors) => ({
            ...prevErrors,
            general: "An error occurred, try again",
          }));
        });
    }
  };

  const handleValidation = (field: string, value: string) => {
    let errorMessage = "";
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!value) {
      errorMessage = `Missing ${field} field`;
    } else if (field === "email" && !regex.test(value)) {
      errorMessage = "Incorrect email format";
    } else if (field === "password" && value.length < 6) {
      errorMessage = "Must be longer than 6 characters";
    } else {
      errorMessage = "";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage,
    }));

    return errorMessage;
  };

  return {
    user,
    errors,
    loading,
    handleChange,
    handleFormSubmit,
  };
};
