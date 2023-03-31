import React from "react";

const Field = (props) => {
    const {label, tag, type, name, onChange, value} = props;
    return(
        <label className="form__label" htmlFor={name}>{label}
        {tag === 'select'
           ? <select className="form__select" id={name} name={name} value={value} onChange={onChange}>
                    {props.children}
                </select>
           : <input className="form__input" id={name} name={name} type={type} value={value} onChange={onChange}></input>
        }
        </label>
    )
}

export default Field