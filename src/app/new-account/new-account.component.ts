import { Component } from '@angular/core';
// import { LoggingService } from '../logging.servivces';
import { AccountServices } from '../account.services';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LogginService]
})
export class NewAccountComponent {

  constructor( private accountServices: AccountServices) {
    this.accountServices.statusUpdated.subscribe(
      (status: string)=> alert("New Status " + status)
    );
  }
  // constructor(private LoggingServices: LoggingService, private accountServices: AccountServices) {}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountServices.addAccount(accountName, accountStatus);
    // this.LoggingServices.LogStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
