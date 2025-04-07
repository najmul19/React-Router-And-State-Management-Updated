import { useState } from "react";

const StatefulForm = () => {
    const [email,setEmail] = useState(null);
    const [pass,setPass] = useState(null);
    const [name,setName] = useState('najmul oshanto');
    const [error,setError]= useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(pass.length<6){
            setError('password must be 6 char or longer')
        } else {
            setError('')
        }
        console.log(email,name,pass)
    }
    const handelEmailChange=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handelPassChange=(e)=>{
        console.log(e.target.value)
        setPass(e.target.value)
    }
    const handelNameChange=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                value={name}
                onChange={handelNameChange}
                type="text" name="name" /> <br />
                <input
                onChange={handelEmailChange}
                type="email" name="email" /> <br />
                <input
                onChange={handelPassChange}
                type="password" name="password" required /> <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;