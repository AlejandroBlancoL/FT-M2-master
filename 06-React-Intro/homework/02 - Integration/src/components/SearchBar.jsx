import characters from "../data";


export default function SearchBar(props) {

   return (
      <div>
         <input type='search' />
      <button onClick={() => props.onSearch(characters[0].name)}>Agregar</button>
      </div>
   );
}
