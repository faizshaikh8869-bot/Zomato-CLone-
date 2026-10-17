import { useContext } from "react";
import { UserContext } from "../Context/user-context.js";


export default function useUser(){
    return useContext(UserContext);
}