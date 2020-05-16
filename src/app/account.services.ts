
import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.servivces';

@Injectable()
export class AccountServices {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();
      constructor(private LogginServices: LoggingService){}

      addAccount(name: string, status: string){
          this.accounts.push({name:name, status: status})
          this.LogginServices.LogStatusChange(status);
      }
      updateStatus(id: number, status: string){
          this.accounts[id].status=status;
          this.LogginServices.LogStatusChange(status);
      }
      
}