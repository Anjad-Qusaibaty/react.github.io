

const animals = [
    "Chicken",
    "Sloth",
    "Porcupine",
    "Killer whale",
    "Velociraptor"
  ];

  const listStyle = 
  {"list-style":'none'};



export default function AwesomeAnimals() {

  return (
    <div>
{
    animals.map((animal,index)=>{
        return(

        <ul  style={listStyle} >
            <li key={index} >Awesomness level {index+1} : {animal}</li>
        </ul>

        )
    }

    )
}
    </div>
  )
}