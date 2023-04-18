import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Hero = () => {
    const {heroId} = useParams()
    const [hero,setHero] = useState({})
    console.log(heroId);
    useEffect(()=>{
        axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
        .then(response=>{
            console.log(response.data)
            setHero(response.data)
        })
        .catch(error=>console.log(error))
    }, [])
  return (
    <fieldset>
        <legend>Hero</legend>
        <h4>Hero ID  : {heroId}</h4>
        <h5>
            {JSON.stringify(hero)}
        </h5>
    </fieldset>
  )
}

export default Hero