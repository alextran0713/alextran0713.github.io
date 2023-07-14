import { JobDate } from "../components/job-item";

export interface JobInfo {
  jobTitle: string;
  jobDescriptions: string[];
  companyName: string;
  companyLogo?: string;
  duration: JobDate;
}

export interface AlertType {
  title?: string;
  message?: string;
  closeButton?: boolean;
  selectionButton?: boolean;
}
