import './nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='nav-box'>

            <div className="left-link">
                <Link className='nav-link' to="/projects">My Projects</Link>
            </div>

            <div className='about-box'>
                <h1 className='about'>About me</h1>
            </div>

            <div className="right-links">
                <Link className='nav-link' to="/story">My Story</Link>
                <Link className='nav-link' to="/hobbies">My Hobbies</Link>
            </div>

        </div>
    )
}
