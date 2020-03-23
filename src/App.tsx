import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

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
  searchField: string;
};

class App extends Component<MyProps, MyState> {
  state: MyState = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((data: { id: number; name: string; email: string }[]) =>
        this.setState({ monsters: data })
      );
  }

  render() {
    const { monsters, searchField } = this.state;
    const lowerCasedSearchField = searchField.toLowerCase();
    const filteredMonsters = monsters.filter(monster => {
      return (
        monster.name.toLowerCase().includes(lowerCasedSearchField) ||
        monster.email.toLowerCase().includes(lowerCasedSearchField)
      );
    });

    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList items={filteredMonsters} />
      </div>
    );
  }
}

export default App;
