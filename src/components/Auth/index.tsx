import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Auth() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [passwordValid, setPasswordValid] = useState<boolean>(false);
    const [submitAllowed, setSubmitAllowed] = useState<boolean>(false);

    const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        let validEmail = e.currentTarget.value ? true : false;
        validEmail ? setEmailValid(true) : setEmailValid(false);
        setEmail(e.currentTarget.value)

        if (passwordValid && validEmail) {
            setEmail(e.currentTarget.value);
            setSubmitAllowed(true);
        } else {
            setEmail(e.currentTarget.value)
            setSubmitAllowed(false);
        }
    }

    const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
        let validPassword = e.currentTarget.value ? true : false;
        validPassword ? setPasswordValid(true) : setPasswordValid(false);


        if (emailValid && validPassword) {
            setPassword(e.currentTarget.value);
            setSubmitAllowed(true);
        } else {
            setPassword(e.currentTarget.value)
            setSubmitAllowed(false);
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
    }




    return(
        <>
            <div className="flex flex-row">
                <div className="flex-col basis-[57%] bg-white">
                    <div className="flex-row p-5 fixed">
                        <div className="basis-full p-2">
                            <Image src='/logo.png' alt="Revive Logo" width={140} height={40}/>
                        </div>
                    </div>
                    <div className="flex flex-row h-screen items-center">
                        <div className="basis-full flex justify-center">
                            {/* Container for Form */}
                            <div className="mx-auto w-1/2">
                                <h2 className="text-2xl px-0 mb-5">Sign In</h2>
                                <form onSubmit={handleSubmit}>
                                        <div className="flex flex-col gap-5">
                                            <input type="email"
                                                   name="email"
                                                   id="email"
                                                   placeholder="Enter email"
                                                   onChange={(e) => handleEmailChange(e)}
                                                   className="border-2 border-gray-200 text-sm rounded-md w-full p-3"
                                                   autoFocus={true}
                                            />
                                            <input type="password"
                                                   name="password"
                                                   id="password"
                                                   placeholder="Enter password"
                                                   onChange={(e) => handlePasswordChange(e)}
                                                   className="border-2 border-gray-200 text-sm rounded-md w-full p-3"
                                            />
                                            {submitAllowed
                                                ? <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">
                                                    Login
                                                  </button>
                                                : <button className="w-full bg-gray-300 text-white p-3 rounded">
                                                    Login
                                                  </button>
                                            }
                                        </div>
                                    <div className="text-end">
                                        <a className="text-secondary text-sm underline text-right mt-1" href="#forgotpassword">Forgot password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col basis-[43%]" >
                    <div className="relative h-screen w-[100%]">
                        <Image src='/auth.png' alt="Blue House" layout="fill"/>
                    </div>
                </div>

            </div>
        </>

    )
}