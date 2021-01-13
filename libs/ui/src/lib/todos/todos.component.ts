import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@monorepos/data';

@Component({
  selector: 'monorepos-todos[todos]',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}
}
