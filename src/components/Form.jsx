import React, { useState, useRef } from 'react'
import ErrorIcon from './ErrorIcon';
import ArrowIcon from './ArrowIcon';

const Form = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const ref1 = useRef(null); // for 'errorIcon'
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    const isValidEmail = email => {
        return regexEmail.test(email);
    }

    const emailChange = e => {
        setEmail(e.target.value);
    }

    const forwardEmail = (e, ref1) => {
        e.preventDefault(); // prevent from refreshing the page
        const errorIcon = ref1.current;
        setError(null);
        if (isValidEmail(email)) {
            console.log('The email is valid');
            setEmail('');
            errorIcon.classList.add('display_none');
        } else if (email === "") {
            setError('Required field');
            errorIcon.classList.remove('display_none');
        } else {
            setError('Please provide a valid email');
            errorIcon.classList.remove('display_none');
        }
    }

    return (
        <form className="content__email" onSubmit={(e) => forwardEmail(e, ref1)}>
            <input
                type="text"
                placeholder="Email Address"
                name="myName"
                onChange={(e) => emailChange(e)} value={email}
            />
            <ErrorIcon ref={ref1} />
            <button className="content__submit" aria-label="Submit">
                <ArrowIcon />
            </button>
            {error && <p className="content__warningMsg">{error}</p>}
        </form>
    )
}

export default Form