"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
import CustomInput from './CustomInput'
import { useAuthFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { sleep } from "@/lib/utils"

const AuthForm = ({type}:{type:string}) => {

    const [user, setUser] = useState<string>("");

    const defaultSigninValue = {       
        email: "",
        password: ''       
    }

    const defaultSignupValue = {
        firstName: "",
        lastName: "",
        address1: "",
        city: "",
        state: "",
        postalCode: "",
        dateOfBirth: "",
        ssn: "",
        email: "",
        password: "",
    }

    const authFormSchema = useAuthFormSchema(type);

    const authForm = useForm({
        resolver: zodResolver(authFormSchema),
        defaultValues: (()=> type === "sign-in"? defaultSigninValue: defaultSignupValue)(),
    });

    const {formState:{isSubmitting}} = authForm;

    const onSubmit = async(values: z.infer<typeof authFormSchema>)=>{
        await sleep(500);
        console.log(values);
    }

  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href="/" className="cursor-pointer flex items-center gap-1">
                <Image 
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="Horizon logo"
                />
                <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Plazma</h1>
            </Link>
            <div className='flex flex-col gap-1 md:gap-3'>
                <h1 className='text-24 lg:text-36 font-semibold'>
                    {user
                        ?'Link account'
                        :type==='sign-in'
                            ?'Sign-in'
                            :'Sign-up'
                    }
                </h1>
                <p>
                    {
                        user
                            ?'Link your account to get started'
                            :'Please enter your details'
                    }
                </p>
            </div>
        </header>
        <Form {...authForm}>
            <form onSubmit={authForm.handleSubmit(onSubmit)} className="space-y-8">
                {
                    type === "sign-up"
                        &&
                    (<>
                        <div className='flex gap-4'>
                            <CustomInput
                                control={authForm.control}
                                name={"firstName"}
                                label={"First Name"}
                                placeholder={"Enter your first name"}
                            />
                            <CustomInput
                                control={authForm.control}
                                name={"lastName"}
                                label={"Last Name"}
                                placeholder={"Enter your last name"}
                            />
                        </div>
                        <CustomInput control={authForm.control} name='address1' label="Address" placeholder='Enter your specific address' />
                        <CustomInput control={authForm.control} name='city' label="City" placeholder='Enter your city' />
                        <div className="flex gap-4">
                            <CustomInput control={authForm.control} name='state' label="State" placeholder='Example: NY' />
                            <CustomInput control={authForm.control} name='postalCode' label="Postal Code" placeholder='Example: 11101' />
                        </div>
                        <div className="flex gap-4">
                            <CustomInput control={authForm.control} name='dateOfBirth' label="Date of Birth" placeholder='YYYY-MM-DD' />
                            <CustomInput control={authForm.control} name='ssn' label="SSN" placeholder='Example: 1234' />
                        </div>
                        
                    </>)
                }
                <CustomInput
                    control={authForm.control}
                    name={"email"}
                    label={"Email"}
                    placeholder={"Enter your email"}
                />
                <CustomInput 
                    control={authForm.control}
                    name={"password"}
                    label={"Password"}
                    placeholder={"Enter your password"}
                />
                <Button type='submit' disabled={isSubmitting} className='form-btn'>
                    {
                        isSubmitting
                        ?(
                            <>
                                <Loader2 size={20} className="animate-spin" /> &nbsp;
                                Loading...
                            </>
                        )
                        :type === "sign-in"
                            ? "Signin":"Signup"

                    }
                </Button>
            </form>

            <footer className="flex justify-center gap-1">
                <p className="text-14 font-normal text-gray-600">
                    {type === 'sign-in'
                        ? "Don't have an account?"
                        : "Already have an account?"
                    }
                </p>
                <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
                    {type === 'sign-in' ? 'Sign up' : 'Sign in'}
                </Link>
          </footer>
        </Form>
    </section>
  )
}

export default AuthForm