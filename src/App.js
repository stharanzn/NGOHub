import './stylesheets/app.css';
import './stylesheets/common.scss'
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/homepage/Home';
import FindPage from './components/pages/findpage/FindPage';
import TopNavbar from './components/elements/TopNavbar/TopNavbar.js';
import Contact from './components/pages/Contact.js'


import { AuthProvider } from './components/utils/auth';
import {Helmet} from 'react-helmet'
import Profile from './components/pages/profiles/Profile';
import NotFound from './components/pages/NotFound';
import VolLogin from './components/pages/logins/VolLogin.js';
import { RequireAuth } from './components/utils/RequireAuth';
import NgoLogin from './components/pages/logins/NgoLogin';
import FindVolunteers from './components/pages/findpage/findVolunteers';
import VolProfile from './components/pages/profiles/VolProfile';
// import * as dotenv from 'dotenv'

// dotenv.config()

function App() {
  return (
    <AuthProvider>

      <Helmet>
        
          <link rel='stylesheet' href='/stylesheets/style.css' />
          <link href='https://fonts.googleapis.com/css?family=Lato:400,100,300' rel='stylesheet' type='text/css' />

          <link href="https://fonts.googleapis.com/css?family=Raleway:100,400,700" rel="stylesheet" />
          
          <link href="https://fonts.googleapis.com/css?family=Oswald:200,400,700" rel="stylesheet" />
              
          <script src="https://use.fontawesome.com/20ab91acc4.js"></script>

          <link rel="shortcut icon" href="/public/images/logo.png" type="image/x-icon"></link>
          {/* <script  src="https://code.jquery.com/jquery-3.1.1.min.js"  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" ></script> */}
      
      </Helmet>
      
      <TopNavbar />

      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/findNgos' element={<FindPage/>}></Route>
        <Route path='/findVolunteers' element={<FindVolunteers/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/volProfile/:username' element={<RequireAuth><VolProfile/></RequireAuth>}></Route>
        <Route path='/ngoProfile/:username' element={<RequireAuth><Profile/></RequireAuth>}></Route>
        <Route path='/volunteer_auth' element={<VolLogin/>}></Route>
        <Route path='/ngo_auth' element={<NgoLogin/>}></Route>

        <Route path='*' element={<NotFound/>}></Route>

        
      </Routes>          
    </AuthProvider>
    
  );
}

export default App;
