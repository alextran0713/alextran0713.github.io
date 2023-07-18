import { Row } from "react-bootstrap";
import JobItem from "../job-item";
import styles from "./index.module.scss";
import { map } from "lodash";
import { Jobs } from "../../data";

interface ExperienceSectionProps {}

const ExperienceSection = () => {
  return (
    <div className={styles?.["container"]}>
      <h1>Employment</h1>
      <Row>
        {map(Jobs || [], (job) => {
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
