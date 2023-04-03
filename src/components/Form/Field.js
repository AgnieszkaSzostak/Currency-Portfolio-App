import React, { useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Field = (props) => {
    const {label, tag, type, name, onChange, value, min, error} = props;
    
    const [date, setDate] = useState(new Date());
    
    const handleDateChange = (event) => {
        setDate(event);
    };
    useEffect(() => {
        if(date.getDate() !== new Date().getDate()){
            const event = {
              target: {
                name: "purchaseDate",
                value: date.toISOString().substr(0, 10)
              }
            };
          onChange(event)
        }
      },[date])
  

    return(
        <div className="form__container">
            <label className="form__label" htmlFor={name}>{label}
            {tag === 'select'
            ? <select className="form__select" id={name} name={name} value={value} onChange={onChange}>{props.children}</select>
            : type === 'date'
                ? <DatePicker name={name} onChange={handleDateChange} selected={date} value={value} minDate={ new Date(parseInt(min.split("-")[0]), parseInt(min.split("-")[1]) - 1, parseInt(min.split("-")[2]))} maxDate={new Date()}/>
                : <input className="form__input" id={name} name={name} type={type} value={value} onChange={onChange}></input>
            }
            </label>
            <p className="form__error">{error}</p>
        </div>
    )
}

export default Field