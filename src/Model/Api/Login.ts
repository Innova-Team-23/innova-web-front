export interface userList{
    id:number
    name:string
}

export interface createUser{
    name:string
}

const API_URL = 'example api';
//https://localhost:8000/users

export const getUser = async (): Promise<userList[] | null> => {
    const response = await fetch(`${API_URL}/articles`)
    if (!response.ok) {
      throw new Error('Failed to get all articles')
    }
    const data = await response.json()
    return data
  }
export const postUser = async (createData: createUser): Promise<userList | null> => {
    const response = await fetch(`${API_URL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(createData)
    })
    if (!response.ok) {
      throw new Error('Failed to create article')
    }
    const data = await response.json()
    return data
  }

  