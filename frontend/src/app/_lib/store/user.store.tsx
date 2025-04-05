import { create } from 'zustand'

interface IUser {
   userEmail : string |null;
   setUserEmail : (email : string ) => void
}


const userStore = create<IUser>((set) => ({
    userEmail : null,
    setUserEmail : (email) => set(state => ({userEmail : email}))
}))