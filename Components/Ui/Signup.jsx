"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBrain } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from "axios";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


const SignupUi = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [message, setMessage] = useState("");
    const [activated, setActivated] = useState(false);
    const [open, setOpen] = useState(false);
    const [errors,setErrors] = useState([]);
    const [showPassword,setShowPassword] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const validate = ()=>{
       let newError = {};
       if(!name){
         newError.name = "Name is required";
       }
       if(!email.includes("@")){
         newError.email = "Invalid Email format";
       }else if(!email){
        newError.email = "Email is required";
       }
       if(!password){
        newError.password = "Password is required";
       }else if(password.length < 6){
        newError.password = "Password must be at least 6 characters";
       }
       setErrors(newError);
       return Object.keys(newError).length === 0;
    }
    const submitForm = async () => {
        if(!validate()){
            setTimeout(()=>{
              setOpen(true);
            },5000);
        }
        try {
            const res = await axios.post("https://server-df58.onrender.com/user/signup", {
                "name": name,
                "email": email,
                "password": password
            },
                {
                    headers: { "Content-Type": "application/json" }
                });
            setName("");
            setEmail("");
            setPassword("");
            console.log(res.data);
            setMessage(res.data.message || "User Valid");
            console.log("token store from localstorage");
            setIsSuccess(true);
        } catch (error) {
            const msg = error.response?.data?.message || "";
            setName("");
            setEmail("");
            setPassword("");
            setMessage(msg);
             setIsSuccess(false);
              setOpen(false);
        }
    }
    return (
        <>
            <div className="w-full min-h-screen bg-zinc-950 backdrop-blur-md shadow-lg">
                {/* flex - work */}
                <div className="w-full px-3">
                    {/* grid - work  */}
                    <div className="w-full grid grid-cols-1 py-2 md:grid-cols-2 ">

                        <div className="w-full h-full  rounded-3xl bg-gradient-to-br from-zinc-950 to-slate-950 shadow-lg backdrop-blur-md">
                            <div className="flex gap-3 p-3 items-center">
                                <img className="w-[70px] h-[70px] rounded-full" src="/download.jpg" />
                                <h1 className="text-white text-2xl font-bold">Study AI</h1>
                            </div>
                            <div className="rounded-3xl py-5 backdrop-blur-md text-white flex mx-auto flex-col">
                                <div className="p-5">
                                    <h1 className="text-5xl p-3  text-white leading-tight">Welcome Back to <br /> <span className="text-violet-800">Study AI</span> </h1>
                                    <p className="text-gray-300 px-3">
                                        Your AI-powered study companion
                                        <br /> Learn smarter.Achieve more.
                                    </p>
                                </div>
                                <div className="w-full flex flex-col items-center">
                                    <img className="rounded-xl w-full md:max-w-md  " src="/login.png" />
                                    <div className="w-full flex p-3 flex-col gap-3 md:gap-5 md:flex-row justify-around items-center">
                                        <div className="w-full md:max-w-md bg-slate-950 p-3 rounded-2xl backdrop-blur-md text-white flex items-center gap-2">
                                            <div className="w-[40px] h-[40px] rounded-xl bg-zinc-900 flex items-center justify-center">
                                                <FaBrain size={30} className="text-violet-900" />
                                            </div>
                                            <div>
                                                <h2>AI-Powered </h2>
                                                <p className="text-slate-400">Smart assistance</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:max-w-md bg-slate-950 p-3 rounded-2xl backdrop-blur-md text-white flex items-center gap-2">
                                            <div className="w-[40px] h-[40px] rounded-xl bg-zinc-900 flex items-center justify-center">
                                                <FaBook size={30} className="text-violet-900" />
                                            </div>
                                            <div>
                                                <h2>Personalized </h2>
                                                <p className="text-slate-400">Tailored for you</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:max-w-md bg-slate-950 p-3 rounded-2xl backdrop-blur-md text-white flex items-center gap-2">
                                            <div className="w-[40px] h-[40px] rounded-xl bg-zinc-900 flex items-center justify-center">
                                                <FaChartLine size={30} className="text-violet-900" />
                                            </div>
                                            <div>
                                                <h2> Track Progress </h2>
                                                <p className="text-slate-400">Smart assistance</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* card -1 complete 
                    */}
                        <div className="w-full min-h-screen">
                            <div className="container h-full ">
                                <div className="px-3">
                                    <div className="py-20 bg-white shadow-lg text-black  rounded-3xl w-full flex justify-center gap-3 flex-col ">
                                        <h1 className="px-5 text-2xl md:text-3xl font-bold">Signup to <span className="text-violet-800"> Study AI</span> </h1>
                                        <p className="text-slate-600 px-5">Enter your credentials to continue</p>
                                        <div className="h-full  p-5  py-5  flex flex-col">
                                            <label>Full Name</label>

                                            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full shadow-lg  rounded-xl border-gray-300 border-2 p-3" type="text" placeholder="Enter your name" />
                                          {errors.name && (
                                                <p className="text-red-500 text-sm">{errors.name}</p>
                                            )}

                                            <label>Email Address</label>

                                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full shadow-lg  rounded-xl border-gray-300 border-2 p-3" type="email" placeholder="Enter your email" />
                                               {errors.email && (
                                                <p className="text-red-500 text-sm">{errors.email}</p>
                                            )}
                                            <br /><label>Password</label>
                                            <div className="relative">

                                                <input
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="w-full mt-2 shadow-lg rounded-xl border-gray-300 border-2 p-3 pr-10"
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Enter your password"
                                                />

                                                <span
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                                >
                                                    {!showPassword ? <FaLock size={20} /> : <FaEye size={20} />}
                                                </span>
                                                 {errors.password && (
                                                <p className="text-red-500 text-sm">{errors.password}</p>
                                            )}
                                            </div>
                                            <div className="mt-3 flex justify-between items-center space-x-2">
                                                <div className="flex  gap-2 items-center">
                                                    <Checkbox checked={activated} onCheckedChange={(value) => setActivated(value)} id="terms" className="border-blue-500 data-[state=checked]:bg-violet-800 data-[state=checked]:border-blue-500" />
                                                    <Label htmlFor="terms" className="text-xs w-full">
                                                        Accept terms and conditions
                                                    </Label>

                                                </div>
                                                <Link href="#" className="text-violet-800 text-xs">forgot password </Link>
                                            </div>


                                            <AlertDialog open={open} onOpenChange={setOpen} className="bg-zinc-950">
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="outline" className={`w-full  ${!activated ? "opacity-50 cursor-not-allowed" : "bg-zinc-950"} p-6 mt-5 rounded-xl text-white`} onClick={submitForm}>Signup</Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>  {message} </AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            Checking your credentials Verifying login details securely Almost there just a moment We are signing you in safely.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                        <AlertDialogAction>Continue</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>

                                            <div className="flex items-center gap-4 my-4">
                                                <div className="h-px flex-1 bg-zinc-300 mt-2 dark:bg-zinc-700" />
                                                <span className="text-xs text-zinc-500">or Continue with</span>
                                                <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700" />
                                            </div>
                                            <div className="flex justify-between flex-col md:flex-row gap-6 w-full">

                                                {/* Google Button */}
                                                <Button
                                                    variant="outline"
                                                    className="flex items-center gap-2 shadow-sm hover:shadow-md transition-all p-6"
                                                >
                                                    <FcGoogle className="text-xl" />
                                                    Continue with Google
                                                </Button>

                                                {/* GitHub Button */}
                                                <Button
                                                    variant="outline"
                                                    className="flex items-center gap-2 shadow-sm p-6 hover:shadow-md transition-all"
                                                >
                                                    <FaGithub className="text-xl" />
                                                    Continue with GitHub
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default SignupUi;