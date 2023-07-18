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

export interface TechnicalSkill {
  sectionName: string;
  img?: string;
  listOfSkills: string[];
}

export interface ContactMethod {
  icon: string;
  name: string;
  link: string;
}

export type attendDuration = JobDate;
export interface Address {
  address1: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Education {
  degree: string;
  duration: attendDuration;
  schoolName: string;
  address: Address;
  phoneNumber: string;
  src?: string;
  url?: string;
}
