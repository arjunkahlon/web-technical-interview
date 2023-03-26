import type { FormEvent } from "react";

interface SignInProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
    handleEmailChange: (e: FormEvent<HTMLInputElement>) => void,
    handlePasswordChange: (e: FormEvent<HTMLInputElement>) => void,
    submitAllowed: boolean
}

export default function SignInForm(props: SignInProps) {

    const { handleSubmit, handleEmailChange, handlePasswordChange, submitAllowed}  = props;
    return(
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
                <a className="text-sm font-bold text-right text-secondary underline mt-1" href="#forgotpassword">Forgot password?</a>
            </div>
        </form>
    )
}