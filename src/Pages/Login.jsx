import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('example@gmail.com');
  const [password, setPassword] = useState('••••••••••');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Side - Illustration (hidden on small screens) */}
        <div className="hidden md:flex flex-1 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-50 p-12 items-center justify-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-20 left-20 w-16 h-16 bg-pink-200 rounded-full opacity-60"></div>
          <div className="absolute top-32 right-16 w-12 h-12 bg-purple-200 rounded-full opacity-50"></div>
          <div className="absolute bottom-20 left-16 w-20 h-20 bg-orange-200 rounded-full opacity-40"></div>
          
          {/* Main illustration container */}
          <div className="relative z-10 flex items-center justify-center">
            
            {/* Security/Lock Icon */}
            <div className="absolute -left-20 top-8 w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
              <Lock className="w-10 h-10 text-white" />
            </div>
            
            {/* Phone/Device */}
            <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-500">
              <div className="w-48 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border-4 border-gray-700 relative overflow-hidden">
                {/* Phone screen */}
                <div className="absolute inset-2 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-4">
                  {/* Top bar */}
                  <div className="w-full h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Profile card */}
                  <div className="bg-white/90 rounded-xl p-3 shadow-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-2">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Bottom section */}
                  <div className="mt-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl h-16 shadow-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Character/Person */}
            <div className="absolute -left-8 -bottom-12 transform hover:scale-105 transition-transform duration-300">
              <div className="relative">
                {/* Body */}
                <div className="w-12 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-t-full"></div>
                {/* Head */}
                <div className="w-8 h-8 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full absolute -top-6 left-2 shadow-lg"></div>
                {/* Hair */}
                <div className="w-6 h-4 bg-gradient-to-br from-purple-700 to-purple-800 rounded-t-full absolute -top-8 left-3"></div>
                {/* Arm */}
                <div className="w-3 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full absolute top-2 -right-2 transform rotate-45"></div>
                {/* Legs */}
                <div className="w-3 h-8 bg-gradient-to-br from-purple-700 to-purple-800 rounded-full absolute top-12 left-2"></div>
                <div className="w-3 h-8 bg-gradient-to-br from-purple-700 to-purple-800 rounded-full absolute top-12 left-7"></div>
              </div>
            </div>
            
            {/* Gear decorations */}
            <div className="absolute top-4 right-8 w-8 h-8 border-4 border-gray-400 rounded-full">
              <div className="absolute inset-1 border-2 border-gray-400 rounded-full"></div>
            </div>
            <div className="absolute top-12 right-4 w-6 h-6 border-3 border-gray-300 rounded-full transform rotate-45">
              <div className="absolute inset-1 border-2 border-gray-300 rounded-full"></div>
            </div>
            
            {/* Abstract shapes */}
            <div className="absolute bottom-16 right-20 w-24 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-80 transform rotate-45"></div>
          </div>
        </div>
        
        {/* Right Side - Login Form */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center w-full max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-light text-gray-600 mb-2">Welcome to</h1>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
             Company
            </h2>
          </div>
          
          {/* Social Login Buttons */}
          <div className="space-y-4 mb-6">
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-600 font-medium">Login with Google</span>
            </button>
            
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-gray-600 font-medium">Login with Facebook</span>
            </button>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>
          
          {/* Login Form */}
          <div className="space-y-4">
            <div>
              <div className="block text-sm font-medium text-gray-600 mb-2">Email</div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-gray-50"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            
            <div>
              <div className="block text-sm font-medium text-gray-600 mb-2">Password</div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-gray-50"
                  placeholder="••••••••••"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </div>
              
              <button className="text-sm text-purple-600 hover:text-purple-800 transition-colors">
                Forgot Password?
              </button>
            </div>
            
            <button
              onClick={() => console.log('Login clicked')}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Login
            </button>
          </div>
          
          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{' '}
            <button className="text-purple-600 hover:text-purple-800 transition-colors font-medium">
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}