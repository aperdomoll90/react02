import React, { useState, useEffect } from 'react';
import SingleCoffee from './SingleCoffee';

function Coffees() {
  const [coffees, setCoffees] = useState(null);
  const [type, setType] = useState('hot');
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${type}`)
      .then(response => response.json())
      .then(data => setCoffees(data))
      .catch(err => console.log(err));
  }, [type]);
  return (
    <>
      <h2>Coffees:</h2>
      <button onClick={() => setType('hot')}>Hot</button>
      <button onClick={() => setType('iced')}>Iced</button>
      {!coffees ? (
        <p>Loading...</p>
      ) : (
        coffees.map((coffee) => {
          return <SingleCoffee key={coffee.id} coffee={coffee} type={type}/>;
        })
      )}
    </>
  );
}

//   handleButtonClick(type){
//     this.setState({ coffees: null})
//     fetch(`https://api.sampleapis.com/coffee/${type}`)
//       .then(response => response.json())
//       .then(data => this.setState({ coffees: data}))
//       .catch(err => console.log(err))
//   }
//   render() {
//     const { coffees } = this.state

//     return (
//       <>
//         <h2>Coffees:</h2>
//         <button onClick={()=> this.handleButtonClick('hot')}>Hot</button>
//         <button onClick={()=> this.handleButtonClick('iced')}>Iced</button>
//         {!coffees ? <p>Loading...</p> : coffees.map(coffee => {
//           return <SingleCoffee key={coffee.id} coffee={coffee} />
//         })}
//       </>
//     )
//   }
// }

export default Coffees;
