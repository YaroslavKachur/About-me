import "./story.css"
import "./story.css";
import me from "../images/Me.png";

export default function Story() {
    return (
        <div className="page-content">
            <h2 className="hero">My story</h2>

            <div className="story">
                <img src={me} alt="the guy with his snow sculpture" />
                <div className="content-box">
                    <p className="bla-blah"> Before moving to Switzerland, I lived in Chernivtsi, Ukraine. At school, I was quiet and did not focus much on studying. I spent most of my free time at my grandmother’s restaurant or playing computer games with friends.
                        Since childhood, I was interested in creating video games. My father supported this and often found free programming courses for me, but I rarely attended them at the time.
                        Until the age of 13, I tried different sports such as swimming, athletics, and Aikido. I was not very athletic, but I enjoyed being active.
                    </p>
                    <p className="bla-blah">
                        Around 13, I became more social and active. I spent more time outside, talked more with classmates, went to the gym, and i had vacation job in a warehouse and as an entertainer in a costume at events.
                        Later, my family moved to Switzerland because of the war, as my father’s business could no longer continue. This was a difficult but important turning point in my life.
                    </p>
                    <p className="bla-blah">
                        In Switzerland, I focused strongly on personal development and education. Learning German was challenging, but I improved significantly. In 2025, I joined Sekundarschule in Ossingen and improved from Level B to Level A in several subjects, including English, German, Geography, and History.
                        One challenge was finding an apprenticeship. I did not fully understand the Swiss system and was not successful for 2026. However, I see this as part of my development, not a failure.
                        I continue to improve my skills, explore career paths, and look for the right apprenticeship in Switzerland.
                    </p>
                </div>

            </div>

        </div>
    )
}