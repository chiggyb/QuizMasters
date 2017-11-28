import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {FacebookService, InitParams} from 'ngx-facebook';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
styleUrls: ['./style.css'] 
})

export class AppComponent implements OnInit { 
	title = 'Quiz Masters'; 

	constructor(private fb: FacebookService){
		let initParams: InitParams = {
		appId: ' ',
		xfbml: true,
		version: 'v2.9'
	};

	fb.init(initParams);

	}	
	
	ngOnInit() {
       //this.fb.XFBML.parse();
    }
	

}

