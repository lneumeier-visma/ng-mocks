import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DependencyComponent } from './dependency.component';

@NgModule({
  declarations: [DependencyComponent],
  entryComponents: [DependencyComponent],
  imports: [CommonModule]
})
export class DependencyModule {}
