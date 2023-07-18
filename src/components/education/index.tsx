import styles from "./index.module.scss";
import GradientComponent from "../gradient-background";
import { EducationData } from "../../data";
import { isEmpty, map } from "lodash";
import { format } from "date-fns";

const Education = () => {
  return (
    <div className={styles?.["container"]}>
      <h1>Education</h1>
      <div>
        <GradientComponent>
          <div className="text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <ol className={styles?.["timeline"]}>
                  {map(EducationData || [], (data) => {
                    const formattedFrom = format(
                      new Date(data?.duration?.from),
                      "yyyy"
                    );
                    const formattedTo = data?.duration?.to
                      ? format(new Date(data?.duration?.to), "yyyy")
                      : "Now";
                    const formattedDate = formattedFrom + " - " + formattedTo;
                    const location =
                      data?.address?.city +
                      ", " +
                      data?.address?.state +
                      " " +
                      data?.address?.zipCode;
                    return (
                      <li className={styles?.["timeline-element"]}>
                        <h5 className="font-weight-bold mb-3">
                          {data?.degree}
                        </h5>
                        <p className="font-small">
                          <time dateTime={data?.duration?.from}>
                            {formattedDate}
                          </time>
                        </p>
                        <p>
                          <img src={data?.src} />
                        </p>
                        <p>
                          <strong>{data?.schoolName}</strong>
                        </p>
                        {!isEmpty(data?.address?.address1) && (
                          <>
                            <p>{data?.address?.address1}</p>
                            <p>{location}</p>
                          </>
                        )}
                        <p>{data?.phoneNumber}</p>
                        {!isEmpty(data?.url) && <p>{data?.url}</p>}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </GradientComponent>
      </div>
    </div>
  );
};

export default Education;
