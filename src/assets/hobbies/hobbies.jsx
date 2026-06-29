import "./hobbies.css"
import { Link } from "react-router-dom"

export default function Hobbies() {
    return (
        <div className="page-content">
            <h2 className="hero">My hobbies</h2>
            <section className="learning-sec">
                <h3>Learning</h3>
                <div>
                    <h4 className="hobby-title">Digital Creativity <span>Started: 2025</span>   </h4>
                    <div className="hobby-grid">
                        <img src="/src/assets/images/digital.png" alt="digital icons" className="row-1-3" />
                        <div>
                            <span className="p-title">Activities </span>  
                            <ul>
                                <li>Designing interfaces in Figma</li>
                                <li>Creating presentations in PowerPoint</li>
                                <li>Building websites with code</li>
                                <li>Experimenting with new technologies</li>
                            </ul>
                        </div>
                        <div> <span className="p-title">What I enjoy</span>
                            <ul>
                                <li>Turning ideas into real projects</li>
                                <li>Solving technical challenges</li>
                                <li>Improving designs and functionality</li>
                                <li>Watching projects grow step by step</li>
                            </ul>
                        </div>

                        <div className="grid-5">
                            <div> <span className="p-title"> Technologies </span>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>

                            <div><span className="p-title">Tools </span> 
                                <ul>
                                    <li>React Figma</li>
                                    <li>VS Code</li>
                                    <li>Github</li>
                                </ul>
                            </div>
                        </div>
                        <div className="link-box">
                        <Link to="/projects" className="button-link" viewTransition>Explore my projects</Link>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="hobby-title">    Math <span>Started: 2025</span> </h4>
                </div>

                <div>
                    <h4 className="hobby-title">    Language Learning <span>Started: 2024</span>    </h4>
                </div>
            </section>
        </div>
    )
}