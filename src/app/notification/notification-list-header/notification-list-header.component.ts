import { Component, OnInit } from '@angular/core';
// import { ActionCable } from 'actioncable';
import { NotificationService } from '../../services/notification.service'
import { Subscription } from 'rxjs';
import { ActionCableService, Channel } from 'angular2-actioncable';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-notification-list-header',
  templateUrl: './notification-list-header.component.html',
  styleUrls: ['./notification-list-header.component.css']
})
export class NotificationListHeaderComponent implements OnInit {
  counter: any;
  notifications: any;
  subscription: Subscription;

  constructor(
    private notificationService: NotificationService,
    private cableService: ActionCableService,
  ) {
    this.counter = 0;
 
    const channel: Channel = this.cableService
      .cable(environment.backendURL + 'cable')
      .channel('NotificationChannel', {});
 
    // Subscribe to incoming messages
    this.subscription = channel.received().subscribe(message => {
        console.log(message)
        this.notifications.unshift(message['notification']);
        this.counter = message.count;
    });
  }

  ngOnInit() {
    this.notificationService.getNotifications().subscribe(
      (res: any) => {
        this.notifications = res.notifications;
        this.counter = res.unread;
      }
    )
  }

}
