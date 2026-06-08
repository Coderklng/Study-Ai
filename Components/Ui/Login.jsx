"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaBrain } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import Image from "next/image";

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

import { Button } from "@/components/ui/button"

const LoginUi = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState([]);
    const validateForm = () => {
        let newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!email.includes("@")) {
            newErrors.email = "Invalid email format";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (!visible) {
            newErrors.accepted = "Please accept terms & conditions";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };
    const submitForm = async () => {
        if (!validateForm()){
           setTimeout(()=>{
            setOpen(true);
           });
        }
        try {
            const res = await axios.post("https://server-df58.onrender.com/user/login", {
                "email": email,
                "password": password
            }, {
                headers: { "Content-Type": "application/json" }
            });
            setEmail("");
            setPassword("");
            setMessage("");
            console.log(res.data);
            setMessage(res.data.message || "Welcome Back");
            localStorage.setItem("key", res.data.token);

            setTimeout(() => {
                router.push("/dashboard");
            }, 100);
        } catch (error) {
            const msg = error.response?.data?.message || "Login Failed";
            setEmail("");
            setPassword("");
            setMessage(msg);
            setTimeout(() => {
                setMessage("");
            }, 2000);

        }
    }
    return (
        <>

            <div className="w-full min-h-screen bg-zinc-950 backdrop-blur-md shadow-lg">
                {/* flex - work */}
                <div className="w-full px-3">
                    {/* grid - work  */}
                    <div className="w-full grid grid-cols-1 py-2 md:grid-cols-2 ">

                        <div className="w-full h-full  rounded-3xl bg-gradient-to-br from-black to-black shadow-lg backdrop-blur-md">
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
                                    <div className="py-20 text-black  bg-white shadow-lg  rounded-3xl w-full flex justify-center gap-3 flex-col ">
                                        <h1 className="px-5 text-2xl md:text-3xl font-bold">Login to <span className="text-violet-800"> Study AI</span> </h1>
                                        <p className="text-slate-600 px-5">Enter your credentials to continue</p>
                                        <div className="h-full  p-5  py-5  flex flex-col">
                                            <label>Email Address</label>

                                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full shadow-lg  rounded-xl border-gray-300 border-2 p-3" type="email" placeholder="Enter your email" />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm">{errors.email}</p>
                                            )}
                                             <label>Password</label>
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
                                            </div>
                                            <div className="mt-3 flex justify-between items-center space-x-2">
                                                <div className="flex  gap-2 items-center">
                                                    <Checkbox checked={visible} onCheckedChange={(value) => setVisible(value)} id="terms" className="border-blue-500 data-[state=checked]:bg-violet-800 data-[state=checked]:border-blue-500" />
                                                    <Label htmlFor="terms" className="text-xs w-full">
                                                        Accept terms and conditions
                                                    </Label>

                                                </div>
                                                <Link href="#" className="text-violet-800 text-xs">forgot password </Link>
                                            </div>

                                            <AlertDialog open={open} onOpenChange={setOpen} className="bg-zinc-950">
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="outline" className={`w-full ${!visible ? "opacity-0 cursor-not-allowed" : "bg-zinc-950"} bg-zinc-950 p-6 mt-5 rounded-xl text-white`} onClick={submitForm}>Login</Button>
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
                                            <div className="w-full mx-auto flex items-center justify-center py-10">
                                                <h2>Don't have an account? <span><Link href="/auth/signup" className="text-violet-800">Sign up</Link></span> </h2>
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

export default LoginUi;