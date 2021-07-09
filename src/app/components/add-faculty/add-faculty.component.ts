import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {
@Input() text!: string;
@Input() color!: string;
@Output() toggleAddButton = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addBtnClick(){
    this.toggleAddButton.emit();
  }

}
