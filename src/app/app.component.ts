import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator App';
  num1: number;
  num2: number;
  result: number;
  add(){
    this.check();
    this.result = this.num1 + this.num2;
  }
  substract(){
    this.check();
    this.result = this.num1 - this.num2;
  }
  multiply(){
    this.check();
    this.result = this.num1 * this.num2;
  }
  divide(){
    this.check();
    this.result = this.num1 / this.num2;
  }
  check() {
    if ((!isNaN(this.num1)) && (!isNaN(this.num2))) {
      this.right();
    }else{
      this.wrong();
    }
  }
  // hier moet ik nog even aanpassen dat het inputfield met de fout in rood wordt en niet het andere
  wrong(){
    document.querySelector('input').style.backgroundColor = '#ff0000';
    }
  right(){
      document.querySelector('input').style.backgroundColor = '#fff';
    }
}



