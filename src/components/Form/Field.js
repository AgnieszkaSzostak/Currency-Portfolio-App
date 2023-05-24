import React from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Field = (props) => {
    const {label, tag, type, name, onChange, value, minDate, error, spinner} = props;
    
    return(
        <div className="form__container">
            <label className="form__label" htmlFor={name}>{label}
            {tag === 'select'
            ? <select className="form__select" id={name} name={name} value={value} onChange={onChange}>{props.children}</select>
            :  type === 'date' 
                ? <input className="form__input" id={name} name={name} type={type} value={value} onChange={onChange} min={minDate} max={new Date().toISOString().split("T")[0]}></input>
                : spinner 
                    ? <LoadingSpinner/>  
                    : <input className="form__input" id={name} name={name} type={type} value={value} onChange={onChange}></input>
            }
            </label>
            <p className="form__error">{error}</p>
        </div>
    )
}

export default Field