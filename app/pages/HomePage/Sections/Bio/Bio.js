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
                            <p>Hello, and welcome to personal website! My name is Ivan Puljak, and I am a software developer
                                currently working in Toronto, Ontario. In 2009, I graduated from high school as an Ontario
                                scholar and was later accepted into the University of Toronto. I graduated with an Honours
                                Bachelor of Science in Computer Science. The highlight of my university experience was in my
                                final year, when a project I was a team member for won an award at the Level Up Showcase, an
                                annually held convention that highlights video games created by post-secondary students across
                                Ontario.</p>

                            <p className="bio-title">Work History</p>

                            <p>In 2010, I began working for Arctic Glacier, where I spent my summers earning my tuition by
                                working as a DZ licensed truck driver delivering bags of ice to a wide variety of customers. As
                                a highly reliable and efficient employee, I was given the responsibility of training many of the
                                new hires, and in 2015 was promoted to a supervisor and dispatch role. Working at Arctic taught
                                me a lot about the value of hard work and the power of teamwork to reach a shared goal. After
                                some time in this role I decided to voluntarily leave to focus on expanding my abilities as a
                                software developer.</p>

                            <p>In April of 2017, I started my career as a software developer after being hired as a full-stack
                                developer for a young ed-tech startup named JoeZoo. JoeZoo provides proof-of-learning and
                                assessment tools for teachers and students and is currently used by 5 million users and 12
                                thousand schools across the world. As a core team member, I have worked on many foundational
                                features and components. I became extremely proficient with React / Javascript on the front-end,
                                and Grails on the back-end. I also became familiar with our AWS stack learning many new tools
                                including S3, EC2, Elastic Beanstalk, Elasticsearch, and much more.</p>

                            <p>A year later I was promoted to UI Lead, where I was given full responsibility for maintaining and
                                improving the front-end code bases, as well as reviewing my team's work. During this time I was
                                also given an opportunity to focus on a side project of my choice, and I decided to pick the
                                study of natural language programming (NLP). Over the summer I worked on an NLP project where I
                                built an Originality Checker written in Python and deployed on it's own Flask server as a
                                microservice. In the future I look forward to working on topic modelling, sentiment analysis,
                                and much more. I am very lucky to be part of a company where the focus of our work is more than
                                just pushing out code, it is about becoming a better computer scientist and software engineer.
                                Whether it's for expanding our vision or tackling on complex problems, there is not a single day
                                that goes by where I don't learn something new.</p>

                            <p className="bio-title">Volunteer Work & Helping Others</p>

                            <p>My weekends are often very busy, with majority of my time devoted to others. I like to spend part
                                of my Saturdays volunteering at Habitat for Humanity where I help out at the local ReStore. The
                                rest of my time is typically spent helping around the house, tutoring my little brother and
                                sister, and brushing up on work in preparation for the week.</p>

                            <p>My passion for helping other stretches far beyond what I've outlined on my website, with a dream
                                to one day become a police officer in Canada. My desire to join a police force reaches back ever
                                since I could remember. The greatest joy in my life comes from helping others and solving
                                problems and I have always felt that a career as an involved member of my community is the best
                                way to lead a fulfilling life.</p>

                            <p className="bio-title">Hobbies & Interests</p>

                            <p>Outside of work and volunteer life, I enjoy many different hobbies. My greatest interest is
                                working on and riding my motorcycles. For 7 years I enjoyed riding my 2009 Ninja 250r, but last
                                year I became the proud owner of a brand new Yamaha Bolt. I enjoy nature and photography, and am
                                very fortunate to live where many hiking trails, parks, and waterfalls just a short drive away.
                                I also enjoy hobby programming, strategy board & video games, playing softball, jamming away
                                on my Seagull guitar, and spending time with my wonderful girlfriend.</p>

                            <p>Commuting to Toronto daily gives me ample time to get lost in a good book. I especially enjoy
                                reading classic literature and historical nonfiction, and my favourite authors are Fyodor
                                Dostoevsky and Pierre Berton. I have a very keen interest in learning and reading about ancient
                                history and civilizations, especially those in Mesopotamia (Sumer, Akkad, and Babylon) as well
                                as Ancient Greece. Lately, I have found a greater appreciation for Canadian history and I am
                                particularly fond the stories of the Canadian Pacific Railway.</p>

                            <p>If you'd like to learn more about me, or if you have any questions, please don't hesitate to
                                contact me!</p>

                            <p className="bio-signature">- Ivan</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Bio;