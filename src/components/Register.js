import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

function Register(props) {

    // const gotoLogin = ()=>{

    // }
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }
  
    const handleRegister = (values) => {
        console.log(values)

        axios.post(`http://localhost:4000/api/register`, values)
            .then((response) => {
                console.log(response)
                props.setRegPopup(false)
                props.setPopup(true)
                // sessionStorage.setItem('user', JSON.stringify(response.data.user))
                // sessionStorage.setItem('token', response.data.token)
            })
            .catch((error) => {
                console.error("Error occurred:", error);
            });


    }
    return (
        <>
            <div className='w-full h-screen bg-black bg-opacity-40 absolute z-20 flex justify-center items-center'>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-700 relative">
                    {/* <div onClick={closePopup} className="w-6 h-6 rounded-full bg-gray-200 absolute right-1 top-1 flex items-center justify-center cursor-pointer"><AiOutlineClose className='text-sm'/></div> */}
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Register in to your account
                        </h1>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={handleRegister}
                        >
                            <Form className='space-y-4 md:space-y-4'>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <Field type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-btext-blue-600 focus:border-btext-blue-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <Field type="email" name="email" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-btext-blue-600 focus:border-btext-blue-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Your Password</label>
                                    <Field type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-btext-blue-600 focus:border-btext-blue-600 block w-full px-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-btext-blue-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-btext-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link className="font-medium text-blue-600 hover:underline dark:text-primary-500">Login</Link>
                                </p>
                            </Form>
                        </Formik>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Register
