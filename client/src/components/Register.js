import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

const Register = () => {
 
  const [currentName, setCurrentName] = useState("");
  const [currentGender, setCurrentGender] = useState("");
  const [currentBirthMonth, setCurrentBirthMonth] = useState("");
  const [currentBirthDay, setCurrentBirthDay] = useState("");
  const [currentBirthYear, setCurrentBirthYear] = useState("");

  const handleFormSubmit = async () => {
    try {
      await axios.post("http://localhost:3001/profiles", {
        name: currentName,
        birthMonth: Number(currentBirthMonth),
        birthDay: Number(currentBirthDay),
        birthYear: Number(currentBirthYear),
        gender: currentGender,
       
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-40 right-80">
      <fieldset>
    <Form 
    className="bg-black pr-8 pl-8 pb-4">
      <h1 className="2xl:w-96 text-white">Create Your Profile</h1>
    
      <FormGroup style={{marginBottom: '10px'}}>
        <Label for="profileName" className="text-white">Name (First, Last)</Label>
        <Input
          type="text"
          name="profileName"
          id="profileName"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
        />
      </FormGroup>
      <FormGroup style={{marginBottom: '10px'}}>
        <Label for="profileGender" className="text-white">Gender</Label>
        <Input
          type="text"
          name="profileGender"
          id="profileGender"
          value={currentGender}
          onChange={(e) => setCurrentGender(e.target.value)}
        />
      </FormGroup>
      <FormGroup style={{marginBottom: '10px'}}>
        <Label for="profileBirthMonth" className="text-white">Birth Month (MM) </Label>
        <Input
          type="number"
          name="profileBirthMonth"
          id="profileBirthMonth"
          value={currentBirthMonth}
          onChange={(e) => setCurrentBirthMonth(e.target.value)}
        />
      </FormGroup>
      <FormGroup style={{marginBottom: '10px'}}>
        <Label for="profileBirthDay" className="text-white">Birth Day (DD)</Label>
        <Input
          type="number"
          name="profileBirthDay"
          id="profileBirthDay"
          value={currentBirthDay}
          onChange={(e) => setCurrentBirthDay(e.target.value)}
  
        />
      </FormGroup>
      <FormGroup style={{marginBottom: '10px'}}>
        <Label for="profileBirthYear" className="text-white">Birth Year (YYYY)</Label>
        <Input
          type="number"
          name="profileBirthYear"
          id="profileBirthYear"
          value={currentBirthYear}
          onChange={(e) => setCurrentBirthYear(e.target.value)}
        />
      </FormGroup>
      <Button onClick={handleFormSubmit}>Submit</Button>
    </Form>
    </fieldset>
    </div>
  );
};

export default Register;
