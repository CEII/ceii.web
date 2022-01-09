import { InputProps } from 'interfaces/props';
import { FC } from 'react';

const InputGroup: FC<InputProps> = ({
    className,
    label,
    placeholder,
    type,
    identifier,
    minLength,
    maxLength,
    required,
}) => (
    <>
        <input
            className={`transition-all duration-200 peer rounded-full text-center font-medium
            text-gray-700 placeholder-slate-500 py-1 px-4 outline-none focus:border-accent focus:ring-2 focus:ring-accent ${className}`}
            placeholder={placeholder}
            type={type}
            name={identifier}
            id={identifier}
            required={required ?? false}
            minLength={minLength ?? 0}
            maxLength={maxLength ?? 256}
            onChange={null}
        />
        <label
            htmlFor={identifier}
            className={`font-semibold text-lg transition-all duration-200 peer-focus:text-accent group-hover:text-accent ${label.className}`}
        >
            {label.text}
        </label>
    </>
);

export default InputGroup;
