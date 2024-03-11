import "./About.scss";
import about_image_1 from "../../assets/images/image-about-dark.jpg";
import about_image_2 from "../../assets/images/image-about-light.jpg";

function About() {
  return (
    <section className="about">
      <img src={about_image_1} alt="" />
      <div className="about-content">
        <h1> About our furniture</h1>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src={about_image_2} alt="" />
    </section>
  );
}

export default About;
