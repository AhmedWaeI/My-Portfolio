import "./Project.css";
import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import img from "../assets/img.png";
import link from "../assets/link.png";
import close from "../assets/close.png";
function Project(props) {
  const [showSlider, setShowSlider] = useState(false);
  function onClickHandler() {
    setShowSlider((state) => !state);
  }

  return (
    <React.Fragment>
      {showSlider && props.images ? (
        <div className="team_member">
          <button onClick={onClickHandler} className="sliderBtn">
            {showSlider ? (
              <img alt="icon" className="xIcon" src={close} />
            ) : (
              <img alt="icon" src={img} />
            )}
          </button>
          <SimpleImageSlider
            width={"260px"}
            height={"300px"}
            style={{
              margin: "auto",

              boxShadow: `0px 1px 10px 1px #004B63`,
            }}
            images={props.images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      ) : (
        <div className="team_member">
          {props.images && (
            <button onClick={onClickHandler} className="sliderBtn">
              {showSlider ? (
                <img alt="icon" className="xIcon" src={close} />
              ) : (
                <img alt="icon" src={img} />
              )}
            </button>
          )}

          {props.url && (
            <a
              className="websiteBtn"
              href={props.url}
              target="_blank"
              rel="noreferrer"
            >
              <img alt="icon" src={link} />
            </a>
          )}
          <div className="team_img">
            <img src={props.img} alt="Project img" />
          </div>
          <h3 style={props.images || props.url ? { marginTop: "-5px" } : {}}>
            {props.title}
          </h3>

          <p className="role">
            <ul>
              <li>
                <a
                  href={props.github}
                  title="Link Effect"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </p>
          <div class="allTechUsed ">
            {props.tech.map((skill, i) => (
              <span class="techUsed" id={i}>
                {skill}
                {""}
              </span>
            ))}
          </div>
          <p>{props.info}</p>
        </div>
      )}
    </React.Fragment>
  );
}
export default Project;
