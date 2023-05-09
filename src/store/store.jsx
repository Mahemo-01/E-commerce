import { createContext, useContext, useState } from "react"

const AppContext = createContext({
  items: [],
  createItem: (item) => { },
  getItem: (id) => { },
  updateItem: (item) => { },
  users: [],
  createUser: (user) => { },
})

export function Store({ children }) {
  const [users, setUsers] = useState([])

  function createUser(newUser) {
    const tempUsers = [...users]
    tempUsers.push(newUser)

    setUsers(tempUsers)
  }

  // const user = {
  //   // loggedIn: false,
  //   // userName: 'hola',
  //   // email: '',
  //   // password: '',
  //   // id: crypto.randomUUID(),
  // }

  return (
    <AppContext.Provider value={users}>
      {children}
    </AppContext.Provider >
  )
}

export function useAppContext() {
  return useContext(AppContext)
}