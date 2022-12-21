import React from "react";
import Navmenu from "./iiitdmj.jsx"
import { useLocation } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import College from "./component/college.jsx";
import Course from "./component/course.jsx";
import Placements from "./component/placements.jsx";
import Photos from "./component/photo.jsx"
import Scholarship from "./component/scholarship.jsx"
import Faculty from "./component/faculty.jsx";

function Main() {
  // const location = useLocation();
  // console.log(location);
  // const path = location.pathname;
  // let ren
  // if(path === "./iiitdmj/college-info"){
  //     ren = <College/>
  // }
  return (
    <>
    <Navmenu />
    <div>
      <Routes>
        <Route path="/iiitdmj/college-info" element={<College/>}/>
        <Route path="/iiitdmj/course-and-fees" element={<Course/>}/>
        <Route path="/iiitdmj/placement" element={<Placements/>}/>
        <Route path="/iiitdmj/photos" element={<Photos/>}/>
        <Route path="/iiitdmj/scholarship" element={<Scholarship/>}/>
        <Route path="/iiitdmj/faculty" element={<Faculty/>}/>
      </Routes>
    </div>
    </>
    
  );
}

export default Main;
