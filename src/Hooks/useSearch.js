import {useState} from "react"

export const useSearch = ({type},setStatus) => {

    const [value,setReservation] = useState("");

    const onChange = (e) => {
        setReservation(e.target.value);
        if(!value.length){
            setStatus(true);
          }
    }

    return {
        onChange,
        type,
        value
    }
}