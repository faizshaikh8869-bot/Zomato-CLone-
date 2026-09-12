import { createContext, useContext } from 'react'

export const UserContect = createContext();

function UserProvider({ Children }) {
    const [user, setUser] = ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const userData = axios.get('http://localhost4000/user/profile');
    
    setUser(()=>{
        firstName:userData.fullName.firstName
        lastName:userData.fullName.lastName
        email:userData.email
        password:userData.password
    })

    //Set user function will send and every update will first make the prev updates as destructured array
    return (
        <>
            <UserProvider value={user , setUser} >
                {Children}
            </UserProvider>
        </>
    )
}