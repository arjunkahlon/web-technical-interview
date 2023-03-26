import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";
import { UserClient } from "../../../types/user";
import SignInForm from "../Forms/SignInForm/SignInForm";

interface AuthProps {
    handleSignIn: (user: UserClient) => void
}

export default function Auth(props: AuthProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [passwordValid, setPasswordValid] = useState<boolean>(false);
    const [submitAllowed, setSubmitAllowed] = useState<boolean>(false);
    const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false);
    const { handleSignIn } = props;

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

    const authenticateUser = async (email: string, password: string) => {
        const req = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
          };

          try {
            const res = await fetch('/api/authAPI/userAuth', req);
      
            if (!res.ok) {
              const error: NodeJS.ErrnoException  = new Error ('An error occured while fetching the user data');
              throw error;
            }
      
            const data = await res.json();
            const { usrObj: user } = data;
            localStorage.setItem('user', JSON.stringify(user));
            setUserAuthenticated(true);
            handleSignIn(user);
            
          } catch (error: any) {
              console.error(error)
              throw error;
          }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        authenticateUser(email, password);
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
                            <div className="mx-auto w-1/2">
                                {
                                    userAuthenticated
                                        ? <div>Welcome User</div>
                                        : <SignInForm 
                                            handleSubmit = {handleSubmit}
                                            handleEmailChange = {handleEmailChange}
                                            handlePasswordChange = {handlePasswordChange}
                                            submitAllowed = {submitAllowed} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col basis-[43%]" >
                    <div className="relative h-screen w-[100%]">
                        <Image src='/house.png' layout="fill"/>
                    </div>
                </div>
            </div>
        </>

    )
}