import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
import { TableComponent } from './table.component';



@NgModule({
  declarations: [
    HighlightDirective,
    TableComponent
  ],
  imports: [
    CommonModule,
    NgModule
  ]
})
export class TableModule { }
