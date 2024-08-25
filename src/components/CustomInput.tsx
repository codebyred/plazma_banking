import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { useAuthFormSchema } from '@/lib/utils'
import { z } from 'zod'

const authFormSchema = useAuthFormSchema("sign-up");

type CustomInputProps = {
    control: Control<z.infer<typeof authFormSchema>>
    name: FieldPath<z.infer<typeof authFormSchema>>
    label: string
    placeholder: string
}

const CustomInput = ({control, name, label, placeholder}:CustomInputProps) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>{label}</FormLabel>
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input type={name==='password'?'password':'text'} placeholder={placeholder} {...field}/>
                    </FormControl>
                    <FormMessage className="form-message mt-2" />
                </div>
            </div>
        )}
    />
  )
}

export default CustomInput