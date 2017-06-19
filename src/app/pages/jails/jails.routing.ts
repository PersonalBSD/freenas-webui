import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JailListComponent } from './jail-list/';
import { JailAddComponent } from './jail-add/';
import { JailEditComponent } from './jail-edit/';
import { JailDeleteComponent } from './jail-delete/';
import { StorageListComponent } from './storages/storage-list/';
import { StorageFormComponent } from './storages/storage-form/';
import { StorageDeleteComponent } from './storages/storage-delete/';
import { JailsConfigurationComponent } from './configuration/';
import { TemplateListComponent } from './templates/template-list/';
import { TemplateAddComponent } from './templates/template-add/';
import { TemplateDeleteComponent } from './templates/template-delete/';
import { TemplateEditComponent } from './templates/template-edit/';

export const routes: Routes = [
  	{ path: 'jails', component: JailListComponent, pathMatch: 'full' },  
  	{ path: 'add', component: JailAddComponent},
	{ path: 'edit/:pk', component: JailEditComponent},
	{ path: 'delete/:pk', component: JailDeleteComponent},
	{ path: 'storage', component: StorageListComponent},
	{ path: 'storage/add', component: StorageFormComponent},
	{ path: 'storage/edit/:pk', component: StorageFormComponent},
	{ path: 'storage/delete/:pk', component: StorageDeleteComponent},
	{ path: 'configuration', component: JailsConfigurationComponent},
	{ path: 'templates', component: TemplateListComponent},
	{ path: 'templates/add', component: TemplateAddComponent},
	{ path: 'templates/delete/:pk', component: TemplateDeleteComponent},
	{ path: 'templates/edit/:pk', component: TemplateEditComponent},
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
