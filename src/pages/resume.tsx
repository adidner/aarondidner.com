import React from 'react';
import Layout from '../components/Layout';
import { experienceSkillData } from "../data/experienceSkillsData";
import { experienceJobdata, experienceJobInterface } from "../data/experienceJobData";
import "../styles/professionalexperience.scss"

function Resume() {


  return (
    <Layout>
      <div>
        <a download href={"/Aaron_Didner_Resume_10_11_22.pdf"}><div className="btn" style={{float: 'right'}}>Dowload</div></a>
        <div className={"main-containers"}>
            
          <h2>Skills</h2>
          {
            experienceSkillData.map((currentVal) => {
              //potentially change into a mapping of skill string and picture URL
              //to some sort of card or verical list 
              let skillString = "";
              currentVal.skills.forEach(element => {
                skillString = skillString +  element + ", ";
              });
              skillString = skillString.slice(0, skillString.length -2);//get rid of trailing ,
              return (
                <div className={"skill-container"}>
                  <h3 className={"skill-title"}>{currentVal.title}:</h3>
                  <div>{skillString}</div>
                </div>
              );
            })
          }
        </div>

        <div className={"main-containers"}>
          <h2>Experience</h2>
          {
            experienceJobdata.map((currentVal) => {
              return (
                <ExperienceCard {...currentVal} />
              );
            })
          }
        </div>
      </div>
    </Layout>
  );
}

export default Resume;


function ExperienceCard(props: experienceJobInterface){
  return (
    <div className={"experience-card-container"}>
      <div className={"experience-title-set"}>
        <div>{props.roleTitle}</div>
        <div>{props.startDate} - {props.endDate}</div>
      </div>
      <div className={"experience-title-set"}>
        <div>{props.companyTitle}</div>
        <div>{props.location}</div>
      </div>
      <div>
        {
          props.experienceBody.map((currentVal) => {
            return (
              <div className={"experience-title-bullet-list"}>
                  <div className={"intro-prompt"}>{currentVal.introPrompt}</div>
                  <ul>
                    {
                      currentVal.bulletList.map((current) => <li>{current}</li>)
                    }
                  </ul>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
