import React, {Component} from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th><h4>This is a table of props</h4></th><th/>
      </tr>      
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = function(test){
  const rows = test.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { characterData } = this.props

    return (      
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}

export default Table;