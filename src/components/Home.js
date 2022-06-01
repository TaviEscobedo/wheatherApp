import {useState,useEffect} from 'react'
import Day from './Day';
import Loader from './Loader';
import styles from './Home.module.css'

const Home=()=>{
    const [queryCity,setQueryCity]=useState('')
    const [clima1, setClima1] = useState({})
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState(false)
   
    const handleChange=(e)=>{
     setQueryCity(e.target.value)        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(queryCity===" "){
            setError(true)
            setTimeout(() => {
               setError(false)
            }, 2000); 
        }
       
       else{
        getWeatherByLocation(queryCity)
       }
        
    }
    const getWeatherByLocation=async(city)=>{

        setLoader(true)
        if(!city)  return 
        try {
            const res=await fetch(`https://weatherdbi.herokuapp.com/data/weather/${city}`)
        const data= await res.json()
        setClima1(data)
        setQueryCity(" ")
        setLoader(false)
        } catch (error) {
            console.log(error);
        }
        
     
    }

    
    useEffect(() => {  
      getWeatherByLocation("Peru")
    }, [])
   
    return(
        <div className={styles.home_content}>

            <form onSubmit={handleSubmit}>
                <div>
                    <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="icon"/>
                    <input placeholder="Ingrese la ciudad..." value={queryCity} 
                    onChange={handleChange}/>       
                </div>
                {error && <p className={styles.error_input}>*Ingrese una ciudad</p>}
            </form>
             { loader?<Loader/>:
             clima1?.region?(
                <Day clima={clima1}/>
                ):<div>No se encontró ese lugar</div>
            
             }
      
           </div>
    )
}

export default Home;