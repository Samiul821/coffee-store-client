import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SignIn = () => {

  const handleSignIn = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md p-6 sm:p-8 rounded-md shadow-lg bg-white text-gray-800"
      >
        <motion.h2
          variants={childVariants}
          className="mb-3 text-3xl font-semibold text-center"
        >
          Login to your account
        </motion.h2>

        <motion.p
          variants={childVariants}
          className="text-sm text-center text-gray-600"
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="focus:underline hover:underline text-violet-600"
          >
            Sign up here
          </Link>
        </motion.p>

        <motion.div variants={childVariants} className="my-6 space-y-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="hover:bg-violet-600 hover:text-white flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-300 focus:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </motion.button>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="flex items-center w-full my-4"
        >
          <hr className="w-full text-gray-600" />
          <p className="px-3 text-gray-600">OR</p>
          <hr className="w-full text-gray-600" />
        </motion.div>

        <motion.form
          onSubmit={handleSignIn}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={childVariants} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm">Password</label>
                <a href="#" className="text-xs hover:underline text-gray-600">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-violet-600"
              />
            </div>
          </motion.div>

          <motion.input
            variants={childVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-white cursor-pointer hover:opacity-90 transition"
            type="submit"
            value="Sign in"
          />
        </motion.form>
      </motion.div>
    </div>
  );
};

export default SignIn;
