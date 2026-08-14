import User from './User';
import UserClass from './UserClass';
import React from 'react';


class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("About constructor called");
    }


    componentDidMount() {
        console.log("About componentDidMount called");
    }

    render() {
        console.log("About render called");
        return (
            <div className="about max-w-4xl mx-auto p-4 sm:p-6 my-4 rounded-xl bg-white shadow-md">
                <h1 className="text-2xl sm:text-3xl font-bold mb-3">About Us</h1>
                <p className="text-gray-700">Welcome to our about page!</p>

                <div className="mt-4">
                    <UserClass />
                </div>
            </div>
        );
    }
}



// const About = () => {
//     return (<div className="about">
//         <h1>About Us</h1>
//         <p>Welcome to our about page!</p>

        
//         {/* <User name="Manish Mondal (functional)" email="manish.mondal@example.com" location="New York" /> */}
//         <UserClass name="Manish Mondal (class)" email="manish.mondal@example.com" location="Buenos Aires" />
//     </div>)
// }

export default About;