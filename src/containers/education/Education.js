import React from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";
import { educationInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import rocket from "../../assets/lottie/rocket";
import { illustration } from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">

          <div className="education-name-div">
            {educationInfo.schools.map(school => (
              <EducationCard school={school} />
            ))}
          </div>
          <Fade right duration={1000}>
            <div className="education-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={rocket} />
              ) : (
                  <img
                    alt="Rocket"
                    src={require("../../assets/images/developerActivity.svg")}
                  ></img>
                )}
            </div>
          </Fade>
        </div>
        
      </div>
    );
  }
  return null;
}
