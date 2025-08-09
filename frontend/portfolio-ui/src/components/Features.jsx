import React from "react";
import targetIcon from "../assets/target-fill.png";
import paintIcon from "../assets/paintbrush.png";
import ideaIcon from "../assets/idea.png";
import '../assets/style/Features.css'

const Features = () => {
  const data = [
    { img: targetIcon, title: "Pixel Perfect", text: "Passionate about building visually flawless, blends clean design with robust functionality to deliver seamless user experiences across all devices." },
    { img: paintIcon, title: "High Quality", text: "Dedicated to delivering visually stunning web applications. Combines precision in design with powerful, reliable functionality for seamless." },
    { img: ideaIcon, title: "Awesome Idea", text: "High-quality transforms awesome ideas into seamless, user-focused digital experiences with precision and creativity." },
  ];

  return (
    <section className="features">
      {data.map((item, index) => (
        <div className="feature" key={index}>
          <img src={item.img} alt={item.title} />
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
