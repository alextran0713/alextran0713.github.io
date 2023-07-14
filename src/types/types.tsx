import { JobDate } from "../components/job-item";

export interface JobInfo {
  jobTitle: string;
  jobDescriptions: string[];
  companyName: string;
  companyLogo?: string;
  duration: JobDate;
}
