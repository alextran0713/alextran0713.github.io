import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.scss";
import Logo from "../../img/AT_Logo_BlackOutline_Small.png";
import { ContactUs, JobSeekDescription } from "../../data";
import { map } from "lodash";

const Footer = () => {
  return (
    <div className={styles?.["container"]}>
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <Row>
              <img style={{ width: 250 }} src={Logo} />
            </Row>
            <Row>
              <span className={styles?.["footer-text"]}>
                {JobSeekDescription}
              </span>
            </Row>
          </Col>
          <Col className={styles?.["contact-info"]}>
            <Row>
              <span>Contact Me</span>
            </Row>
            <Row>
              {map(ContactUs || [], (item) => {
                return (
                  <Col className={styles?.["image-style"]}>
                    <a
                      href={
                        item?.name === "Gmail"
                          ? `mailto:${item?.link}`
                          : item?.link
                      }
                    >
                      <img style={{ height: 30 }} src={item?.icon} />
                    </a>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
