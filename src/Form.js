import React, {Component} from 'react';

class Form extends Component{

  constructor(props) {
    super(props)

    this.initialState = {
      name: '',
      job: '',
    }

    this.state = this.initialState
  }

  handelChange = event => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  submitForm = () =>{
    this.props.handleSubmit(this.state) //此例中將引用自TestState
    this.setState(this.initialState)
  }

  render(){
    const{name, job} = this.state;
    return(        
      <form>
        <h3>Input</h3>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={this.handelChange}></input>
        <label>Job</label>
        <input type="text" name="job" value={job} onChange={this.handelChange}></input>
        <input type="button" value="Submit" onClick={this.submitForm}></input>
      </form>
    );
  }
}

export default Form

