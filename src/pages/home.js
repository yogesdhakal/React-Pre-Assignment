import React, { useEffect, useState } from "react";
import { getUsers } from "../api/homePageApi";
import UserCard from "../components/UserCard";

function Home() {
  const [userList, setUserList] = useState([]);

  const getUsersList = async () => {
    const [response, error] = await getUsers();
    if (response) {
      setUserList(response.data);
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <>
      <UserCard userList={userList} />
    </>
  );
}

export default Home;
