import logo from "../images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
    return (
        <nav>
            <img className="App-logo" src={logo} alt="react logo" />
            <h2 className="nav-h2">ReactFacts</h2>
            <h3 className="nav-h3"><a href="https://github.com/Asmit2952/first-react" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a></h3>
        </nav>
    )
}