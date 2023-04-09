import React from "react";

class TwoLists extends React.Component {
     constructor(props) {
          super(props);
     }

     moveItem() {
          const list1 = document.getElementById("list1");
          const item = list1.getElementsByTagName("li")[0];


          const list2 = document.getElementById("list2");
          list2.appendChild(item);
}
     }

     render() {
          return (
               <div>
                    <h2>Список 1</h2>
                    
                    <ul id="list1">
                         <li>Елемент 1</li>
                         <li>Елемент 2</li>
                         <li>Елемент 3</li>
                    </ul>
     
                    <h2>Список 2</h2>
     
                    <ul id="list2">
                         <li>Елемент 4</li>
                         <li>Елемент 5</li>
                         <li>Елемент 6</li>
                    </ul>
     
                    <button onClick={moveItem}>Перемістити елемент</button>
               </div>
          )
     }