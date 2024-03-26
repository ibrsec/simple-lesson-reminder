
import React, { useContext } from 'react'
import contentStyle from './Content.module.scss';
import Button from '../button/Button';
import { GlobalContext } from '../context/GlobalData';

const Content = (props) => {
    const {allData} = useContext(GlobalContext);
  return (
   <section className={contentStyle.content}> 
   <div className={contentStyle.allWrap}>
    <p className={contentStyle.lessonInfo}>{allData.length} Lessons Today</p>
   <div className={contentStyle.container}>
    
    {props.children}
   </div>
   <Button />
   </div>
 
   </section>
  )
}

export default Content