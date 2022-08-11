import react, { Component } from "react";
import "./App.css";
import NumberFact from "./NumberFact";
import SearchField from "./SearchField";
import SearchButton from "./SearchButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberfact: [],
      searchfield: "",
      searchbutton: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  onClickButton = (event) => {
    event.preventDefault();
    const num = this.state.searchfield;
    fetch(`http://numbersapi.com/${num}?json`)
      .then((res) => res.json())
      .then((data) => this.setState({numberfact: data.text}));
  };

  render() {
    const { searchfield, numberfact } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Number Fact</h1>
          <p>Get to know interesting facts about numbers</p>
        </header>

        <SearchField searchChange={this.onSearchChange} />
        <SearchButton search={this.onClickButton} />
        <NumberFact searchfield={searchfield} fact={numberfact} />
      </div>
    );
  }
}

export default App;
