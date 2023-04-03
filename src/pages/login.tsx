import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

interface Inputs {
  email: string;
  password: string;
}

function Login() {
  const [login, setLogin] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      // await sign in
    } else {
      // await signup
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        fill
        className="-z-10 !hidden opacity-60 sm:block"
        style={{ objectFit: 'cover' }}
        alt="background image"
      />
      <div className="absolute left-2 font-bold top-1 h-20 w-44 cursor-pointer md:left-8 md:top-4">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          fill
          style={{ objectFit: 'contain' }}
          alt="login logo"
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register('email', {
                required: true,
              })}
            />
          </label>
          {errors.email && (
            <span className="inline-block w-full bg-slate-300 border-l-4 border-[#E50914] text-red-700 pl-2 font-semibold ">
              Email is required.
            </span>
          )}

          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register('password', {
                required: true,
              })}
            />
          </label>

          {errors.password && (
            <span className="inline-block w-full bg-slate-300 border-l-4 border-[#E50914] text-red-700 pl-2 font-semibold ">
              Password is required.
            </span>
          )}
        </div>
        <button
          className="w-full rounded bg-[#E50914] py-3 font-semibold"
          type="submit"
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?{' '}
          <button
            className="cursor-pointer text-white hover:underline"
            type="submit"
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
