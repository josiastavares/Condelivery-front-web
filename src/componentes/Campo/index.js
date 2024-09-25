import './Campo.css'

const Campo = ({type = 'text', label, placeholder}) => {

    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder}/>
        </div>
    )
}

export default Campo