import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <img
          src="https://s3-alpha-sig.figma.com/img/e566/46e5/dda5349c2cc7c182a5f83583b56eecd2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bleqoRv~KA6xTnYTQjgPDyeaJ4CuvRKkcy9yhB8nscAAffmsczoiMfGxOtGyKjYgqS6GUnAQsMp7d2QvLaX5kQ-8nE5v1yqqRYfQA1iQtFCbma2Gh4dQP8TfCsTnkw9eiHudeDJgmDcmFqupYGRBiWY9JxS0EN4hczBcB~M6fxagd6aMjt6I~dlB4lLc33BaKhZLffhlGVTb2i06nXDEJGqnfMTmYcrKSsWCcpU5UOYR4KSep4Yq8de2A4QB9By5kxor86YNWI9KjYUau0Z2SPz3PIWfwkKmlvVimZ7Yq43wCxPtbBnvydduHWTEVT85TEN67oquqW2b8ocIzEViNg__"
          className="w-full h-full object-cover"
          alt="signup background"
        />
      </div>
      <div className="w-1/3 flex flex-col justify-center items-start p-12">
        <h1 className="text-[#36925afb] text-4xl font-bold mb-7">Sign Up</h1>
        <input
          type="text"
          placeholder="Username"
          className="border-2 border-gray-500 rounded-md p-2 mb-7 w-[400px] h-[50px]"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-500 rounded-md p-2 mb-7 w-[400px] h-[50px]"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="border-2 border-gray-500 rounded-md p-2 mb-7 w-[400px] h-[50px]"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-500 rounded-md p-2 mb-7 w-[400px] h-[50px]"
        />
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <p>
            I agree <strong>Terms and Conditions & Private Policy</strong> by Signing in
          </p>
        </div>
        <div className="flex justify-center mt-10 w-[400px]">
          <Link to="/farmanalytics">
            <button className="bg-[#36925afb] text-white text-xl font-bold rounded-md p-2 w-[250px] h-[50px]">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp

