export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Sashank vignesh</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
           I specialize in building dynamic and responsive web applications 
            <br /> I have a strong foundation in front-end and back-end development, and I love tackling challenging problems and learning new technologies.
          </p>
        </div>
        <a href="https://drive.google.com/file/d/1MI5bb7SwN9Ttcu0qQ6s5sp4FhYl9JdCa/view?usp=drivesdk" className="btn btn-primary">Get In Touch</a>
        </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
