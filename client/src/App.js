import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/navigation/Navbar";
import User from "./components/user-profile/User";
import Login from "./components/login/Login";
import Navmenu from "./components/IIITDMJ/iiitdmj.jsx"

import College from "./components/IIITDMJ/component/college.jsx";
import Course from "./components/IIITDMJ/component/course.jsx";
import Placements from "./components/IIITDMJ/component/placements.jsx";
import Photos from "./components/IIITDMJ/component/photo.jsx"
import Scholarship from "./components/IIITDMJ/component/scholarship.jsx"
import Faculty from "./components/IIITDMJ/component/faculty.jsx";
function App() {
  return (
    <Router>
      {/* Bootstrap and Font-Awesome CDNs */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <div className="App">
        <div className="navigation">
          <Navbar />
        </div>
        <div className="components">
          <Routes>
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route exact path="/user" element={<User />} />
            <Route exact path="/login" element={<Login />} />

            <Route exact path="/iiitdmj" element={<Navmenu />}>
              <Route path="/iiitdmj/course-and-fees" element={<Course/>}/>
              <Route exact path="/iiitdmj/college-info" element={<College/>}/>
              <Route path="/iiitdmj/placement" element={<Placements/>}/>
              <Route path="/iiitdmj/photos" element={<Photos/>}/>
              <Route path="/iiitdmj/scholarship" element={<Scholarship/>}/>
              <Route path="/iiitdmj/faculty" element={<Faculty/>}/>
            </Route>
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
