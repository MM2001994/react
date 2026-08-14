// Class Based Component
import {Link} from 'react-router-dom';
import React from 'react';
import { GITHUB_API_URL } from '../utils/constants';
import { GITHUB_API_URL2 } from '../utils/constants';

class UserClass extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            count: 0,
            count2: 1,
            data: null
        }
        //console.log("UserClass constructor called");
    }

    async componentDidMount() {
        //console.log("UserClass componentDidMount called");
        const data = await fetch(GITHUB_API_URL);
        const jsonData = await data.json();
        console.log(jsonData);

        this.setState({
            data: jsonData
        });
    }

    render() {
        //console.log("UserClass render called");
        // const { name, email, location } = this.props;
        const {name, email, location, avatar_url } = this.state.data || {};
        return (
            <div className="p-2.5 m-2.5 bg-gray-200 w-72 items-center  hover:bg-gray-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
                {/* <h2>Count: {count}</h2>
                <button onClick={() => this.setState({ count: count + 1 })}>Increment Count</button>
                <button onClick={() => {
                    this.setState({ count: 0 })
                }}>Reset Count</button> */}
                <img src={avatar_url} alt="User Avatar" />
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{location}</p>
                <Link to={GITHUB_API_URL2}>
                    <button className='p-1 bg-gray-400 rounded-lg cursor-pointer  hover:bg-gray-600 hover:text-white transition'>View Profile</button>
                </Link>
            </div>
        )
    };
}


export default UserClass;