import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const [zoo, setZoo] = React.useState({
     zooName: "",
     animals: [],
     species: [],
     allAnimals: [],
   });
   
   React.useEffect(() => {
     fetch("http://localhost:3001/zoo")
       .then((res) => res.json()) // de json a obj js
       .then(
         (
           data // obj = params data
         ) =>
           setZoo({
             ...zoo,
             animals: data.animals,
             species: data.species,
             allAnimals: data.animals,
           })
       )
       .catch((error) => console.log(error));
     // eslint-disable-next-line
   }, []);

   function handleInputChange(evento) {
     // console.log(evento.target.value);
     setZoo({
       ...zoo,
       zooName: evento.target.value,
     });
   }

   function handleSpecies(event) {
     // console.log("--->", event.target.value);
     setZoo({
       ...zoo,
       animals: zoo.allAnimals.filter((e) => {
          // console.log("e",e)
          return e.specie === event.target.value
       }),
     });
   }
   function handleAllSpecies(event) {
     setZoo({
       ...zoo,
       animals: zoo.allAnimals,
     });
   }
return (
   <div>
     <label>Zoo Name:</label>
     <input value={zoo.zooName} onChange={handleInputChange}></input>
     <h1>{zoo.zooName}</h1>
     <div>
       <Species
         species={zoo.species}
         handleSpecies={handleSpecies}
         handleAllSpecies={handleAllSpecies}
       />
       <Animals animals={zoo.animals} />
     </div>
   </div>
 );
}

