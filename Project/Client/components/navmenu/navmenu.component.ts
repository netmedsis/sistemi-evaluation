import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState, LOGOUT_USER } from 'app';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit {
    
    loggedIn$: {};
    user$: {};

    // Use "constructor"s only for dependency injection
    constructor(private store: Store<AppState>) {}

    // Here you want to handle anything with @Input()'s @Output()'s
    // Data retrieval / etc - this is when the Component is "ready" and wired up
    ngOnInit () {
        this.store.select('loggedIn').subscribe(loggedIn => {
            this.loggedIn$ = loggedIn;  
        });

        this.store.select('loggedInUser').subscribe(user => {
            this.user$ = user;
        }); 
    }

    logout() {
        this.store.dispatch({ type: LOGOUT_USER });
    }

    public isCollapsed:boolean = false;
 
    public collapsed(event:any):void {
      console.log(event);
    }
 
    public expanded(event:any):void {
      console.log(event);
    }
}
