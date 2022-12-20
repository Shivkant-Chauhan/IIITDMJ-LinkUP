import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/navigation/Navbar";
import User from "./components/user-profile/User";
import Login from "./components/login/Login";

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
