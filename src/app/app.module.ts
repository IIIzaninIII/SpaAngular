import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { UserComponentComponent } from './user-component/user-component.component';
import { MenuPositionExampleComponent } from './menu-position-example/menu-position-example.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AOneplusComponent } from './a-oneplus/a-oneplus.component';
import { ARealmeComponent } from './a-realme/a-realme.component';
import { AVivoComponent } from './a-vivo/a-vivo.component';
import { ASamsungComponent } from './a-samsung/a-samsung.component';
import { AZteComponent } from './a-zte/a-zte.component';
import { AAppleComponent } from './a-apple/a-apple.component';
import { ANubiaComponent } from './a-nubia/a-nubia.component';
import { AAsusComponent } from './a-asus/a-asus.component';
import { AHuaweiComponent } from './a-huawei/a-huawei.component';
import { AMotorolaComponent } from './a-motorola/a-motorola.component';
import { BMotorolaComponent } from './b-motorola/b-motorola.component';
import { BNokiaComponent } from './b-nokia/b-nokia.component';
import { BOneplusComponent } from './b-oneplus/b-oneplus.component';
import { BPocoComponent } from './b-poco/b-poco.component';
import { BZteComponent } from './b-zte/b-zte.component';
import { COppoComponent } from './c-oppo/c-oppo.component';
import { CCubotComponent } from './c-cubot/c-cubot.component';
import { CMotorolaComponent } from './c-motorola/c-motorola.component';
import { CNokiaComponent } from './c-nokia/c-nokia.component';
import { CUmidigiComponent } from './c-umidigi/c-umidigi.component';
import { CZteComponent } from './c-zte/c-zte.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    UserComponentComponent,
    MenuPositionExampleComponent,
    AOneplusComponent,
    ARealmeComponent,
    AVivoComponent,
    ASamsungComponent,
    AZteComponent,
    AAppleComponent,
    ANubiaComponent,
    AAsusComponent,
    AHuaweiComponent,
    AMotorolaComponent,
    BMotorolaComponent,
    BNokiaComponent,
    BOneplusComponent,
    BPocoComponent,
    BZteComponent,
    COppoComponent,
    CCubotComponent,
    CMotorolaComponent,
    CNokiaComponent,
    CUmidigiComponent,
    CZteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
