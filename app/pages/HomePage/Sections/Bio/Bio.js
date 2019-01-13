import React, {Component} from "react";
import AppConstants from "Constants/AppConstants";

class Bio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section" id={AppConstants.SECTIONS.BIO.ID}>
                <div>
                    Hello, and welcome to personal website! My name is Ivan Puljak, and I'm a software developer currently
                    working in Toronto, Ontario.

                    In April of 2017 I started my career as a software developer after being hired as a full-stack
                    developer for a young ed-tech startup named JoeZoo. JoeZoo is which provides proof-of-learning and
                    assessment tools for teachers and students and is currently used by 5 million users and 12 thousand
                    schools across the world. As a core team member, I worked on many foundational features and
                    components using. I became extremely proficient with React / Javascript on the front-end, and
                    Grails on the back-end. I also became familiar with our AWS stack learning many new tools including
                    S3, EC2, Elasticbeanstalk, Elasticsearch, and much more.

                    A year later I was promoted to UI Lead, where I was given full responsibility for maintaining and
                    improving the front-end code bases, as well as reviewing my team's work. During this time I was also
                    given an opportunity to focus on a side project of my choice, and I decided to pick the study of
                    natural language programming (NLP). In the future I look forward to working on topic modelling,
                    sentiment analysis, and much more. I am very lucky to be part of a company where the focus of our
                    engineers is more than just pushing out code, but rather becoming a better computer scientist and
                    engineer. Whether it's for expanding our vision for the future or tackling on existing complex
                    problems, there is not a single day that goes by where I don't learn something new.

                    My passions in life stretch far beyond just what's on a computer screen, with a dream to one day
                    become a police officer in Canada, whether as a Constable or as an Auxiliary officer. My desire to
                    joining a police force stretches back ever since I could remember.
                </div>
            </section>
        )
    }
}

export default Bio;