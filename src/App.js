import React, {useState} from 'react';
import './App.css';




function App() {

  const [estaSonando, setEstaSonando] = useState("")


  const notas= [
    {
      nombre:"Do",
      link: require("./notas/do.wav"),
      tieneSostenido: true
    },
    {
      nombre:"Re",
      link: require("./notas/re.wav"),
      tieneSostenido: true
    },
    {
      nombre:"Mi",
      link: require("./notas/mi.wav"),
    },
    {
      nombre:"Fa",
      link: require("./notas/fa.wav"),
      tieneSostenido: true
    },
    {
      nombre:"Sol",
      link: require("./notas/sol.wav"),
      tieneSostenido: true
    },
    {
      nombre:"La",
      link: require("./notas/la.wav"),
      tieneSostenido: true
    },
    {
      nombre:"Si",
      link: require("./notas/si.wav"),
    },
    
    
  ]

  const handleClick = (nota) => {
    
    setEstaSonando(nota.nombre)
    const sonido = new Audio(nota.link)
    sonido.play()

    setTimeout(() => {
      setEstaSonando("")
    }, 450)
  }

  
  
  return (
    <div className="App">
      
      <div className="titulo">
         <h1>PIANO VIRTUAL</h1>
         <h2>Toca tu canción favorita</h2> 
         { estaSonando &&
         <h3>Esta sonando la nota {estaSonando.toUpperCase()}</h3>
        }
      </div>


      <div className="contenedor">
        
        {
        notas.map(nota => {
          return(
            <div 
              className={`nota ${estaSonando === nota.nombre && `estaSonando`} `}
              onClick={() => handleClick(nota)}>
                { nota.tieneSostenido && <div className="negra"></div>}
            
           </div>
          )
        })

      
      }



      </div>  

    </div>
  );
}

export default App;
