import axios from "axios";
interface coming {
  firstName: string,
  lastName: string,
  email: string,
  password: string,

}
interface logindatacoming {
  email: string,
  password: string,

}

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});
export const registerUser = async (formData: coming) => {
  const response = await API.post(
    "/auth/register",
    formData
  );
  // console.log("Response:", response);
  // console.log("Response Data:", response.data);

  return response.data;
};
export const loginUser = async (logindata: logindatacoming) => {
  const response = await API.post("/auth/login",
    logindata
  );
  return response.data
}
export const initialiseProfile = async()=>{
  const response = await API.get("/dash/initialise");
  return response.data
}