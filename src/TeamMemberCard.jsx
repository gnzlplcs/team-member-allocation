import { useContext } from "react";
import DataContext from "./context/DataContext";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const TeamMemberCard = ({ employee }) => {
  const { handleEmployeeCardClick, selectedTeam } = useContext(DataContext);
  return (
    <div
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      id={employee.id}
      onClick={handleEmployeeCardClick}
      style={{ cursor: "pointer" }}
    >
      <img
        className="card-img-top"
        src={employee.gender === "male" ? maleProfile : femaleProfile}
        alt={"person face"}
      />
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation:</b> {employee.designation}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
