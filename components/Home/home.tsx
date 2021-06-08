import React from "react";
import { CardAnimated } from "sharlq-comp-lib";
import Link from 'next/Link'
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
          <Link href="/profile">
          <div className="imageContainer">
            <img className='image' src='https://drive.google.com/uc?export=view&id=1Sg3iRb5H-1-z1DrkfdOLKKy9pRnireMk' alt='profile picture'/>
          </div>
          </Link>
        </CardAnimated>
        <CardAnimated yourClass={"home-cards_card"}>
          <h3 className="cardTitle">see your projects</h3>
          <Link href="/projects">
          <div className="imageContainer">
            <img className='image' src='https://drive.google.com/uc?export=view&id=1WFS4WssjhTGl75eIyHk4tOHKBAGW82ke' alt='profile picture'/>
          </div>
          </Link>
        </CardAnimated>
        <CardAnimated yourClass={"home-cards_card"}>
          <h3 className="cardTitle">services</h3>
          <div className="imageContainer">
            <img className='image' src='https://drive.google.com/uc?export=view&id=1YScnFEOkvnLJA0PTxQR_2ZAPOnLqQsEw' alt='profile picture'/>
          </div>
        </CardAnimated>
      </div>
    </div>
  );
};

export default Home;
