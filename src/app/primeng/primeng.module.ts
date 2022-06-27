import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {RatingModule} from 'primeng/rating';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

const primeComponents = [
  PasswordModule,
  DividerModule,
  ButtonModule,
  CardModule,
  InputTextModule,
  CheckboxModule,
  ToastModule,
  ToolbarModule,
  FileUploadModule,
  TableModule,
  VirtualScrollerModule,
  HttpClientModule,
  RatingModule,
  DialogModule,
  DropdownModule,
  ConfirmDialogModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primeComponents
  ],
  exports: [primeComponents]
})
export class PrimengModule { }
