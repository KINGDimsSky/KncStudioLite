import { Sparkle } from 'lucide-react';
import React from 'react';
import InputForm from '../InputForm';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const AuthLayout = ({ title }) => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate(title == 'SignIn' ? '/auth/sign-Up' : '/auth/sign-in');
  };

  const confirmHandler = (event) => {
    event.preventDefault();
    navigate(title == 'SignIn' ? '/' : '/auth/sign-in');
  };

  return (
    <div className="flex flex-col w-64 md:w-96 py-2 px-4">
      <div className="flex gap-2 items-center mb-3 md:mb-5 justify-center">
        <Sparkle className="text-white" />
        <h2 className="text-xl font-semibold text-white">{title == 'SignUp' ? 'Sign Up' : 'Sign In'}</h2>
      </div>
      <form onSubmit={confirmHandler}>
        <InputForm htmlFor="username" type="text" label="Username" placeholder="Username" />
        <InputForm htmlFor="password" type="password" label="Password" placeholder="Password" />
        {title == 'SignUp' && <InputForm htmlFor="passwordConfirm" type="password" label="Confirm Password" placeholder="Password" />}
        <Button type="submit" className="mt-3 w-full py-2 bg-purple-500 text-white">
          Continue
        </Button>
        <div className="mb-6 gap-2 flex items-center justify-center">
          <div className="w-full border-y border-gray-300"></div>
          <h2 className="text-gray-400 text-sm">OR</h2>
          <div className="w-full border-y border-gray-300"></div>
        </div>
      </form>
      <Button
        Logo={
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
        }
      >
        {title == 'SignUp' ? 'Sign Up' : 'Sign In'} With Google
      </Button>
      <Button
        Logo={
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
            <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
          </svg>
        }
      >
        {title == 'SignIn' ? 'Sign Up' : 'Sign In'} With Apple
      </Button>
      <h2 className="mt-2 text-xs tracking-tighter text-white/70">
        {title == 'SignUp' ? 'Already Have Account?' : 'Dont have an Account?'}{' '}
        <span onClick={buttonHandler} className="ml-1 font-semibold text-purple-500 cursor-pointer">
          {title == 'SignIn' ? 'Sign Up' : 'Sign In'}
        </span>
      </h2>
    </div>
  );
};

export default AuthLayout;
