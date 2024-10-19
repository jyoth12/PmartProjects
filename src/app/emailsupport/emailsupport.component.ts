import { Component } from '@angular/core';

@Component({
  selector: 'app-emailsupport',
  standalone: true,
  imports: [],
  templateUrl: './emailsupport.component.html',
  styleUrl: './emailsupport.component.css'
})
export class EmailsupportComponent {
  // const loginApp = new Vue({
    //   el: '#login',
    //   data(): VueData {
    //     return {
    //       user: {
    //         email: null,
    //         password: null
    //       },
    //       loading: false,
    //       loggedIn: false,
    //       errors: [],
    //       attempts: 0
    //     };
    //   },
    //   methods: {
    //     login(this: VueData, e: Event): void {
    //       e.preventDefault();
    //       this.errors = [];
    //       this.loading = true;
    //       this.loggedIn = false;
    //       this.attempts++;
    
    //       setTimeout(() => {
    //         this.loading = false;
    
    //         if (this.attempts >= 3) {
    //           this.errors.push('Please reset your password.');
    //         } else if (this.attempts === 1 || Math.random() < 0.3) {
    //           this.errors.push('Error authenticating you.');
    //           this.errors.push(`${3 - this.attempts} attempts left`);
    //         } else {
    //           this.attempts = 0;
    //           this.loggedIn = true;
    //         }
    //       }, 1000);
    //     }
    //   }
    // });
}
