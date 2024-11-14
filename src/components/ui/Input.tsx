import { FC } from "react"

type InputType = {
    type: 'text' | 'password',
    label: string,
    autoComplete?: 'off' | 'name',
    value?: any,
    onChange?: React.ChangeEventHandler
}

const Input : FC<InputType> = ({ 
        type = 'text',
        label = '',
        autoComplete = 'off',
        value,
        onChange
    }) : JSX.Element => {
    return (
        <div className="mb-4 bg-sky-100">
            <label className="block text-gray-600">{label}</label>
            <input
                type={type}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input