import { Row } from "react-bootstrap";
import JobItem from "../job-item";
import styles from "./index.module.scss";
import { map } from "lodash";
import { JobInfo } from "../../types/types";

interface ExperienceSectionProps {}

const ExperienceSection = () => {
  const jobs: JobInfo[] = [
    {
      jobTitle: "Full-stack Developer",
      jobDescriptions: [
        `Launch and support an IBE user interface for a low cost airline carrier`,
        "Coordinate application releases on App Store and Google Play",
        `Use <b>fastlane</b> and <b>codepush</b> to optimize continuous deployment through <b>CI/CD</b>`,
        "Develop customizable and reusable front-end components to be use across all applications",
        "Utilize <b>Typescript</b> and <b>JavaScript</b> in <b>React/React Native</b> platform to build frontend framework",
      ],
      companyName: "777 Partners",
      companyLogo: require("../../img/777-logo-clear-1.png"),
    },
  ];
  return (
    <div className={styles?.["container"]}>
      <h1>Work Experiences</h1>
      <Row>
        {map(jobs || [], (job) => {
          return (
            <JobItem
              jobTitle={job?.jobTitle}
              jobDescriptions={job?.jobDescriptions}
              companyName={job?.companyName}
              companyLogo={job?.companyLogo}
            />
          );
        })}
      </Row>
    </div>
  );
};

export default ExperienceSection;
