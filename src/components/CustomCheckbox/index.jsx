import './style.scss'

export const CustomCheckbox = ({value, onChange, label}) => {

    return <div className='checkbox-container' onClick={onChange}>
        <div className={`checkbox-main ${value ? 'checkbox-checked' : ''}`}/>
        <p>{label}</p>
    </div>
}