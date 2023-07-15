import { Col, Row } from "react-bootstrap";
import GradientComponent from "../gradient-background";
import styles from "./index.module.scss";
import { map } from "lodash";
import { format } from "date-fns";

export interface JobDate {
  from: string;
  to: string | null;
}

export interface JobItemProps {
  jobTitle: string;
  jobDescriptions: string[];
  companyName: string;
  companyLogo?: string;
  duration: JobDate;
}

const JobItem = ({
  jobTitle,
  jobDescriptions,
  companyName,
  companyLogo,
  duration,
}: JobItemProps) => {
  const formattedFrom = format(new Date(duration?.from), "LLL yyyy");
  const formattedTo = duration?.to
    ? format(new Date(duration?.to), "LLL yyyy")
    : "Current";
  const formattedDate = formattedFrom + " - " + formattedTo;
  return (
    <Col className={styles?.["container"]} lg={12} md={12}>
      <GradientComponent>
        <Row className="align-items-center">
          <Col
            lg={2}
            md={12}
            className={styles?.["image-container"] + " d-flex"}
          >
            <img className={styles?.["image-style"]} src={companyLogo} />
          </Col>
          <Col lg={10} md={12}>
            <Row>
              <Col>
                <strong>{jobTitle}</strong>
              </Col>
              <Col className="d-flex justify-content-end">{formattedDate}</Col>
            </Row>
            <Row>
              <Col>{companyName}</Col>
            </Row>
            <Row className={styles?.["job-description"] + " d-flex p-3"}>
              {map(jobDescriptions || [], (desc) => {
                return (
                  <li
                    dangerouslySetInnerHTML={{
                      __html: desc,
                    }}
                  />
                );
              })}
            </Row>
          </Col>
        </Row>
      </GradientComponent>
    </Col>
  );
};

export default JobItem;
