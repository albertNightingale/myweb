export interface Project {
  onGoing: boolean;
  projectName: string;
  startingDate: string;
  endingDate?: string;
  website?: string;
  github?: string;
  stack: string[];
  description: string;
}

interface Contribution {
  count: number;
  date: string;
  dayOfWeek: string;
}

export interface GitContributionType {
  startingDate: string;
  endingDate: string;
  contributions: {
    monday: Contribution[];
    tuesday: Contribution[];
    wednesday: Contribution[];
    thursday: Contribution[];
    friday: Contribution[];
    saturday: Contribution[];
    sunday: Contribution[];
  };
  contribCount: number;
}