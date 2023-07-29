
import { getUserInfo } from "../general/user-info/userInfo.service";
import axios from "axios";

const { userInfo } = getUserInfo();

type TAddServiceProps = {
};

export const addNewForm = async (payload: TAddServiceProps) => {
  try {
    const response = await axios.post("https://example.com/api/save", payload);
    console.log("Data saved successfully:", response.data);
  } catch (error) {
    console.error("Error saving data:", error);
  }
};
