import {useState,useEffect} from 'react'
import Day from './Day';
import styles from './Home.module.css'

const Home=()=>{
    const [queryCity,setQueryCity]=useState('london')
    const [clima1, setClima1] = useState({})
    // const [location,setLocation]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        getWeatherByLocation()
        
    }
    const getWeatherByLocation=()=>{
        
    //  falso API en desuso => fetch("http://api.weatherstack.com/current?access_key=499de997fbfc55a8492dc683248989e8&query=London")
    fetch(`https://weatherdbi.herokuapp.com/data/weather/${queryCity}`)
      .then(data=>data.json())
      .then(result=>setClima1(result))
      setQueryCity(" ")
    
    //   setLoading(false)
    }
    useEffect(() => {
        getWeatherByLocation()
        
    }, [])
    return(
        <div className={styles.home_content}>

            <form onSubmit={handleSubmit}>
                <div>
                    <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="icon"/>
                    <input placeholder="Ingrese la ciudad..." value={queryCity} 
                    onChange={(e)=>setQueryCity( e.target.value)}/>
                    {/* <button type="submit" >Buscar</button> */}

                </div>
                
            </form>
        {
            clima1.region?<Day clima={clima1}/>:<div>No se encontró ese lugar</div>
        }
            
        
        </div>
    )
}

export default Home;