'use client'

import FormLabel from "./FormLabel";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { InformationCircleIcon } from "@heroicons/react/16/solid";
import LoadingOverlay from "../atoms/LoadingOverlay";

function ContactForm({ labelData }: { labelData: any }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        message: ""
    });

    const [alert, setAlert] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const router = useRouter();

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value

        });
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setDisabled(true);

        try {
            const res = await fetch('/api/contact', {

                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'content-type': 'application/json'
                }
            })

            if (res.ok) {
                router.push('/success');
            } else {
                setAlert(true);
                setDisabled(false);

            }
        } catch (err: any) {
            console.error("Error:", err)
        }
    }; 
    
    return (
        <>
            <LoadingOverlay disabled={disabled}/>

            <form onSubmit={onSubmit} className="max-w-xl text-skin-primary flex flex-col gap-10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <FormLabel required={false} label={labelData.firstName} />
                        <input onChange={handleChange} type="text" placeholder="First Name" name="firstName" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-2 border-skin-inverted px-3.5 py-2 text-gray-900 shadow-sm ring-inset shadow-skin-inverted placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                    </div>
                    <div>
                        <FormLabel required={false} label={labelData.lastName} />
                        <input onChange={handleChange} type="text" placeholder="Last Name" name="lastName" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-2 border-skin-inverted px-3.5 py-2 text-gray-900 shadow-sm ring-inset shadow-skin-inverted placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="sm:col-span-2">
                        <FormLabel required={false} label={labelData.company} />
                        <input onChange={handleChange} type="text" placeholder="My Business" name="company" id="company" autoComplete="organization" className="block w-full rounded-md border-2 border-skin-inverted px-3.5 py-2 text-gray-900 shadow-sm ring-inset shadow-skin-inverted placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                    </div>
                    <div className="sm:col-span-2">
                        <FormLabel required={true} label={labelData.email} />
                        <input onChange={handleChange} type="email" placeholder="example@xyz.com" required={true} name="email" id="email" autoComplete="email" className="block w-full rounded-md border-2 border-skin-inverted px-3.5 py-2 text-gray-900 shadow-sm ring-inset shadow-skin-inverted placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                    </div>

                </div>
                <div className="sm:col-span-2">
                    <FormLabel required={true} label={labelData.message} />
                    <textarea onChange={handleChange} rows={3} name="message" required={true} id="message" className="block w-full rounded-md border-2 border-skin-inverted px-3.5 py-2 text-gray-900 shadow-sm ring-inset shadow-skin-inverted placeholder:text-gray-400 sm:text-sm sm:leading-6"></textarea>
                </div>

                <button disabled={disabled} type="submit" className="block w-full rounded-md bg-skin-highlight px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:text-skin-hover hover:bg-skin-inverted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{labelData.submit}</button>

                <div className={alert ? "flex bg-yellow-100 rounded-lg p-4 text-sm text-yellow-700 w-6/12 self-center mb-20" : "hidden"} role="alert">
                    <div className="flex gap-2">
                        <InformationCircleIcon className="h-6"/>
                        <span className="font-medium">Warning alert!</span> Issue connecting to mailing server.
                    </div>
                </div>
            </form>
        </>
    );
}

export default ContactForm;