import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MdButtonModule, MdCheckboxModule, MdSelectModule,MdDatepickerModule,MdInputModule,MdNativeDateModule} from '@angular/material';

import { SettingsComponent } from './settings.component';
import { AuthGuard, SharedModule } from '../shared';

const settingsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  }
]);

@NgModule({
  imports: [
    SharedModule,
    settingsRouting,
    [MdButtonModule, MdCheckboxModule, MdSelectModule,MdDatepickerModule,MdInputModule,MdNativeDateModule]
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule {}
