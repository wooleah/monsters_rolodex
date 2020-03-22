import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export type Monster = {
  id: number;
  name: string;
  email: string;
  strength?: number;
};

type MyProps = {};
type MyState = {
  monsters: Monster[];
};

class App extends Component<MyProps, MyState> {
  state: MyState = {
    monsters: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((data: { id: number; name: string; email: string }[]) =>
        this.setState({ monsters: data })
      );
  }

  render() {
    return (
      <div className="App">
        <input type="search" placeholder="search monsters" />
        <CardList items={this.state.monsters} />
      </div>
    );
  }
}

export default App;
