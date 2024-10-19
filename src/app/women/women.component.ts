import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WomendressesComponent } from '../womendresses/womendresses.component';
import { WomenfrockComponent } from '../womenfrock/womenfrock.component';
import { WomenjeansComponent } from '../womenjeans/womenjeans.component';
import { WomenleggingsComponent } from '../womenleggings/womenleggings.component';
import { WomenlehengaComponent } from '../womenlehenga/womenlehenga.component';
import { WomenproductsComponent } from '../womenproducts/womenproducts.component';
import { WomentopsComponent } from '../womentops/womentops.component';
import { WomennightwearComponent } from '../womennightwear/womennightwear.component';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [RouterLink,WomendressesComponent,WomenfrockComponent,WomenjeansComponent,WomenleggingsComponent,WomenlehengaComponent,
    WomenproductsComponent,WomentopsComponent,WomennightwearComponent
  ],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {

}
