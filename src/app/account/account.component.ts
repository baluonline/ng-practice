import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.servivces';
import { AccountServices } from '../account.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LogginService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor( private accountServices: AccountServices){}

  // constructor(private LogginServices: LoggingService, private accountServices: AccountServices){}
  onSetTo(status: string) {
    this.accountServices.updateStatus(this.id, status)
    this.accountServices.statusUpdated.emit(status);
    // this.LogginServices.LogStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }

}
