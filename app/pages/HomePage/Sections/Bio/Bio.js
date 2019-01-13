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
                    Hello, and welcome to personal website! My name is Ivan Puljak, and I'm a software developer
                    currently working in Toronto, Ontario. I was born here in 1991 to two wonderful Croatian parents. I
                    had a typical and uneventful childhood, but fortunately it didn't take long until life became
                    particularly interesting.

                    In 2009, I graduated from high school as an Ontario scholar and on the Honour Roll, and was later
                    accepted into the University of Toronto, Arts & Science faculty. Originally planning on studying
                    Economics, I decided to switch my major to Computer Science. I would later graduate in 2014 with an
                    Honours Bachelor of Science. The highlight of my university experience would have been in my final
                    year, where a project that I was a team member for ended up winning an award at the Level Up
                    Showcase, an annually held convention showcasing video games created by post-secondary students
                    across Ontario.

                    In 2010, I joined a company called Arctic Glacier, where I spent each of my summers earning my
                    university tuition by working hard as a DZ licensed truck driver delivering bags of ice to a wide
                    variety of customers. A highly reliable and talented employee, I was given the responsibility of
                    training many of the new hires, and in 2015 eventually be promoted to a supervisor & dispatch role.
                    I would work in that position for 6 months, until I decided to voluntarily leave to focus on
                    improving my abilities as a software developer, and taking care of my dad who had been diagnosed
                    with cancer.

                    In April of 2017 I started my career as a software developer after being hired as a full-stack
                    developer for a young ed-tech startup named JoeZoo. JoeZoo provides proof-of-learning and assessment
                    tools for teachers and students and is currently used by 5 million users and 12 thousand schools
                    across the world. As a core team member, I worked on many foundational features and components. I
                    became extremely proficient with React / Javascript on the front-end, and Grails on the back-end. I
                    also became familiar with our AWS stack learning many new tools including S3, EC2, Elastic
                    Beanstalk, Elasticsearch, and much more.

                    A year later I was promoted to UI Lead, where I was given full responsibility for maintaining and
                    improving the front-end code bases, as well as reviewing my team's work. During this time I was also
                    given an opportunity to focus on a side project of my choice, and I decided to pick the study of
                    natural language programming (NLP). Over the summer I worked on an NLP project where I built an
                    Originality Checker written in Python and deployed on it's own Flask server as a microservice. The
                    checker ended up being included as a new feature allowing teachers to compare their student's
                    submitted documents for similar or copied content.

                    In the future I look forward to working on topic modelling, sentiment analysis, and much more. I am
                    very lucky to be part of a company where the focus of our work is more than just pushing out code,
                    but rather becoming a better computer scientist and software engineer. Whether it's for expanding
                    our vision for the future or tackling on complex problems, there is not a single day that goes by
                    where I don't learn something new.

                    My weekends are often very busy. I like to spend part of my Saturday volunteering for Habitat
                    for Humanity where I help out at the local ReStore. Duties include helping customers with purchases
                    and donations, helping other volunteers, building furniture, and maintaining cleanliness. Sundays
                    are typically spent helping around the house, tutoring my little brother and sister, spending time
                    with my family and girlfriend, and brushing up on side projects or catching up on work that I have
                    fallen behind with.

                    Outside of work and volunteer life, I enjoy many different hobbies. My greatest interest is working
                    on and riding my motorcycles. For 7 years I enjoyed riding my 2009 Ninja 250r, but last year I
                    became the happy owner of a brand new Yamaha Bolt. I am a very safe and responsible rider and am
                    always looking for like-minded to enjoy the roads with. I enjoy nature and photography, and am very
                    fortunate to live here in south-western Ontario where many hiking trails, parks, waterfalls, and
                    more are just a short drive away. I also enjoy hobby programming, strategy board & video games,
                    playing softball, and jamming away on my Seagull guitar.

                    Commuting to Toronto daily gives me ample time to get lost in a good book. I especially enjoy
                    reading classic literature and historical nonfiction, and my favourite authors are Fyodor Dostoevsky
                    and Pierre Berton. I have a very keen interest in learning and reading about ancient history and
                    civilizations, especially those in Mesopotamia (Sumer, Akkad, and Babylon). I also very much enjoy
                    Ancient Greece and have read most of the important works. Lately I have found a greater appreciation
                    for Canadian history, and am particularly fond of the stories involving the Canadian Pacific
                    Railway.

                    My passions in life stretch far beyond just what I've outlined on my website, with a dream to one
                    day become a police officer in Canada, whether as a Constable or as an Auxiliary officer. My desire
                    to join a police force stretches back ever since I could remember. The satisfaction I get from
                    helping others is the greatest joy in my life, and I have always felt that becoming an involved
                    member of my community through being a police officer is the best way to live a fulfilling and happy
                    life.

                    Well, that's me in a nutshell. If you'd like to learn more about me, or if you have any questions,
                    please don't hesitate to contact me!

                    Ivan
                </div>
            </section>c
        )
    }
}

export default Bio;