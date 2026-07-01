import "./projects.css";
import langbridge from "../images/langbridge.svg";
import portfolio from "../images/Group 2.svg";
import reactCourse from "../images/react-course.svg";

export default function Projects() {
    return (
        <div className="page-content">

            <div className="typewriter">
                <h2 className="projects-text-shadow">My projects</h2>
            </div>
            <section className="projects">
                <div className="done">
                    <h3 className="blue-text-shadow">Done</h3>
                    <div className="project-card">
                        <img
                            src={langbridge}
                            alt="LangBridge"
                            className="project-card-image"
                        />
                        <a className="anchor-button" href="#langbridge">
                            Want to read?
                        </a>
                    </div>
                </div>
                <div className="undone">
                    <h3 className="orange-text-shadow">
                        Working on now
                    </h3>
                    <div className="project-card">
                        <span className="new">
                            New
                        </span>
                        <img
                            src={portfolio}
                            alt="Portfolio"
                            className="project-card-image"
                        />
                        <a className="anchor-button" href="#portfolio">
                            Want to read?
                        </a>
                    </div>
                    <div className="project-card">
                        
                        <img
                            src={reactCourse}
                            alt="React Course"
                            className="project-card-image"
                        />
                        <a className="anchor-button" href="#react-course">
                            Want to read?
                        </a>
                    </div>
                </div>
            </section>
            <section className="project-details">

                <article id="langbridge" className="project-description">
                    <h2>LangBridge</h2>
                    <p>
                        <strong>LangBridge</strong> was created as my final school project and
                        became one of the most important projects in my portfolio. It is an
                        English learning website that contains grammar explanations,
                        vocabulary, practice materials up to the B1 level, and interactive
                        quizzes.
                    </p>
                    <p>
                        Building this project took around <strong>30 hours</strong>,
                        including the time I spent learning new concepts during development.
                        My goal was not only to complete my school project but also to create
                        something that people could actually use.
                    </p>
                    <p>
                        The biggest challenges were collecting and organizing learning
                        materials, implementing a dark/light theme, and developing the quiz
                        logic. During this project I learned how to work with
                        <strong> useEffect</strong>, create a reusable side menu, and build
                        interactive quizzes with React.
                    </p>
                    <p>
                        Although I am proud that the application works as a real website,
                        I already see areas for improvement. In the future I would like to
                        redesign the interface, improve the quiz system, add vocabulary
                        flashcards, and make the website fully responsive.
                    </p>
                </article>
                
                <article id="portfolio" className="project-description">
                    <h2>Personal Portfolio</h2>
                    <p>
                        This portfolio was created to introduce myself, tell my story, and
                        document my development as a future software developer in
                        Switzerland.
                    </p>
                    <p>
                        While looking for an apprenticeship, I often saw recommendations to
                        build a personal portfolio website. Even though many developers
                        already have one, I decided to create mine because it allows me to
                        demonstrate my skills through real projects.
                    </p>
                    <p>
                        During development I learned a lot about React, CSS animations,
                        responsive layouts, media queries, <strong>clamp()</strong>,
                        <strong>rem</strong>, and modern component-based development.
                    </p>
                    <p>

                        
                        This project will never really be finished. I plan to continue
                        improving it as I gain new knowledge, complete new projects, and
                        develop as a programmer.
                    </p>
                </article>
                

                <article id="react-course" className="project-description">
                    <h2>React Learning Project</h2>
                    <p>
                        This project is my personal environment for learning React through
                        practical exercises and official tutorials.
                    </p>
                    <p>
                        Instead of only reading documentation, I recreate examples such as
                        Tic-Tac-Toe and build my own applications. So far I have completed a
                        Notes App and a Todo App.
                    </p>
                    <p>
                        These projects helped me understand components, props, state
                        management, and the overall React workflow. My goal is to gain a
                        solid understanding of React before moving on to larger projects.
                    </p>
                </article>
            </section>
        </div>
    );
}