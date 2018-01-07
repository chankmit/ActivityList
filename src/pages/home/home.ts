import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';
import { NewactivityPage } from '../newactivity/newactivity';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  addedToDoList:any[] = [];
  tempTodos:any = '';
  todoPage = NewactivityPage;
  constructor(public navCtrl: NavController,private navParams: NavParams,public storage: Storage){ 
      this.storage.get('todoDetails').then((val) => { 
      this.addedToDoList = val;
     });
  }
  testObj = {
    "title":"",
    "description": ""
  }

  ngOnInit():void{
    this.storage.get('todoDetails').then((val) => { 
      this.addedToDoList = val;
    }); 
  }

  ionViewWillEnter(){
    this.storage.get('todoDetails').then((val) => {
      this.addedToDoList = val;
    });    
  } 

  ionViewDidEnter() {
    this.storage.get('todoDetails').then((val) => {
      this.addedToDoList = val;
    }); 
  }

  goToAddTodo():void{
      this.navCtrl.push(NewactivityPage);
  }

  removeItem(todo):void{
    let index = this.addedToDoList.indexOf(todo);
    if(index>-1){
      this.addedToDoList.splice(index,1);
      this.storage.set('todoDetails',this.addedToDoList);
    } 
  } 
  
}
