import './App.css';
import {Navigation} from "./components/Navigation";
import {LeftSide} from "./components/LeftSide";

function App() {
    return (
        <>
            <div className="App">
                <header className="header">
                    <img className="hamburger" src="./assets/icon-menu.svg" alt="" aria-hidden="true"/>
                    <Navigation/>
                </header>
                <main>
                    <LeftSide/>
                </main>
            </div>
        </>
    );
}

export default App;
