import React from 'react';


class NameList extends React.Component {
      const names = [
        {
          id: 1,
          name: 'Alice',
        },
        {
          id: 2,
          name: 'Bob',
        },
        {
          id: 3,
          name: 'Charlie',
        },
        {
          id: 4,
          name: 'David',
        }
      ]

  render() {
    return (
      <div>
        {this.mames.map((element) => (
          <div>
            <li>{element.name}</li>
          </div>
        ))}
      </div>
        )
      }
  }


export default NameList;

