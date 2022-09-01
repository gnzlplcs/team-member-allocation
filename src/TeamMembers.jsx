import { useContext } from "react";
import DataContext from "./context/DataContext";
import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({ handleEmployeeCardClick, selectedTeam }) => {
  const { employees } = useContext(DataContext);
  return employees.map((employee) => (
    <TeamMemberCard
      key={employee.id}
      employee={employee}
      handleEmployeeCardClick={handleEmployeeCardClick}
      selectedTeam={selectedTeam}
    />
  ));
};

export default TeamMembers;
