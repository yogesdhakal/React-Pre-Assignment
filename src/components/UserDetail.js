import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function UserDetail({ user }) {
  const history = useHistory();

  console.log(user);
  return (
    <Card>
      {user && (
        <Card.Body>
          <Card.Title>Name : {user.name}</Card.Title>
          <Card.Title>Username : {user.username}</Card.Title>
          <Card.Title>Email : {user.email}</Card.Title>
          <Card.Title>Phone : {user.phone}</Card.Title>
          <Card.Title>Company : {user.company.name}</Card.Title>
          <Card.Title>Website : {user.website}</Card.Title>
          <Card.Title>
            Address :{" "}
            <ul>
              <li>Street: {user.address.street}</li>
              <li>Suite: {user.address.suite}</li>
              <li>City: {user.address.city}</li>
              <li>Zip code: {user.address.zipcode}</li>
            </ul>
          </Card.Title>
          <Button onClick={() => history.push("/")}>Go back</Button>
        </Card.Body>
      )}
    </Card>
  );
}

export default UserDetail;
