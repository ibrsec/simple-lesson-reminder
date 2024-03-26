import React, { useContext } from 'react'
import buttonStyle from './Button.module.scss';
import { GlobalContext } from '../context/GlobalData';

const Button = () => {
    const {setAllData} = useContext(GlobalContext); 
const clearList = () =>{
    setAllData([])

}


  return (
    <button className={buttonStyle.btn} onClick={clearList}>ClearList</button>
  )
}

export default Button