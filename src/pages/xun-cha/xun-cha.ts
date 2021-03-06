import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TaskProvider} from "../../providers/task-provider";
import {UserVo} from "../../models/user-vo";
import {Storage} from "@ionic/storage";
import {DailyTaskPage} from "../daily-task/daily-task";
import {TaskCheckVo} from "../../models/task-check-vo";
@Component({
  selector: 'page-xun-cha',
  templateUrl: 'xun-cha.html',
})
export class XunChaPage {


  user: UserVo = null;
  loading: boolean = false;
  tasks: Array<TaskCheckVo> = [];

  constructor(public navCtrl: NavController,
              public taskProvider: TaskProvider,
              private storage: Storage,
              public navParams: NavParams) {

  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad XunChaPage');
    this.storage.get('user').then(u => {
      this.user = u;
      this.loading = true;
      this.taskProvider.getXunChaTaskCheck(this.user.id).subscribe((data: any) => {
          this.tasks = data;
        }, () => {},
        () => {
          this.loading = false;
        })
    });
  }

  async openInspectDetail(taskCheck: TaskCheckVo) {
    this.navCtrl.push(DailyTaskPage, {taskCheck});
  }

  add() {
    this.navCtrl.push(DailyTaskPage, {});
  }
}
