import aboutImg from '../images/about.jpeg'
import Title from './Title'
import Paragraphs from './Paragraphs'


function About() {
  return (
    <section className="section" id="about">
      
      <Title title='about' subTitle='us'/>
       
   
    <div className="section-center about-center">
      <div className="about-img">
        <img
          src={aboutImg}
          className="about-photo"
          alt="awesome beach"
        />
      </div>
      <article className="about-info">
        <h3>explore the difference</h3>

        <Paragraphs paragraph="No matter where your travels take you, BackRoads offers the best way to connect with your destination. Make memories all over the globe with our locally-vetted, expertly-curated experiences. From must-see iconic attractions to unexpected under-the-radar gems, we have something for everyone."/>
        <Paragraphs paragraph="We take the stress out of trip planning. Access everything in our app so you can focus on enjoying the moment, not taking care of logistics. Explore what you want to do, then count on our flexible policies and 24/7, multilingual customer support whenever you need." />
       
        <a href="#" className="btn">read more</a>
      </article>
    </div>
  </section>
  )
}

export default About
