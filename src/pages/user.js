import React, { useEffect, useState } from "react";
import UserDetail from "../components/UserDetail";
import { useParams } from "react-router";
import { getUsersDetail } from "../api/homePageApi";

function User() {
  const params = useParams();

  const [user, setUser] = useState();

  const getUserDetailHandler = async () => {
    const [response, err] = await getUsersDetail(params.id);
    if (response) {
      setUser(response.data);
    }
    if (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserDetailHandler();
  }, []);

  return (
    <>
      <UserDetail user={user} />
    </>
  );
}

export default User;
