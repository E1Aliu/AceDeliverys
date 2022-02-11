import {lazy, Suspense, useEffect} from 'react';
import{
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
 import Loading from './components/shared/Loading/Loading';
 import ScrollToTop from './ScrollToTop';
import './App.scss';
// import Aos from 'aos';
// import "aos/dist/aos.css";
// import './App.scss';


import {IntlProvider} from 'react-intl';
 import{translate} from './translation/translate';
import {useSelector} from 'react-redux';

const Home = lazy(() => import('./pages/Home/Home'));
// const Login = lazy(() => import('./pages/Login/Login'));
 const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
// const About = lazy(() => import('./pages/About/About'));

function App() {

  //const language = useSelector((state)=>state.language.language);
  
  // useEffect(()=>{
  //   Aos.init({
  //     duration:1250,
  //     once: true
  //   })
  // },[])
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <IntlProvider 
          // locale={language}
          // formats={{numer:'en'}}
          // messages={translate[language]}
          >
            <ScrollToTop/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route  path="SignUp" element={<SignUp/>}/>
              
              <Route path="*" element={<Navigate to ="/" />}/>
            </Routes>
          </IntlProvider>
      </Suspense>

    </Router>
  );
}

export default App;
