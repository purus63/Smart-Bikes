import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatStepperModule, MatSidenavModule, MatListModule,MatIconModule,MatCardModule,MatTabsModule,MatFormFieldModule, MatDatepickerModule, MatRadioModule,MatNativeDateModule, MatInputModule, MatDialogModule, MatDividerModule} from '@angular/material';
import {MatTable, MatTableModule} from "@angular/material/table";

const MaterialComponents = [
  MatButtonModule,MatToolbarModule,MatStepperModule,MatSidenavModule,MatListModule,MatIconModule,MatCardModule,MatTabsModule,MatFormFieldModule,MatDatepickerModule,MatRadioModule,MatNativeDateModule, MatInputModule,MatDialogModule,MatDividerModule,MatTableModule
]

@NgModule({

  imports: [MaterialComponents,CommonModule

  ],
  exports: [MaterialComponents

  ]
})
export class MaterialModule { }
