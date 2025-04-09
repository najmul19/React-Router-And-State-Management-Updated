import useInputState from "../../Hooks/useInputState";

const HookForm = () => {
    // const [name, handelNameChange] = useInputState('nj')
    const emailState = useInputState('nj')
    const handleSubmit = (e)=>{
        console.log('form data: ', emailState.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handelNameChange} type="text" name="name" /> <br /> */}
                <input {...emailState} type="email" name="email" /> <br />
                <input type="password" name="password" /> <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;