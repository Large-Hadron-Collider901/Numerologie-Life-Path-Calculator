
import { Card, CardBody, CardTitle } from 'reactstrap';
import SignupButton from "./SignupButton";
import Register from "./Register";
import { useAuth0 } from '@auth0/auth0-react';


const Home = () => {
const { isAuthenticated } = useAuth0();
    return isAuthenticated ? <Register /> : (
        <div className="absolute bottom-3 right-20 mr-10 border-8 border-purple-700">
		<Card className="float-right">
	<CardTitle className="h-16 z-30"><h1 className="ml-1 mr-1 h-6">Sign up to begin your Numerology Journey <br />
	and calculate your Life Path Number!</h1></CardTitle>
	<CardBody>
	<div className="absolute top-12 right-10">
	<SignupButton/>
	</div>
	</CardBody>
	</Card>
        </div>
    )
};


export default Home;