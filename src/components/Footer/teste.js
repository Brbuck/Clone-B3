import React, {useState} from 'react'

export function UseForm () {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password1: '',
        password2: '',
    })

    const [erros, setErros] = useState({})
    const [isSubmiting, setIsSubmiting] = useState(false)

    function handleClick (e){
        const {value, name} = e.target;
        setValues({...values,
            [name]: value})
    }

    
}