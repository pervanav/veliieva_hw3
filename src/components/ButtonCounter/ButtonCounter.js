import React from "react";

class ButtonCounter extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               counter: 0
          }
          this.handleClick = this.handleClick.bind(this)
     }

     handleClick() {
          this.setState({ counter: ++this.state.counter})
     }

     render() {
          console.log(this.state);

          return (
               <div>
                    <h1>Лічильник</h1>
                    <h2>{this.state.counter}</h2>
                    <p>
                         <button onClick={() => this.handleClick()}>
                              Click me!
                         </button>
                    </p>
               </div>
          )
     }
}

export default ButtonCounter;