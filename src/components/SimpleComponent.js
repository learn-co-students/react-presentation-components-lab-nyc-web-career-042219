// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {

  state = {
    mood: 'happy'
  }

  makeSad = () => {
    this.setState({
      mood: 'sad'
    })
  }

  render() {
    return (
      <div onClick={this.makeSad}>{this.state.mood}</div>
    )
  }

}

export default SimpleComponent
