/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { produceComponent } from './produce/produce.component';

import { farmerComponent } from './farmer/farmer.component';
import { procurementComponent } from './procurement/procurement.component';
import { transporterComponent } from './transporter/transporter.component';
import { storageComponent } from './storage/storage.component';
import { distributerComponent } from './distributer/distributer.component';
import { fpsComponent } from './fps/fps.component';
import { consumerComponent } from './consumer/consumer.component';

import { transferprocudeownershipComponent } from './transferprocudeownership/transferprocudeownership.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produce', component: produceComponent },
  { path: 'farmer', component: farmerComponent },
  { path: 'procurement', component: procurementComponent },
  { path: 'transporter', component: transporterComponent },
  { path: 'storage', component: storageComponent },
  { path: 'distributer', component: distributerComponent },
  { path: 'fps', component: fpsComponent },
  { path: 'consumer', component: consumerComponent },
  { path: 'transferprocudeownership', component: transferprocudeownershipComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
