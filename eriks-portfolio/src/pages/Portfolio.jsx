import PortfolioCard from "./PortfolioCard";
import Footer from "../components/Footer";
import { Grid } from "@mui/material";

import Mealy from "../assets/Mealy.png";
import DateNight from "../assets/DateNight.png";
import NoteTaker from "../assets/NoteTaker.png";
import SocialNetworkApp from "../assets/socialNetworkApp.png";
import ResponsivePortfolio from "../assets/ResponsivePortfolio.png";
import EmployeeTracker from "../assets/EmployeeTracker.png";

export default function Portfolio() {
  const assignments = [
    {
      title: "Weekly Meal Planner",
      image: Mealy,
      description:
        "This is an application that allows users to keep track of their weekly meals.",
      gitHubLink: "https://github.com/erikchiodo/weekly-meal-planner-project",
      deployedApp: "https://git.heroku.com/weekly-meal-planner-project.git",
    },
    {
      title: "Date Night Planner",
      image: DateNight,
      description:
        "This is an application that that allows users to plan the perfect date night.",
      gitHubLink: "https://github.com/erikchiodo/date-night-project",
      deployedApp: "https://erikchiodo.github.io/date-night-project/",
    },
    {
      title: "Erik's Note Taker",
      image: NoteTaker,
      description: "This is an application allows users to post and save notes",
      gitHubLink: "https://github.com/erikchiodo/eriks-note-taker",
      deployedApp: "https://git.heroku.com/eriks-note-taker.git",
    },
    {
      title: "Erik's Social Network API",
      image: SocialNetworkApp,
      description:
        "This is an application that allows to keep track of their friends, thoughts, and reactions",
      gitHubLink: "https://github.com/erikchiodo/eriks-social-network-api",
      deployedApp: "https://git.heroku.com/eriks-social-network-api.git",
    },
    {
      title: "Erik's Responsive Portfolio",
      image: ResponsivePortfolio,
      description:
        "This application is another portfolio page. See how it differs from this application.",
      gitHubLink: "https://github.com/erikchiodo/eriks-responsive-portfolio",
      deployedApp: "https://erikchiodo.github.io/challenge-2/",
    },
    {
      title: "Erik's Employee Tracker",
      image: EmployeeTracker,
      description:
        "This application allows users to keep track of their employees, managers, jobs, and salaries.",
      gitHubLink: "https://github.com/erikchiodo/eriks-employee-tracker",
      deployedApp:
        "https://drive.google.com/file/d/1fMGY5W93HtbufvE7C0NSYDOa-kdjDMwq/view",
    },
  ];

  return (
    <Grid container spacing={2}>
      {assignments.map((p) => {
        return (
          <Grid item xs={4}>
            <PortfolioCard
              title={p.title}
              description={p.description}
              gitHubLink={p.gitHubLink}
              image={p.image}
              deployedApp={p.deployedApp}
            />
          </Grid>
        );
      })}
    </Grid>
    // <Footer/>
  );
}