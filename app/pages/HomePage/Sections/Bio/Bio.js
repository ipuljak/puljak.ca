import React, {Component} from "react";
import AppConstants from "Constants/AppConstants";
import PhotoData from "Constants/PhotoData";

class Bio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const index = Math.floor(Math.random() * (PhotoData.dynamicBackgrounds.length));
        const image = PhotoData.dynamicBackgrounds[index];

        return (
            <section className="section"
                     id={AppConstants.SECTIONS.BIO.ID}
                     style={{backgroundImage: `url(${image})`}}>
                <div className="bio-container">
                    <div className="bio-content">
                        <div className="section-header">
                            <div className="section-title">About Me</div>
                            <hr />
                        </div>

                        <div className="bio-text">
                            <p>Hello, my name is Ivan, and welcome to my personal website! This site more or less
                                functions as my primary online presence as I don't use any social media. I am a
                                professional software developer based out of Toronto, Ontario, and I am experienced in
                                engineering full stack web applications and software solutions. I mostly work with
                                JavaScript, though I am well versed in Python, Java, Go, and so much more.</p>

                            <p className="bio-title">Education & Work</p>

                            <p>I went to school at the University of Toronto and in 2014 I graduated with an Honours
                                Bachelor of Science in Computer Science. To support myself, I worked as a truck driver,
                                and later distribution supervisor & dispatcher for a company called Arctic Glacier. I
                                would later voluntarily leave to focus on expanding my abilities as a software developer.</p>

                            <p>In April of 2017, I started my career in technology after being hired as a software
                                developer for a young ed-tech startup named <a href="https://getjoezoo.com" target="_blank">JoeZoo</a>.
                                JoeZoo provides proof-of-learning and assessment tools for teachers and students and is
                                currently used by 5 million users and 12 thousand schools across the world. I work on
                                the entire stack, which includes a JavaScript/React front-end, Grails/Groovy back-end,
                                and dev-ops using many of the Amazon Web Services tools.</p>

                            <p>A year later I was promoted to UI Lead, where I was given full responsibility for
                                maintaining and improving the front-end code bases, as well as reviewing my team's work.
                                During this time I was also given an opportunity to focus on a side project of my
                                choice, and I decided to pick the study of natural language programming (NLP). Over the
                                summer I built an Originality Checker written in Python and deployed it on it's own
                                Flask server as a microservice. In the future I look forward to working on topic
                                modelling, sentiment analysis, and much more.</p>

                            <p className="bio-title">Hobbies & Passions</p>

                            <p>I also enjoy many different hobbies. I have two motorcycles that I enjoy riding and
                                working on, a 2015 Yamaha Bolt, and a 2009 Ninja 250r. I enjoy nature and hiking,
                                photography, hobby programming, board games, playing sports, and jamming away on my
                                guitar. I also enjoy reading, especially classic literature novels and books on ancient
                                civilizations and world history. On the weekends, I also like to pass the time by
                                helping others and being a part of my community through volunteering at Habitat for
                                Humanity where I help out at the local ReStore.</p>

                            <p>My passion for helping others stretches beyond what I've outlined on my website, with a
                                dream to one day become a police officer in Canada. My desire to join a police force
                                reaches back ever since I could remember. The greatest joy in my life comes from helping
                                others and solving problems and I have always felt that a career as an involved member
                                of my community is the best way to lead a fulfilling and happy life.</p>

                            <p>If you'd like to learn more about me, or if you have any questions, please don't hesitate to
                                contact me!</p>

                            <p className="bio-signature">Ivan</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Bio;