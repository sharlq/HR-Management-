import React from "react";
import { CardAnimated } from "sharlq-comp-lib";
const Home: React.FC<{ employeeName: string }> = ({ employeeName }) => {
  return (
    <div className="home">
      <h2 className="home-title">Welcome, {employeeName}</h2>
      <h4 className="home-paragraph">
        {" "}
        Honstly i dont know should i write here but i want to make it long
      </h4>
      <div className="home-cards">
        <CardAnimated yourClass={"home-cards_card"}>
          <h3 className="cardTitle">visit your profile</h3>
        </CardAnimated>
        <CardAnimated yourClass={"home-cards_card"}>
          <h3 className="cardTitle">see your projects</h3>
        </CardAnimated>
        <CardAnimated yourClass={"home-cards_card"}>
          <h3 className="cardTitle">services</h3>
        </CardAnimated>
      </div>
    </div>
  );
};

export default Home;
