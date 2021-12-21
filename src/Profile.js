import React from "react";
import BioComponent from "./Component/Bio";
import NameComponent from "./Component/Fullname";
import ProfessionComponent from "./Component/Profession";
import photo from "./Component/afef.jpg";

const afef = {
  Name: "afef",
  Prof: "developer",
  Bio:
    "developer full stack js",
  Photo: photo
};

const Profile = () => (
  <>
    <NameComponent name={afef.Name} />
    <ProfessionComponent Profession={afef.developper} />
    <BioComponent Bio={afef.Bio} />
  </>
);
export default Profile;
