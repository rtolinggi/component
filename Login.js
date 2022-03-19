import { NavLink } from "react-router-dom";
import { LockClosedIcon, MailIcon } from "@heroicons/react/solid";

const Login = () => {
  return (
    <div className='flex min-h-screen min-w-full justify-center items-center px-2 py-2'>
      <div className='flex w-full max-w-2xl'>
        {/* Login Content */}
        <div className='flex w-full max-w-sm mx-auto'>
          <form className='flex flex-col mx-auto bg-white w-full rounded-xl shadow-xl lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-tr-none lg:rounded-br-none items-center justify-center px-8 py-8'>
            <h1 className='text-xl font-extrabold tracking-tighter text-teal-700'>
              LOGIN
            </h1>
            <hr className='w-10 border-2 border-teal-700 rounded-full' />
            <p className='text-sm font-normal text-gray-500 text-center -tracking-tighter mt-2'>
              Please Insert Youre Credential
            </p>
            <hr className='text-slate-400 border-1 w-full mt-6' />
            <div className='space-y-4 w-full mt-6'>
              <div className='relative flex flex-col w-full'>
                <label
                  htmlFor='email'
                  className='text-xs text-gray-700 font-medium -tracking-tighter mb-1'>
                  Email
                </label>
                <MailIcon className='absolute left-0 top-7 w-5 h-5 text-slate-500 ml-2' />
                <input
                  id='email'
                  type='email'
                  placeholder='Email'
                  className='bg-slate-50 py-2 px-2 text-sm pl-8 font-normal text-slate-700 outline-none focus:border focus:border-teal-200 focus:ring focus:ring-teal-100 focus:bg-white rounded-md '
                  autoComplete='off'
                />
              </div>
              <div className='relative flex flex-col w-full'>
                <label
                  htmlFor='password'
                  className='text-xs text-gray-700 font-medium -tracking-tighter mb-1'>
                  Password
                </label>
                <LockClosedIcon className='absolute left-0 top-7 w-5 h-5 text-slate-500 ml-2' />
                <input
                  id='password'
                  type='password'
                  placeholder='Password'
                  className='bg-slate-50 py-2 px-2 pl-8 text-sm font-normal text-slate-700 outline-none focus:border focus:border-teal-200 focus:ring focus:ring-teal-100 focus:bg-white rounded-md'
                />
              </div>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center'>
                  <input type='checkbox' className='accent-teal-600' />
                  <label className='ml-1 text-sm text-slate-700 font-normal'>
                    Remember me
                  </label>
                </div>
                <NavLink
                  to={"/forgot"}
                  className='ml-1 text-sm text-teal-700 font-medium '>
                  Forgot Password ?
                </NavLink>
              </div>
            </div>
            <button
              type='submit'
              className='text-white outline-none bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-8 py-2.5 w-full mr-2 mt-6 lg:w-fit lg:self-start'>
              Login
            </button>
            <hr className='text-slate-400 border-1 w-full mt-6' />
            <p className='text-xs text-slate-600 -tracking-tighter font-medium mt-6 text-center'>
              Don't have an Account ?{" "}
              <span className='font-extrabold text-teal-700 tracking-tighter'>
                SIGN UP
              </span>
            </p>
          </form>
        </div>
        {/* Register Content */}
        <div className='hidden lg:flex lg:flex-col w-full rounded-tr-xl rounded-br-xl shadow-xl justify-center items-center bg-teal-600 opacity-90'>
          <h1>Create New Account</h1>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
