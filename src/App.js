import React from "react";
import "./App.css";
import Articles from "./articles/components/Articles";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Welcome to Blogy!</p>
                </header>
                <Articles />
            </div>
        );
    }
}

export default App;
