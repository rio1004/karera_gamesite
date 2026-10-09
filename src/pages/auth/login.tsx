import { useState } from "react";
import CustomTxt from "../../components/Text";
import InputField from "../../components/InputField";
import CustomButton from "../../components/Button";
import { UI_COLORS } from "../../constants/colors";
import { ICONS, IMAGES } from "../../constants/images";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import type { LoginPayload } from "../../api/types/authType";

const Login = () => {
  const [openModal] = useState(false);
  const { handleLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();

  const login = async (values: LoginPayload) => {
    console.log(values);
    try {
      const res = await handleLogin(values);
      console.log(res);
    } catch (error) {}
  };
  return (
    <div className="flex flex-col min-h-screen relative">
      <div
        className="flex flex-col items-center justify-start p-5 h-[45vh] bg-cover"
        style={{ backgroundImage: `url(${IMAGES.red_bg})` }}
      >
        <div className="relative w-full h-[16%] flex justify-between mb-5">
          <div className="flex-1 flex items-center">
            <img
              src={IMAGES.karera_logo}
              alt="Karera Logo"
              className="h-full"
            />
          </div>
          <img
            src={IMAGES.secure_logo}
            alt="Secured Login"
            className="h-full "
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center -translate-y-1/2">
        <CustomTxt type="h4" text="Let’s Get You Signed In!" weight="bold" />
        <form
          className="relative gap-4 bg-white rounded-[30px] p-6 shadow-lg flex flex-col w-[360px]"
          onSubmit={handleSubmit(login)}
        >
          <InputField
            label="asdfasdf"
            placeholder="Enter your username"
            type="text"
            registration={register("userNameOrEmail", {
              required: "Username is required",
            })}
            errorMsg={errors.userNameOrEmail?.message}
          />

          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
            registration={register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            errorMsg={errors.password?.message}
          />

          <CustomButton
            bgColor={UI_COLORS.LINEAR.green}
            text="Login"
            type="submit"
          />
        </form>
      </div>
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white w-[365px] h-[119px] flex items-center justify-start p-3 rounded-[10px] shadow-lg">
            <img
              src={ICONS.check}
              alt="Success"
              className="w-[107px] h-[66px] mr-[-10px]"
            />
            <span className="text-[24px] font-normal text-[#333] ml-2">
              Your account has been successfully logged in.
            </span>
          </div>
        </div>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <img src={IMAGES.pagcor_logo} alt="Your Logo" className="w-[28vh]" />
      </div>
    </div>
  );
};

export default Login;
