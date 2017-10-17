import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.css']
})

export class NewQuestionnaireComponent implements OnInit {
  
  static questionTime = performance.now();  
  constructor() 
  {

   }
  onload()
  {
    console.log(NewQuestionnaireComponent.questionTime);
    this.ButtonClicks();    
  }

  ngOnInit() {
   
  }
 

  ButtonClicks()
  {
    var option1=document.getElementById("option1");
    var option2=document.getElementById("option2");
    var option3=document.getElementById("option3");
    var option4=document.getElementById("option4");
    
    // let handler = (e:MouseEvent)=>this.answer();
   // option1.addEventListener("click",this.answer.bind(this));
    // option2.addEventListener("click",()=> this.answer());
    // option3.addEventListener("click",()=> this.answer());
    // option4.addEventListener("click",()=> this.answer());
    
  }
  answer(n:number)
  {
    var answerTime:number;
    answerTime=performance.now();  
    var finalTime=(NewQuestionnaireComponent.questionTime-answerTime);
    console.log(n);
    console.log(finalTime);
  }
}
