import React, {Component} from 'react';

class TableState extends Component {
  render() {
    const { characterData, removeCharacter} = this.props;
    
    const TableTitle = () =>{
      return(
        <thead>
          <tr>
            <th><h4>Characters</h4></th><th/><th />
          </tr>
        </thead>
      )
    }

    const TableHeader = () => {
      return (
        <thead>          
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
          </tr>
        </thead>
      )
    }

    const TableBody = props => {
      const rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
              <button onClick={()=>props.removeCharacter(index)}>Delete</button>
            </td>
          </tr>
        )
      })
    
      return <tbody>{rows}</tbody>
    }

    return (
      <table>            
        <TableTitle />
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>        
      </table>
    )
  }
}

export default TableState;