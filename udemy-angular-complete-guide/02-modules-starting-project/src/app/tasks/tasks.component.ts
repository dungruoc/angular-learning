import { Component, Input } from '@angular/core';

import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({required: false}) name!: string;
  isAddingTask = false;
  
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(taskId: string) {
    this.tasksService.removeTask(taskId);
  }

  onNewTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(t: NewTask) {
    this.tasksService.addNewTask(t, this.userId);
    this.isAddingTask = false;
  }
}
