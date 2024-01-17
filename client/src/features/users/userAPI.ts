import axios from "axios";
import { UserType } from "./userSlice";
export const addUser = async (user: UserType) => {
  const response = await axios.post("url", user);
  return response;
};
