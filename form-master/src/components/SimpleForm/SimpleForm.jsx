
const SimpleForm = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('form submited');

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" /> <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;