import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstaService {
  private instaURL: string = "https://api.instagram.com/v1/users/";

  constructor(private http: HttpClient) { }

  public getInstaFeed(): Observable<any> {
    //To get your user ID go to http://jelled.com/instagram/lookup-user-id and enter your Instagram user name to get your user ID
    let user_id = '1414075328';
 
    //https://www.instagram.com/oauth/authorize/?client_id=64a12cb0db7b41da8cd2a8736770c466&redirect_uri=http://127.0.0.1:8080/test&response_type=token
    let access_token = '1414075328.1677ed0.eea7d742abc04cc986a9283f6cb0327a';

    let endpoint = this.instaURL;
    endpoint += user_id;
    endpoint += '/media/recent/';
    endpoint += '?count=99';
    endpoint += '&access_token=' + access_token;

    return this.http.get<any>(endpoint);
  }
}
