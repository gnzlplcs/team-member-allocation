import { useContext, useState } from "react";
import DataContext from "./context/DataContext";

const GroupedTeamMembers = () => {
  const { employees, selectedTeam, setSelectedTeam } = useContext(DataContext);

  const groupTeamMembers = () => {
    let teams = [];

    let teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    let teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    let teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    let teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    let teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    let teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    let teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    let teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  };

  const handleTeamClick = (event) => {
    const transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedEmployees(transformedGroupData);
    setSelectedTeam(event.currentTarget.id);
  };

  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name: {item.team}
            </h4>
            <div
              id={`collapse_${item.name}`}
              className={item.collapsed === true ? "collapse" : ""}
            >
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2" key={member.id}>
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full Name: {member.fullName}
                      </span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMembers;
