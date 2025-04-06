

const User = ({user}) => {
    const {name,phone,email} =user;
    const userSyle ={
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
        
    }
    return (
        <div style={userSyle}>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default User;