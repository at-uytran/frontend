import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationFormComponent } from './notification-form/notification-form.component';
import { NotificationListHeaderComponent } from './notification-list-header/notification-list-header.component';


@NgModule({
  declarations: [NotificationFormComponent, NotificationListHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [NotificationListHeaderComponent]
})
export class NotificationModule { }
