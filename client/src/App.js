import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Form,
} from 'react-router-dom';

// components
import User from './components/user-profile/User';

function App() {
  return (
    <Router>
      {/* Bootstrap and Font-Awesome CDNs */}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      

      <div className="App">

        {/* NAVBAR always displayed! */}

        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/user" element={<User />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
