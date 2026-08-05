import User from './User';
import UserClass from './UserClass';
const About = () => {
    return (<div className="about">
        <h1>About Us</h1>
        <p>Welcome to our about page!</p>

        
        {/* <User name="Manish Mondal (functional)" email="manish.mondal@example.com" location="New York" /> */}
        <UserClass name="Manish Mondal (class)" email="manish.mondal@example.com" location="Buenos Aires" />
    </div>)
}

export default About;