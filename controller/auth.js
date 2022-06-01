import Users from "../model/user";
import UserRegistration from "../model/userRegister";

export const register = async (req, res) => {
  const { name, email, address } = req.body;
  // console.log(name);
  const userData = new Users({
    name,
    email,
    address,
  });
  await userData.save();
  return res.json({ Message: "User has been registered successfully" });
};

export const userregister = async (req, res) => {
  const { Username, Email, Phonenumber, Password } = req.body;
  const registerData = new UserRegistration({
    Username,
    Email,
    Phonenumber,
    Password,
  });
  await registerData.save();
  console.log("I am user");
  return res.json({ Message: `@Username has been registered successfully` });
};
