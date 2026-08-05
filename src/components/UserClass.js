// Class Based Component

import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            count: 0,
            count2: 1
        }
    }

    render() {
        const { name, email, location } = this.props;
        const { count, count2 } = this.state;
        return (
            <div className="user-info">
                <h2>Count: {count}</h2>
                <button onClick={() => this.setState({ count: count + 1 })}>Increment Count</button>
                <button onClick={() => {
                    this.setState({ count: 0 })
                }}>Reset Count</button>
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{location}</p>
            </div>
        )
    };
}


export default UserClass;