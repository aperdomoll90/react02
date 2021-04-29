import React from 'react';

//function Coffees(){
//    return (
//    <section>
//    This is Functional Components Coffees
//    </section>
//    )
//}

class Coffees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    console.log('my component loaded painfully');
    fetch('https://api.sampleapis.com/coffee/hot')
      .then((response) => response.json())
      .then((dataReceived) => this.setState({ data: dataReceived }))
      .catch();
  }

  render() {
    console.log('this is the data', this.state.data);
    return (
      <section>
        <ul className="allCoffees">
          {this.state.data.map(item => {
            return (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <span>{item.description}</span>
                <image src="https://loremflickr.com/200/200/coffee" alt=""/>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Coffees;
