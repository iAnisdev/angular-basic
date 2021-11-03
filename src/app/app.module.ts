import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ListComponent } from './components/list/list.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { UsernameFilterPipe } from './pipes/username-filter.pipe';
import { SizerComponent } from './components/sizer/sizer.component';
import { TwoWayBinidingComponent } from './components/two-way-biniding/two-way-biniding.component';
import { ImportantDirective } from './directives/important.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ListComponent,
    ParentComponent,
    ChildComponent,
    UsernameFilterPipe,
    SizerComponent,
    TwoWayBinidingComponent,
    ImportantDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
