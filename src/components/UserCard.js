import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./UserCard.css";
import { Link } from "react-router-dom";

function UserCard({ userList }) {
  return (
    <Row>
      {userList.map((list) => (
        <Col md={4} sm={12} xs={12} lg={4} key={list.id}>
          <Card style={{ marginTop: "10px" }}>
            <div className="avatar-container">
              <div className="avatar">{list.name.charAt(0)}</div>
            </div>
            <Card.Body>
              <Card.Title className="text-center">{list.name}</Card.Title>
              <Card.Text className="text-center">
                <span className="email-text">@{list.username}</span>
              </Card.Text>
              <Card.Text className="text-center">
                <a
                  href={"https://www." + list.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {list.website}
                </a>
              </Card.Text>
              <div className="justify-content-center d-flex">
                <Link to={`/${list.id}`}>
                  <Button variant="primary">More Detail</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default UserCard;
