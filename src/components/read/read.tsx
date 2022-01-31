import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://61f629502e1d7e0017fd6cf3.mockapi.io/CRUD`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const setData = (id : any, firstName : any, lastName: any) => {
    localStorage.setItem('ID', id);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
  }

  const getData = () => {
    axios
    .get(`https://61f629502e1d7e0017fd6cf3.mockapi.io/CRUD`)
    .then((getData) => {
      setApiData(getData.data);
    });
  }
  
  const onDelete = (id: any) => {
    axios.delete(`https://61f629502e1d7e0017fd6cf3.mockapi.io/CRUD/${id}`)
    .then( () => {
      getData();
    } )
  }

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map( (item: any) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.firstName}</Table.Cell>
              <Table.Cell>{item.lastName}</Table.Cell>
              <Table.Cell>
                <Link to='/update'>
                  <Button onClick={()=> setData(item.id, item.firstName, item.lastName)}>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                  <Button onClick={() => onDelete(item.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;
