export class UserStory {
  name: string;
  description: string;
  prefix: string;
  taskNumber: number;
  storyPoints: number;
  assigned_at: string;
  created_at: number;
  updated_at: number;

  constructor(name: string, description: string, prefix: string, taskNumber: number, storyPoints: number, assigned_at: string, created_at: number, updated_at: number){
    this.name = name;
    this.description = description;
    this.prefix = prefix;
    this.taskNumber = taskNumber;
    this.storyPoints = storyPoints;
    this.assigned_at = assigned_at;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
