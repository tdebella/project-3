import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
// import {
//   faInstagram,
//   faYoutube,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";


function RightComp() {
  return (
    <div className="right-side-wrapper">
      <div className="hero-text">
        <h2>Build The Community Your Fans Will Love</h2>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
      </div>

      <button className="btn">Register</button>
      <div className="social"></div>
    </div>
  );
}

{
  /* <FontAwesomeIcon icon={faFacebook} className=" hover:text-blue-500" />
      <FontAwesomeIcon icon={faInstagram} className=" hover:text-yellow-500" />
      <FontAwesomeIcon icon={faYoutube} className=" hover:text-red-500" />
      <FontAwesomeIcon icon={faGithub} className=" hover:text-gray-500" /> */
}

export default RightComp;
