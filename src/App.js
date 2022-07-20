import React from "react";
import NavPanel from "./Components/NavPanel";
import SwipeImages from "./Components/SwipeImages";

class App extends React.Component {
    render() {
        return(
            <header>
                <img src={require('./Components/Images/logo.png')} alt={"logo"} id={"logo"} />
                <h1>Санкт-Петербургский государственный университет<br />
                    Факультет Прикладной Математики -<br />Процессов Управления</h1>
                <NavPanel />
            </header>
        )
    }
}

export default App
