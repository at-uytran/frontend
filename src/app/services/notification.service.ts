import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  BACKEND_URL = environment.backendURL;

  constructor(private http: HttpClient) {}

  getNotifications() {
    return this.http.get(this.BACKEND_URL + "notifications");
  }
}
