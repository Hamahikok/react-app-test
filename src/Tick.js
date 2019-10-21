import React, {Component} from 'react';

class Tick extends Component {

  state ={
    DateTime: new Date().toLocaleTimeString()
  }

  refreshTime = () => {
    this.setState({DateTime: new Date().toLocaleTimeString()}) 
 }

  render(){
    setInterval(this.refreshTime,1000)
    const time = this.state.DateTime

    return (
      <div className="container-clock">
        <h1>Clock</h1>
        <h2>It is {time}.</h2>
      </div>
    );
  }
}

export default Tick;