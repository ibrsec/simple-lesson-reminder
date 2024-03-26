import React, { useContext } from "react";
import cardStyle from "./Lesson.module.scss";

const Lesson = ({ img, lessonName, lessonHour }) => {
  return (
    <div className={cardStyle.card}>
      <img src={img} alt="" />
      <div className={cardStyle.detailWrapper}>
        <div><span>Lesson Name:</span>  {lessonName} </div>
        <div><span>Lesson Hour:</span>  {lessonHour} </div>
      </div>
    </div>
  );
};

export default Lesson;
