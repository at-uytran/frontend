import { Component, OnInit } from '@angular/core';
// import { NotificationModule } from '../notification/notification.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  counter: any;

  constructor() { }

  ngOnInit() {
  }

}
