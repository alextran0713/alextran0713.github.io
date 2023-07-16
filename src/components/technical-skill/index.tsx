import { map } from "lodash";
import styles from "./index.module.scss";
import { TechnicalSkillData } from "../../data";

interface TechnicalSkillsProps {}

const TechnicalSkills = () => {
  return (
    <div className={styles?.["container"]}>
      <h1>Technical Skills </h1>
      <div className={styles?.["section"]}>
        {map(TechnicalSkillData || [], (section) => {
          return (
            <div className="pb-3">
              <div className={styles?.["section-title"]}>
                {section?.sectionName}
              </div>
              <div className={"d-flex flex-wrap pt-2 pb-2"}>
                {map(section?.listOfSkills || [], (skill) => (
                  <span className={styles?.["section-skill"]}>{skill}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalSkills;
