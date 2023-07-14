import { Row } from "react-bootstrap";
import JobItem from "../job-item";
import styles from "./index.module.scss";
import { map } from "lodash";
import { jobs } from "../../data";

interface ExperienceSectionProps {}

const ExperienceSection = () => {
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
              duration={job?.duration}
            />
          );
        })}
      </Row>
    </div>
  );
};

export default ExperienceSection;
