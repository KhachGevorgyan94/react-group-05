import './style.scss'
export const CustomInput = ({
                                label,
                                error,
                                name,
                                placeholder,
    className,
                                value,
                                type = 'text',
                                onChange
                            }) => {
    return <div className={`input-block ${className}`}>
        <label>
            {label ? <p className='title'>{label}</p> : null}
            <input onChange={onChange}
                   name={name}
                   value={value}
                   type={type}
                   placeholder={placeholder}/>
                {error && error.length ? <p className={'error-text'}>{error}</p> : null}
        </label>
    </div>
}