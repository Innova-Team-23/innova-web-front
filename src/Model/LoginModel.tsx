import { useCallback, useState } from 'react'
import { getUser, createUser, userList, postUser } from './Api/Login'

export default function LoginModel() {
  const [userData, setUserData] = useState<userList[] | null>();

  const getUserList = useCallback(async () => {
    const users = await getUser();
    setUserData(users);
  }, []);

  const createUser = useCallback(async (createData: createUser) => {
    if (Array.isArray(userData)) {
      const response = await postUser(createData)

      if (response !== null) {
        setUserData([...userData, { id: response.id, name: response.name }])
      }
    }
  }, [userData]);

  return {
    users: userData,
    createUser,
    getUserList
  }

}
