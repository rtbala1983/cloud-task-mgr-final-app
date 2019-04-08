export class Task {
  id: string;
  task: string;
  priority: string;
  parentTask: string;
  startDate: Date;
  endDate: Date;
  userId: string;
  projectId: string;
  status: string;
  constructor() {
    this.priority = '10';
    this.status='open';
   }

}
