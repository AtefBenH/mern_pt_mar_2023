import React,{useState,useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Hero = () => {
    const navigate = useNavigate()
    const {heroId} = useParams()
    // const [hero,setHero] = useState({})
    const [hero,setHero] = useState(null)
    console.log(heroId);
    useEffect(()=>{
        axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
        .then(response=>{
            console.log(response.data)
            setHero(response.data)
        })
        .catch(error=>{
            console.log(error);
            navigate('/error')
        })
    }, [heroId,navigate])
    const goBack =()=>{
        navigate(-1)
    }
  return (
    <fieldset>
        <legend>Hero</legend>
        {/* -Conditional Rendering */}
        { hero?
        <>
            <h4>Hero ID  : {heroId} --- {hero.name}</h4>
            <div>
                <div style={{
                        display:"inline-flex" , border:"1px solid black" ,padding:"5px"
                    }}>
                    {/* :{"intelligence":75,"strength":55,"speed":37,"durability":50,"power":44,"combat":26} */}
                    <img src={hero.images.md} alt={hero.name} />
                    <div >
                        <h4>Intelligence : {hero.powerstats.intelligence}</h4>
                        <h4>Strength : {hero.powerstats.strength}</h4>
                        <h4>Speed : {hero.powerstats.speed}</h4>
                        <h4>Durability : {hero.powerstats.durability}</h4>
                        <h4>Power : {hero.powerstats.power}</h4>
                        <h4>Combat : {hero.powerstats.combat}</h4>
                    </div>
                </div>
                <br />
                <button onClick={goBack}>Previous</button> &nbsp;&nbsp;&nbsp;
                <button onClick={()=>navigate(+1)}>Next</button>
            </div>
        </> : <h4>Loading ....</h4>
        }
    </fieldset>
  )
}

export default Hero