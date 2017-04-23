import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { OnlineTestComponent } from './onlinetest.component';

const routing: Routes = [
    { path: '', component: HomeComponent},
    { path: 'onlinetest', component: OnlineTestComponent}
]
export const appRoutes = RouterModule.forRoot(routing);