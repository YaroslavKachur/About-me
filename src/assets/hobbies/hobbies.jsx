import "./hobbies.css"
import { Link } from "react-router-dom"
import { useState } from "react";


export default function Hobbies() {
    const [openCard, setOpenCard] = useState(null);
    const sport =
        [
            { id: 1, name: "Swimming", src: "/src/assets/images/duck.png ", image: "duck on the lake", since: "Since: 2017", club: "Sport club: Elit, in Ukraine", description: "I practiced swimming from the age of 8 to 13. I can swim freestyle, breaststroke and butterfly. Swimming helps me relax, reduce stress and stay active throughout the year" },
            { id: 2, name: "Running", src: "/src/assets/images/forest.png ", image: "forest", since: "Since: 2026", club: "Sport club: no", description: "I enjoy running in nature, especially around villages and lakes. The peaceful environment helps me clear my mind and stay active. After a run, I sometimes go for a swim to relax and recover." },
            { id: 3, name: "Biking", src: "/src/assets/images/steckborn.png ", image: "me next to steckborn", since: "Since: 2023", club: "Sport club: no", description: "I like cycling because it gives me a sense of freedom and allows me to cover long distances. One memorable trip was riding from Ossingen to Steckborn just to spend some time swimming in the Untersee. Combining sport, nature and exploration makes cycling especially enjoyable for me." }
        ];
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
                                    <li>React </li>
                                    <li>VS Code</li>
                                    <li>Github, Figma</li>
                                </ul>
                            </div>
                        </div>
                        <div className="link-box">
                            <Link to="/projects" className="button-link" viewTransition>Explore my projects</Link>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="hobby-title">
                        Math <span>Started: 2025</span>
                    </h4>

                    <div className="hobby-grid">

                        <div>
                            <span className="p-title">What I enjoy</span>
                            <ul>
                                <li>Solving challenging problems</li>
                                <li>Understanding formulas and concepts</li>
                                <li>Finding logical solutions</li>
                                <li>Learning new mathematical topics</li>
                            </ul>
                        </div>

                        <div>
                            <span className="p-title">What motivates me</span>
                            <ul>
                                <li>Seeing my progress over time</li>
                                <li>Achieving good grades</li>
                                <li>Being able to solve problems independently</li>
                            </ul>
                        </div>

                        <img src="/src/assets/images/math.png" alt="Math" className="hobby-img" style={{ width: "350px" }} />

                    </div>
                </div>

                <div>
                    <h4 className="hobby-title">
                        Language Learning <span>Started: 2024</span>
                    </h4>

                    <div className="hobby-grid">

                        <img src="/src/assets/images/language.png" alt="Languages" className="hobby-img" />

                        <div>
                            <span className="p-title">What I enjoy</span>
                            <ul>
                                <li>Learning German and English</li>
                                <li>Discovering how languages work</li>
                                <li>Expanding my vocabulary</li>
                                <li>Communicating with people in different languages</li>
                            </ul>
                        </div>

                        <div>
                            <span className="p-title">What I learned</span>
                            <ul>
                                <li>Consistent practice leads to progress</li>
                                <li>Understanding grammar makes communication easier</li>
                                <li>Confidence grows through real conversations</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            <section className="sport-grid">
                {sport.map((card) => (
                    <div className="sport-card">
                        <img src={card.src} alt={card.image} className="sport-image" />
                        <div className="card-content">
                            <h3>{card.name}</h3>
                            <p>{card.since}</p>
                            <p>{card.club}</p>
                            <button
                                onClick={() =>
                                    setOpenCard(openCard === card.id ? null : card.id)}>
                                {openCard === card.id ? "Hide description" : "Description"}
                            </button>

                            {openCard === card.id && (
                                <p className="sport-description">
                                    {card.description}
                                </p>)} </div> </div>
                ))} </section>
        </div>
    )
}