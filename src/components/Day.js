import React from 'react'
import {useState,useEffect} from 'react'
import styles from './Day.module.css'


const Day = ({clima}) => {
   const [semana, setSemana]=useState([])

// let f= +clima.currentConditions.temp?.c>18 ? styles.calido :styles.frio 
useEffect(()=>{
    setSemana(clima.next_days.slice(0,4))
    // console.log(semana)
},[clima.next_days])
    return(
        <>
   {(clima.region)?(
        <div className={styles.contenedor }>
       {/* <div className={`${styles.contenedor } ${f}`}> */}
        {/* {loading && <h1>Is loading...</h1>}
        {( !clima.country)&&<h1>Error</h1>
        } */}

            
            <div className={styles.local}>
                <p>{clima.region}</p>
                <p>{clima.currentConditions.dayhour}</p>
            </div>
           

        <div className={styles.clima}>

            <div className={styles.clima_temp}>
                <img src={clima.currentConditions.iconURL} alt="" /> 
                <div className={styles.clima_temp_c_cont}>
                   
                  
                    <h1 className={styles.clima_temp_c }>{clima.currentConditions.temp?.c}º</h1>
                    <p>{clima.currentConditions.comment}</p>
                </div>
                
            </div>
            <div className={styles.condiciones}>
                <div>
                    <div>
                    <img src="https://img.icons8.com/windows/32/000000/windy-weather--v1.png" alt=""/>
                    <p className={styles.condic_name}>Wind</p>
                    </div>
                    <p className={styles.nros}> {clima.currentConditions.wind.km}Km/h</p>
                </div>
                <div>
                    <div>
                    <img src="https://img.icons8.com/windows/32/000000/rainy-weather.png" alt=""/>
                    <p className={styles.condic_name}>Precipitation</p>
                    </div>
                    <p className={styles.nros}>{clima.currentConditions.precip}</p>
                </div>
                <div>
                    <div>
                    <img src="https://img.icons8.com/windows/32/000000/wet.png" alt=""/>
                    <p className={styles.condic_name}>Humidity</p>
                    </div>
                    <p className={styles.nros}>{clima.currentConditions.humidity}</p>
                </div>
            </div>
        </div>
            
            <div className={styles.dias} >
                { semana.map((el,indx)=>(
                   
                    <div key={indx} className={styles.dia}>
                        <img src={el.iconURL} alt="" />
                        
                        <div>
                            {el.min_temp.c}º/{el.max_temp.c}º
                        </div>
                        <p >{el.day}</p>
                    </div>      
                ))}
            </div>        
        </div>    
        )
        :<div>Cargando...</div>} 
        
        </>
    )
}

export default Day