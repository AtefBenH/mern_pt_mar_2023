import './App.css';
import { useState,useEffect } from 'react';
// - To use Axios 
// -1 npm install axios
// -2 import axios form 'axios'
// -3 create a function to get data from API
import axios from 'axios'; // * Import Axios the package to fetch APIs
function App() {
  const [fetchHeros, setFetchHeros] = useState([])
  const [axiosHeros, setAxiosHeros] = useState([])
  const [useEffectHeros, setUseEffectHeros] = useState([])

  //! Vanilla JS way to fetch Data from an external server (API)
  const fetchHerosFunction = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => { return response.json() }).then(response => setFetchHeros(response))
      .catch(error => console.log(error))
  }
  // ! Axios better way to fetch data form an API
  const axiosHerosFunction = ()=>{
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then(axiosResponse=>setAxiosHeros(axiosResponse.data)).catch(axiosError=>console.log(axiosError))
  }
  const axiosUseEffectHerosFunction = ()=>{
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then(axiosResponse=>{
      console.log(axiosResponse.data);
      setUseEffectHeros(axiosResponse.data)}).catch(axiosError=>console.log(axiosError))
  }
  // !  useEffect
  /*
  useEffect is a function that take 2 parameters the first is a CALLBACK function and the second one is the dependencies Array
  */
  useEffect(()=>{
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then(axiosResponse=>{
      console.log(axiosResponse.data);
      setUseEffectHeros(axiosResponse.data)
    }).catch(axiosError=>console.log(axiosError))
  },[]) //! No State Variable in the dependencies Array
  // useEffect(()=>{
  //   axiosUseEffectHerosFunction()
  // },[])
  return (
    <div className="App">
      <h1>APIS</h1>
      <div>
        <h4>SuperHeros (Fetch)</h4>
        <hr />
        <button onClick={fetchHerosFunction}>Fetch Heros</button>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Hero Name</th>
              <th>Full Name</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {fetchHeros.map(hero =>
              <tr key={hero.id}>
                <td><img src={hero.images.md} alt={hero.name} height="200px" width="200px" /></td>
                <td>{hero.name}</td>
                <td>{hero.biography.fullName}</td>
                <td>{hero.biography.publisher}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <hr />
      <div style={{backgroundColor:"silver"}}>
        <h4>SuperHeros (Axios)</h4>
        <hr />
        <button onClick={axiosHerosFunction}>Axios Heros</button>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Hero Name</th>
              <th>Full Name</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {axiosHeros.map(hero =>
              <tr key={hero.id}>
                <td><img src={hero.images.md} alt={hero.name} height="200px" width="200px" /></td>
                <td>{hero.name}</td>
                <td>{hero.biography.fullName}</td>
                <td>{hero.biography.publisher}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <hr />
      <div style={{backgroundColor:"yellow"}}>
        <h4>SuperHeros (Axios)</h4>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Hero Name</th>
              <th>Full Name</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {useEffectHeros.map(hero =>
              <tr key={hero.id}>
                <td><img src={hero.images.md} alt={hero.name} height="200px" width="200px" /></td>
                <td>{hero.name}</td>
                <td>{hero.biography.fullName}</td>
                <td>{hero.biography.publisher}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
