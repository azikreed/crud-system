import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

const Update = () => {
  const [firstName, setFirstName] = useState<any>("");
  const [lastName, setLastName] = useState<any>("");
  const [ID, setID] = useState<any>(null);

  const sendDataToAPI = () => {
    axios.put(`https://61f629502e1d7e0017fd6cf3.mockapi.io/CRUD/${ID}`, {
      firstName,
      lastName,
    });
  };

  useEffect(()=>{
      setFirstName(localStorage.getItem('firstName'));
      setLastName(localStorage.getItem('lastName'));
      setID(localStorage.getItem('ID'));
  }, [])

  return (
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input
          name="fname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          name="lname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        {console.log(`${firstName} ${lastName}`)}
      </Form.Field>
      <Button type="submit" onClick={sendDataToAPI}>
        Update
      </Button>
    </Form>
  );
};

export default Update;
