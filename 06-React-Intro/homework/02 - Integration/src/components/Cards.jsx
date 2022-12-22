import Card from './Card';

export default function Cards(props) {
   return(
      <div>
      {props.characters.map((elemt) => (
      <Card
         name={elemt.name}
         species={elemt.species}
         gender={elemt.gender}
         image={elemt.image}
         onClose={() => window.alert(elemt.name)}
      />))}
      </div>
   )
   
   // const { characters } = props;
   // const personajes = characters.map((Card) =>
   // <personajes key={Card.toString()} value={Card}/>
   // );
   // return <div>{personajes}</div>;
}
