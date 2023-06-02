import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState({
    phoneNumber: "",
    password: "",
  });
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={submitHandler}
      className="mb-8 bg-white border border-borderColor rounded-lg p-8 flex flex-col items-center justify-center gap-4"
      action="text"
    >
      <h1 className="text-primary font-bold text-4xl italic">YaRa</h1>
      <div className="w-full">
        <h2 className="font-bold text-xl ">ورود</h2>
      </div>

      <div className="gap-2 flex flex-col items-start justify-center">
        <label htmlFor="phoneNumber">تلفن همراه</label>
        <input
          value={user.phoneNumber}
          name="phoneNumber"
          onChange={changeHandler}
          id="first_name"
          class="outline-none w-72 md:w-96 bg-gray-50 border border-borderColor text-textPrimary text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
          type="text"
        />
      </div>
      <div className="gap-2 flex flex-col items-start justify-center">
        <label htmlFor="password">رمز عبور</label>
        <input
          value={user.password}
          name="password"
          onChange={changeHandler}
          id="first_name"
          class="outline-none w-72 md:w-96 bg-gray-50 border border-borderColor text-textPrimary text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
          type="text"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-primary rounded-lg text-white"
      >
        ورود
      </button>
      <Link className="w-full" to="/signup">
        <div className="text-textSecondary hover:text-textPrimary cursor-pointer w-full ">
          هنوز ثبت نام نکرده اید؟
        </div>
      </Link>
    </form>
  );
};

export default LoginForm;
