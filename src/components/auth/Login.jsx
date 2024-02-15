import React from "react";
import { Link } from "react-router-dom";
import AuthIntro from "./AuthIntro";
function Login() {
  return (
    <>
      <div className="container grid grid-cols-12 px-5 py-10 sm:px-10 sm:py-14 md:px-36 lg:h-screen lg:max-w-[1550px] lg:py-0 lg:pl-14 lg:pr-12 xl:px-24 2xl:max-w-[1750px]">
        <div className="relative z-50 h-full col-span-12 p-7 sm:p-14 bg-white rounded-2xl lg:bg-transparent lg:pr-10 lg:col-span-5 xl:pr-24 2xl:col-span-4 lg:p-0 before:content-[''] before:absolute before:inset-0 before:-mb-3.5 before:bg-white/40 before:rounded-2xl before:mx-5">
          <div className="relative z-10 flex flex-col justify-center w-full h-full py-2 lg:py-32">
            <div className="flex rounded-[0.8rem] border-primary/30">
              <img
                src="/assets/images/logo/logo1.jpg"
                alt="3Chaps"
                className="w-20"
                style={{ borderRadius: "50px" }}
              />
            </div>
            <div className="mt-10">
              <div className="mt-2.5 text-slate-600">
                Don't have an account?
                <Link className="font-medium text-primary" to={'/register'}>
                  Sign Up
                </Link>
              </div>
              <div
                role="alert"
                className="alert relative border rounded-md px-5 py-4 border-primary text-primary dark:border-primary my-7 flex items-center rounded-[0.6rem] border-primary/20 bg-primary/5 px-4 py-3 leading-[1.7]"
              >
                <div className="">
                  <i
                    data-tw-merge=""
                    data-lucide="lightbulb"
                    className="mr-2 h-7 w-7 fill-primary/10 stroke-[0.8]"
                  ></i>
                </div>
                <div className="ml-1 mr-8">
                  Welcome to <span className="font-medium">3Chaps!</span>
                </div>
                <button
                  data-tw-merge=""
                  data-tw-dismiss="alert"
                  type="button"
                  aria-label="Close"
                  className="py-2 px-3 absolute right-0 my-auto mr-2 btn-close text-primary"
                >
                  <i
                    data-tw-merge=""
                    data-lucide="x"
                    className="stroke-[1] w-5 h-5"
                  ></i>
                </button>
              </div>
              <div className="mt-6">
                <label
                  data-tw-merge=""
                  className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right"
                >
                  Email*
                </label>
                <input
                  data-tw-merge=""
                  type="text"
                  placeholder="elysee@3chaps.rw"
                  className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 block rounded-[0.6rem] border-slate-300/80 px-4 py-3.5"
                />
                <label
                  data-tw-merge=""
                  className="inline-block mb-2 group-[.form-inline]:mb-2 group-[.form-inline]:sm:mb-0 group-[.form-inline]:sm:mr-5 group-[.form-inline]:sm:text-right mt-4"
                >
                  Password*
                </label>
                <input
                  data-tw-merge=""
                  type="password"
                  placeholder="************"
                  className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 block rounded-[0.6rem] border-slate-300/80 px-4 py-3.5"
                />
                <div className="flex mt-4 text-xs text-slate-500 sm:text-sm">
                  <div className="flex items-center mr-auto">
                    <input
                      data-tw-merge=""
                      type="checkbox"
                      className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50 mr-2.5 border"
                      id="remember-me"
                    />
                    <label
                      className="cursor-pointer select-none"
                      htmlFor="remember-me"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="">Forgot Password?</a>
                </div>
                <div className="mt-5 text-center xl:mt-8 xl:text-left">
                  <button
                    data-tw-merge=""
                    className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary rounded-full w-full bg-gradient-to-r from-theme-1/70 to-theme-2/70 py-3.5 xl:mr-3"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthIntro />
    </>
  );
}

export default Login;
