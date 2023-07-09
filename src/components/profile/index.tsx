import styles from "./index.module.scss";
import { useRef, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Xarrow from "react-xarrows";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const profileImgRef = useRef(null);
  const profileTextRef = useRef(null);
  return (
    <div className={styles?.["profile"]}>
      <Col>
        <Row>
          <Col lg={6} className={styles?.["profile-text-container"]}>
            <span
              className={styles?.["profile-text-welcome"]}
              ref={profileTextRef}
            >
              Hi! I am{" "}
              <span className={styles?.["profile-text-name"]}> Alex Tran</span>
            </span>
          </Col>
        </Row>
        <Row>
          <Col lg={3} className="d-flex justify-content-center">
            <div className={styles?.["profile-img"]}>
              <img ref={profileImgRef} src={require("../../img/Profile.png")} />
            </div>
          </Col>
          <Col className={styles?.["profile-description"]}>
            <div>
              <span>A Software Developer who</span> <br />
              <span style={{ fontSize: 20 }}>
                {" "}
                Dedicated skills and time
                <br />
                to bring{" "}
                <span style={{ color: "#7127ba" }}>positive changes </span>
                <br />
                <span>in people's lives.</span>
              </span>
              <br />
              <span style={{ fontSize: 12 }}>
                How would you create positive change in people's lives?
              </span>
            </div>
          </Col>
        </Row>
      </Col>
      <Xarrow
        start={profileTextRef}
        end={profileImgRef}
        lineColor={"#808080"}
        strokeWidth={2}
        headColor={"#808080"}
        headSize={10}
      />
    </div>
  );
};

export default Profile;
