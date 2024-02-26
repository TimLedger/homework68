export interface Task {
  id: string;
  title: string;
  status: boolean;
}

export interface Form {
  title: string;
  status: boolean;
}

export interface TaskApi {
  [id: string]: Task;
}