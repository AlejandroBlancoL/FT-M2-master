import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    const { animals } = this.props;
    // console.log(animals);
    return (
      <div>
        {animals.map((e, index) => {
          return (
            <div key={index}>
              <h5>{e.name}</h5>
              <img src={e.image} alt={e.name} width="300px" />
              <br></br>
              <span>{e.specie}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
