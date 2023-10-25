"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import service from "../(service)/service";

const LoginMenu = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm({
    defaultValues: { username: "", password: "" },
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    const responseLogUser = await service.login(data);
    if (responseLogUser.ok) {
      document.getElementById("myform").reset();
      router.push("/DataPage");
    } else {
      alert(responseLogUser.json().error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-yellow-300">
      <div className="w-1/4 min-w-fit min-h-[220px] flex flex-col bg-blue-500 opacity-70 rounded-xl p-6">
        <header className="font-semibold text-3xl text-center mb-3">
          Sing in
        </header>

        <form
          id="myform"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="username"> User name</label>
            <input
              className="rounded-md leading-7 px-2"
              id="username"
              name="username"
              type="text"
              {...register("username", {
                required: "Username is required",
              })}
            />
            {errors.username && (
              <p role="alert" className="text-red-600">
                {errors.username?.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="rounded-md leading-7 px-2"
              id="password"
              name="password"
              type="text"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p role="alert" className="text-red-600">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            disabled={!isValid}
            type="submit"
            className={`${
              isValid ? "bg-green-900 text-white" : "bg-gray-500 text-base"
            } rounded-md leading-7  font-semibold`}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginMenu;
