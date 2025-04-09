
const SimpleForm = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('form submited');
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" /> <br />
                <input type="email" name="email" /> <br />
                <input type="password" name="password" /> <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;