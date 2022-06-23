import logo from "../images/logo.svg"

export default function Navbar() {
    return (
        <nav>
            <img className="App-logo" src={logo} alt="react logo" />
            <h2 className="nav-h2">ReactFacts</h2>
            <h3 className="nav-h3">Project-1</h3>
        </nav>
    )
}