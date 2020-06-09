import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the Calculator App';
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
  // hier ligt het antwoord in waarom ie gesaved in een constante of
  // let die style niet verdraagt omdat het type van die constante dan element en fout is:
  // https://indepth.dev/exploring-angular-dom-manipulation-techniques-using-viewcontainerref/
  // ik zou hier gebruik moeten maken van 'as' om de typering van de const of let in any te veranderen
  wrong(){
    document.getElementsByTagName('input')[0].style.backgroundColor = '#ff0000';
    document.getElementsByTagName('input')[1].style.backgroundColor = '#ff0000';
    document.getElementsByTagName('p')[0].innerHTML = 'Some of the fields are empty, please fill in a number(s) to complete the calculation.';
    }
  right(){
    document.getElementsByTagName('input')[0].style.backgroundColor = '#fff';
    document.getElementsByTagName('input')[1].style.backgroundColor = '#fff';
    document.getElementsByTagName('p')[0].innerHTML = '';
    }
}
/* https://karma-runner.github.io/1.0/config/configuration-file.html
 //te raadplegen voor die errors in de terminal na de boodschap dat de compile 'OK' is */

// https://leafletjs.com/ interessant voor landkaartjes in combinatie met . . .
// to deploy my app: https://blog.bitsrc.io/deploy-your-angular-project-to-github-pages-7cbacb96f35b

// bij over budjet warning bij deploy, in terminal, de geheugenwaarden aanpassen in angular.json
// https://stackoverflow.com/questions/53995948/warning-in-budgets-maximum-exceeded-for-initial
