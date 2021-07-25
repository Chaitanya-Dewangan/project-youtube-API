import './_categoriesBar.scss';
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../redux/actions/videos.action";
const keywords = [
  "All",
  "React js",
  "Angular",
  "Computer Science",
  "React Native",
  "Robotics",
  "Algorigthm Art",
  "Coding",
  "Sandeep Maheshwari",
  "EURO 2020",
  "Gatsby",
  "Mahabharat",
];

const CategoriesBar = () => {


    const [activeElement,setActiveElement] = useState('All');
    const dispatch=useDispatch();
    const handleClick= (value) => {
        setActiveElement(value)
        dispatch(getVideosByCategory(value));
    }

    return (
      <div className="categoriesBar">
        {keywords.map((value, i) => (
          <span onClick={() => handleClick(value)} key={i} className={activeElement ===value ? "active" : ""} >
            {value}
          </span>
        ))}
      </div>
    );
}

export default CategoriesBar
