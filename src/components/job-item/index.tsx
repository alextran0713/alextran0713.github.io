import { Col, Row } from "react-bootstrap";
import GradientComponent from "../gradient-background";
import styles from "./index.module.scss";
import { map } from "lodash";

export interface JobDate {
  from: string;
  to: string;
}

export interface JobItemProps {
  jobTitle: string;
  jobDescriptions: string[];
  companyName: string;
  companyLogo?: string;
}

const JobItem = ({
  jobTitle,
  jobDescriptions,
  companyName,
  companyLogo,
}: JobItemProps) => {
  const descriptions = [1, 2, 3, 4, 5];
  return (
    <Col className={styles?.["container"]} lg={6} md={12}>
      <GradientComponent>
        <Row>
          <Col lg={6} className="d-lg-flex d-none">
            <img src={companyLogo} />
          </Col>
          <Col lg={6} md={12}>
            <Row>
              <Col>Title</Col>
              <Col className="d-flex justify-content-end">Occupation Time</Col>
            </Row>
            <Row className="d-flex justify-content-center">
              {/* {map(jobDescriptions || [], (desc) => {
                return (
                  <Row>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: desc,
                      }}
                    />
                  </Row>
                );
              })} */}
            </Row>
          </Col>
        </Row>
      </GradientComponent>
    </Col>
  );
};

export default JobItem;
