import { Component, Output, EventEmitter, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.html',
  styleUrls: ['./form-component.css']
})

export class FormComponent {
  @Output() transferTodo = new EventEmitter();
  @ViewChild('todoForm') form: NgForm;
  public newTodo = {
    name: '',
    text: ''
  };
  public isActiv = false;
  /**
   * onSubmitHandler - метод-обработчик события по форме. Проводится проверка - если какие-либо поля не заполнены, то:
   * происходит сброс формы, появляется сообщение об ошибке, которое через 1 сек скрывается;
   * объект события распространяется к родителю в котором передается объект todo;
   * происходит сброс формы;
   */
  onSubmitHandler() {
    if (this.form.invalid) {
      this.form.resetForm();
      this.isActiv = true;
      setTimeout(() => {
        this.isActiv = false;
      }, 1500);
      return;
    }
    this.transferTodo.emit(Object.assign({}, this.newTodo));
    this.form.resetForm();
  }
}

