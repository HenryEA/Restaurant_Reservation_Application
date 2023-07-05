import axios from "axios";

const useAuth = () => {
  const signin = ({ email, password }: { email: string; password: string }) => {
    try {
      const response = axios.post("http://localhost:3000/api/auth/signin", {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // const signup = async () => {};

  return {
    signin,
    // signup,
  };
};

export default useAuth;
