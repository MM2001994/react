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
        return (<div className="about">
        <h1>About Us</h1>
        <p>Welcome to our about page!</p>

        
        {/* <User name="Manish Mondal (functional)" email="manish.mondal@example.com" location="New York" /> */}
        <UserClass />
        {/* <UserClass name="Elon Musk(class)" email="elon.musk@example.com" location="New York" /> */}
    </div>)
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