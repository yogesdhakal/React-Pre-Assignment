import axiosInstance from "../axios";

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return [response, null]; // returning response and error if any..........
  } catch (error) {
    return [null, error]; // returning response and error if any..........
  }
};

export const getUsersDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`/users/${id}`);
    return [response, null]; // returning response and error if any..........
  } catch (error) {
    return [null, error]; // returning response and error if any..........
  }
};
