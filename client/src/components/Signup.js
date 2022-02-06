import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Card, CardBody, CardTitle } from 'reactstrap';

const Signup = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
    <Card className="">
	<CardTitle className=" "><h1 className=" ">Sign up to get your life path number!</h1></CardTitle>
	<CardBody className=" "><button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Signup
    </button></CardBody>

    </Card>
    </>
  );
};

export default Signup;