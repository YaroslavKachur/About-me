import "./hobbies.css"
import { Link } from "react-router-dom"

export default function Hobbies() {
    return (
        <div>
            <h2 className="hero">My hobbies</h2>
            <section>
                <h3>Learning</h3>
                <div>
                    <h4 className="hobby-title">    Digital Creativity <span>Started: 2025</span>   </h4>
                    <div>
                        <img src="/src/assets/images/digital.png" alt="digital icons" />
                        <p>
                            Activities
                            <ul>
                                <li>Designing interfaces in Figma</li>
                                <li>Creating presentations in PowerPoint</li>
                                <li>Building websites with code</li>
                                <li>Experimenting with new technologies</li>
                            </ul>
                        </p>
                        <p> What I enjoy
                            <ul>
                                <li>Turning ideas into real projects</li>
                                <li>Solving technical challenges</li>
                                <li>Improving designs and functionality</li>
                                <li>Watching projects grow step by step</li>
                            </ul>
                        </p>

                        <div>
                            <p> Technologies
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </p>

                            <p> Tools
                                <ul>
                                    <li>React Figma</li>
                                    <li>VS Code</li>
                                    <li>Github</li>
                                </ul>
                            </p>
                        </div>
                        <Link to="/projects">Explore my projects</Link>
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