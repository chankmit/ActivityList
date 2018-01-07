import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-newactivity',
  templateUrl: 'newactivity.html',
})
export class NewactivityPage {

  title:any;
  description:any;

  addedToDo:any[]=[];

  constructor(public navCtrl: NavController,public storage: Storage) {
      this.storage = storage;
  }
  
  saveRecords():void{

    let todoObj = {
      title:"",
      description:""
    };
    todoObj.title = this.title;
    todoObj.description = this.description;


    this.storage.get('todoDetails').then((val) => {
    
      if(val){
        this.addedToDo = val;
        console.log(todoObj);
        this.addedToDo.push(todoObj);
        this.storage.set('todoDetails', this.addedToDo);
      }else{
        this.addedToDo.push(todoObj);
        this.storage.set('todoDetails', this.addedToDo);
      }
    });

    this.title="";
    this.description="";

    this.navCtrl.pop();
  }  

}
