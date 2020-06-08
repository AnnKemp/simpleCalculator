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
    this.check(); /* en als ik het op intypen check moet ik dat hier niet insteken want dit is onsubmit, het moet eerder on focus or on change zijn . . . en dat moet ik dan in de html steken, maar als ze niets invullen dan is het natuurlijk niet on change. .  . neen, ik moet na het verzenden checken of ze leeg zijn */
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
    this.result = this.num1 % this.num2;
  }
  check() {
    // hier nog een foutje op te lossen waarschijnlijk neemt functie isNaN niet alles aan
    if (((!isNaN(this.num1)) && (!isNaN(this.num2))) {
      this.wrong();
    }else{
      this.right();
    }
  }
  wrong(){
    /* dat heeft natuurlijk niet als id input maar als tagname input en het moet
    alleen dat een specifiek veld zijn dat rood wordt en daarna moet het natuurlijk terug wit worden dus*/
    document.getElementById('input').style.backgroundColor = '#ff0000';
    /* via this het juiste veld selecteren en het event meegeven
     en niet onclick maar al tijdens het intypen checken en als ze juist typen terug dat rood weg */
    }
    right(){
    /* en hier van 't zelfde */
      document.getElementById('input').style.backgroundColor = '#fff';
    }
}



