import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
    {
        path:'',
        component:HelloComponent,
        title:'Hello Angular'
    },
    {
        path:'add',
        component:AddComponent,
        title:'Add Page'
    },
    {
        path:'update',
        component:UpdateComponent,
        title:'Update Page'
    },
    {
        path:'delete',
        component:DeleteComponent,
        title:'Delete Page'
    }
];
