import React from "react";
import targetIcon from "../assets/target-fill.png";
import paintIcon from "../assets/paintbrush.png";
import ideaIcon from "../assets/idea.png";
import '../assets/style/Features.css'

const Features = () => {
  const data = [
    { img: targetIcon, title: "Pixel Perfect", text: "Most common methods for designing websites that work well on desktop is responsive and adaptive design." },
    { img: paintIcon, title: "High Quality", text: "Most common methods for designing websites that work well on desktop is responsive and adaptive design." },
    { img: ideaIcon, title: "Awesome Idea", text: "Most common methods for designing websites that work well on desktop is responsive and adaptive design." },
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
