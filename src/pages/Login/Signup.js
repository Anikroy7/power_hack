import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {
        fetch("http://localhost:5000/api/registration", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    toast.error(data.error)
                }
                if (data.message) {
                    toast.error("user already exits")
                }
                const token = data.token
                if (token) {
                    localStorage.setItem('access-token', token)
                    navigate('/')
                }
            })

    };



    return (
        <div className="mt-16 p-5 bg-green-200 w-96 mx-auto pt-3">

            <div className="text-center">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-3xl">Sign Up</h3>
                    <div className="form-control">
                        <input
                            type="name"
                            id="name"
                            className="mb-2 mt-5 p-3"
                            required
                            placeholder='Enter your name'
                            {...register("name")} />
                    </div>
                    <div className="form-control">
                        <input
                            type="email"
                            id="email"
                            className="mb-2 mt-5 p-3"
                            required
                            placeholder='Enter your email'
                            {...register("email")}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            type="password"
                            id="password"
                            required
                            className="mb-2 mt-5 p-3"
                            placeholder='******'
                            {...register("password")}
                        />

                    </div>
                    <p>Already have an account? <Link to={'/login'}>Login here</Link></p>
                    <input className="bg-blue-500 mt-5 px-5 py-2 text-white" type="submit" value={"Login"} />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
