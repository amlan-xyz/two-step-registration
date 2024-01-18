import axios from "axios";
import { UserType } from "../../types/user.types";
export const addUser = async (user: UserType) => {
  const response = await axios.post("url", user);
  return response;
};
