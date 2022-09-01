import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Employees from "./Employees";
import Footer from "./Footer";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Header from "./Header";
import Nav from "./Nav";
import NotFound from "./NotFound";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/team-member-allocation" element={<Employees />}></Route>
          <Route
            path="/team-member-allocation/grouped-team-members"
            element={<GroupedTeamMembers />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
