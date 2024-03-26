import React,{createContext,useState } from "react"
import {data} from '../../helper/data.jsx';

export const GlobalContext = createContext();


export const GlobalProvider = (props) => {

    const [allData,setAllData] = useState(data); 
    console.log(data);
    const dataValue = {
        data:data,
        allData,allData,
        setAllData,setAllData
    }


    return(
        <GlobalContext.Provider value={dataValue}>
            {props.children}
        </GlobalContext.Provider>  
    )


}