import LoginModel from "../Model/LoginModel"

export default function LoginViewModel() {
  const { users, createUser, getUserList} = LoginModel();
  
  return {
    users,
    createUser,
    getUserList
  }
}
