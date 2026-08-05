import {useState} from 'react';

const User = ({ name, email, location }) =>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-info">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{location}</p>
        </div>
    )
}

export default User;