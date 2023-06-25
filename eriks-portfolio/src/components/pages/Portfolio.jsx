import PortfolioCard from "./PortfolioCard";

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
      gitHubLink: "",
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
      deployedApp: "",
    },
    {
      title: "Erik's Employee Tracker",
      image: EmployeeTracker,
      description:
        "This application allows users to keep track of their employees, managers, jobs, and salaries.",
      gitHubLink: "https://github.com/erikchiodo/eriks-employee-tracker",
      deployedApp: "",
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div>
        {assignments.map((p) => {
          return (
            <PortfolioCard
              title={p.title}
              description={p.description}
              githubLink={p.gitHubLink}
              image={p.image}
              deployedApp={p.deployedApp}
            />
          );
        })}
      </div>
    </section>
  );
}