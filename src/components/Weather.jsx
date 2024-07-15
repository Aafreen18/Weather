import React, {useEffect, useState} from "react";
import axios from 'axios';

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [search, setSearch] = useState("");
  

  const inputEvent = (event) =>{
    setSearch(event.target.value);
  }

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: `${search}`,
            units : 'metric',
            appid: '379b0de5f01415ccdaba59aff2e525ef',
          },
        });
        
        if (res.data && res.data.main) {
          setLocation(res.data.main);
        } else {
          setLocation(null); // Set location to null if data is not found
        }
      } catch (error) {
        console.error(error);
        setLocation(null); // Also set location to null in case of errors
      }
    }
    

    
    getData();
  }, [search]);

  return (
    <>
      <div className='container'>
        <div className='centered-div'>
          <div className='inputData'>
            <input type='search' className='inputField' value={search} onChange={inputEvent} placeholder="type a city"/>
          </div>

          {!location?
            (<p className="notFound">Data not found!!</p>):
            (
              <div className='info'>
                <h1 className='location'><i className="fa-solid fa-location-dot"></i>{search}</h1>

                <h2>{location.temp} Celcius</h2>
                <p>Min : {location.temp_min}, Max :{location.temp_max}</p>
              </div>
            )
          }

          <div className='wave1'>
            <svg viewBox="0 0 120 40">
              <path d="M0 20 Q 30 40, 60 20 T 120 20 V 50 H 0 Z" fill="#6fc3df">
                <animate 
                  attributeName="d" 
                  dur="5s" 
                  repeatCount="indefinite" 
                  values="
                    M0 20 Q 30 40, 60 20 T 120 20 V 50 H 0 Z;
                    M0 25 Q 30 15, 60 25 T 120 25 V 50 H 0 Z;
                    M0 20 Q 30 40, 60 20 T 120 20 V 50 H 0 Z"
                />
              </path>
            </svg>
          </div>
          <div className='wave2'>
            <svg viewBox="0 0 120 40">
              <path d="M0 20 Q 30 40, 60 20 T 120 20 V 50 H 0 Z" fill="#3b99b1">
                <animate 
                  attributeName="d" 
                  dur="4s" 
                  repeatCount="indefinite" 
                  values="
                    M0 20 Q 30 40, 60 20 T 120 20 V 50 H 0 Z;
                    M0 25 Q 30 15, 60 25 T 120 25 V 50 H 0 Z;
                    M0 20 Q 30 40, 60 20 T 120 20 V 50 H 0 Z"
                />
              </path>
            </svg>
          </div>
          <div className='wave3'>
            <svg viewBox="0 0 120 40">
              <path d="M0 20 Q 30 40, 60 20 T 120 20 V 50 H 0 Z" fill="#1b7989">
                <animate 
                  attributeName="d" 
                  dur="3s" 
                  repeatCount="indefinite" 
                  values="
                    M0 20 Q 30 40, 60 20 T 120 20 V 50 H 0 Z;
                    M0 25 Q 30 15, 60 25 T 120 25 V 50 H 0 Z;
                    M0 20 Q 30 40, 60 20 T 120 20 V 50 H 0 Z"
                />
              </path>
            </svg>
          </div>

        </div>   
      </div>
    </>
  );
}

export default Weather;