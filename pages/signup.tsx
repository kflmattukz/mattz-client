import Link from "next/link";
import { Navbar, Input } from "../components";
import { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3001/api/auth/signin", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className='h-screen grid place-items-center'>
        <div className='border w-2/6 border-gray-500/10 rounded-lg shadow-lg p-5 subpixel-antialiased space-y-5'>
          <h2 className='text-center text-3xl font-bold text-gray-700'>
            Signup
          </h2>
          <Input
            label='email'
            name='email'
            inline={false}
            value={email}
            id='email'
            placeholder='ex. johndoe@gmail.com'
            onChange={(event: any) => setEmail(event.target.value)}
          />
          <Input
            label='password'
            type='password'
            inline={false}
            name='password'
            id='password'
            placeholder='password...'
            onChange={(event: any) => setPassword(event.target.value)}
          />
          <button
            onClick={handleLogin}
            className='w-full outline-none px-5 py-2 text-white text-sm shadow-md border border-blue-500/25 font-semibold rounded-md bg-blue-500 focus:ring ring-blue-500 ring-offset-2 duration-300'
          >
            Signup
          </button>
          <div>
            <span className='text-sm text-gray-700'>
              Already have account ?{" "}
              <Link href='signin' className='text-blue-400'>
                signin
              </Link>{" "}
              here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
