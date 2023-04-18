import './App.css';
import {Routes,Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Other from './components/Other';
import Hero from './components/Hero';
function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      <a href="/home">Home (a Tag)</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/home"} >Home (Link)</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/"}>Default</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      <Link to={"other"}>Other</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="http://google.com">Google</a>
      <Routes>
        <Route path='/' element={
        <>
          <h2>Welcome To Default</h2>
          <Home/>
          <h4>Hello</h4>
        </>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/other' element={<Other/>}/>
        <Route path='/hero/:heroId' element={<Hero/>}/>
        {/* <Route path='/hero/:heroId' element={<Hero/>}/> */}
      </Routes>
    </div>
  );
}

export default App;

//! never use a tag for routing in react unless we are redirecting to an external website 