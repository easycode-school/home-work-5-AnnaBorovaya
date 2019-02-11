import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.html',
  styleUrls: ['./todo-component.css']
})

export class TodoComponent {

  public data = [];
  /**
   * todoAddHandler - метод-обработчик в котором происходит перехват значения переданного из дочернего элемента
   * добавляет переданный объект todo в массив
   * @param value: object
   */
  todoAddHandler(value) {
    this.data.push(value);
  }
}

