import Home from './routes/home/home.component.jsx';
import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx';
import SignIn from './signin/signin.component.jsx';

const Shop=()=>{
  return(
    <h1>this is the shop link</h1>
  );
}
const App=()=> {
  return(
    <Routes>
      <Route path='/' element = {<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='shop' element ={<Shop/>}/>
        <Route path='sign-in' element ={<SignIn/>}/>
      </Route>
    </Routes>
  );
};

export default App;
