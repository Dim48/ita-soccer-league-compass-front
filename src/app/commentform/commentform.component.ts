import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-commentform',
  templateUrl: './commentform.component.html',
  styleUrls: ['./commentform.component.css']
})
export class CommentformComponent implements AfterViewInit {
  formVisible:boolean = false;

  ngAfterViewInit() {
    document.getElementById("myForm")?.addEventListener("submit", function(e) {
      if ((document.getElementById('myForm') as HTMLFormElement).checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      document.getElementById("myForm")?.classList.add("was-validated");
    });
  }
}
