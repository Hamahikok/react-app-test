import React, { Component } from 'react';
import TableState from './TableState';
import Form from './Form';

class TestState extends Component{
  state = {
    characters:[
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    }]
  }
  
  removeCharacter = index => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character,i)=>{
        return i !== index
      })
    })
  }
  
  //JSX=>spread operator部分遍歷已經有的state，後方character新增一筆新資料
  //更新整筆新的state
  handleSubmit = character => {  
    this.setState({ characters: [...this.state.characters, character] })
    console.log({ characters: [...this.state.characters, character] })
  }

  render(){
    const {characters} = this.state
    return(
      <div className="container">
        <TableState characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )  
  }
}

export default TestState;