export class Project {
  id: string;
  project: string;
  priority: string;
  startDate: Date;
  endDate: Date;
  mgrId: string;
  countOfTasks: string;
  countOfCompletedTasks: string;
  constructor() {
    this.priority = '0';
   }
}
