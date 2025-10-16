import { useState } from "react";
import style from "./style.module.css";

import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Loader from "../loader/Loader";

type ValueTypes = {
    email: string;
    password: string;
};

const initialValues: ValueTypes = {
    email: "john@mail.com",
    password: "changeme",
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        // Toggle password visibility
    };

    // 🛠️ Improved handleSubmit function
    const handleSubmit = async (values: ValueTypes) => {
        setLoading(true);

        try {
            const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Login failed! Check your credentials.");
            }

            console.log("Login Success:", data);
            setLoading(false);

            if (data.access_token) {
                localStorage.setItem("token", data.access_token); // Store token
                navigate("/"); // Redirect to home page
            }
        } catch (error) {
            console.error("Login Error:", error);
            setLoading(false);
            if (error instanceof Error) {
                alert(error.message || "Something went wrong! Please try again.");
            } else {
                alert("Something went wrong! Please try again.");
            }
        }
    };

    if (loading) {
        return (
            <div className={style.container}>
                <Loader />
            </div>
        );
    }

    return (
        <main className={style.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit} // ✅ No need for extra function
            >
                <Form className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-96">
                    <h1 className={style.title}>Login</h1>

                    {/* Email Field */}
                    <div className="mb-5">
                        <label className={style.label} htmlFor="email">
                            Email
                        </label>
                        <Field type="text" name="email" id="email" className={style.input} />
                        <ErrorMessage name="email" component="section" className={style.error} />
                    </div>

                    {/* Password Field */}
                    <div className="mb-5">
                        <label className={style.label} htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <Field
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                className={style.input}
                            />
                            <button
                                type="button"
                                onClick={handleShowPassword}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                            >
                                {showPassword ? <IoEyeSharp size={20} /> : <IoEyeOffSharp size={20} />}
                            </button>
                        </div>
                        <ErrorMessage name="password" component="section" className={style.error} />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className={style.button}>
                        Submit
                    </button>
                </Form>
            </Formik>
        </main>
    );
}