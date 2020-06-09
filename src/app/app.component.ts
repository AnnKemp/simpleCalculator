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
  result: any;
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
  // hier ligt het antwoord in waarom ie die style niet verdraagt omdat het type van x fout is
  // //omdat dat een element is: https://indepth.dev/exploring-angular-dom-manipulation-techniques-using-viewcontainerref/
  // ik zou hier gebruik moeten maken van as om de typering van x in any te veranderen
  wrong(){
    document.getElementsByTagName('input')[0].style.backgroundColor = '#ff0000';
    document.getElementsByTagName('input')[1].style.backgroundColor = '#ff0000';
    document.getElementsByTagName('p')[0].innerHTML = 'Some of the fields are empty, please fill in a number to complete the calculation.';
    }
  right(){
    document.getElementsByTagName('input')[0].style.backgroundColor = '#fff';
    document.getElementsByTagName('input')[1].style.backgroundColor = '#fff';
    document.getElementsByTagName('p')[0].innerHTML = '';
    }
}



