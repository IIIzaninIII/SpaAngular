import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AAppleComponent } from './a-apple/a-apple.component';
import { AAsusComponent } from './a-asus/a-asus.component';
import { AHuaweiComponent } from './a-huawei/a-huawei.component';
import { AMotorolaComponent } from './a-motorola/a-motorola.component';
import { ANubiaComponent } from './a-nubia/a-nubia.component';
import { AOneplusComponent } from './a-oneplus/a-oneplus.component';
import { ARealmeComponent } from './a-realme/a-realme.component';
import { ASamsungComponent } from './a-samsung/a-samsung.component';
import { AVivoComponent } from './a-vivo/a-vivo.component';
import { AZteComponent } from './a-zte/a-zte.component';
import { BMotorolaComponent } from './b-motorola/b-motorola.component';
import { BNokiaComponent } from './b-nokia/b-nokia.component';
import { BOneplusComponent } from './b-oneplus/b-oneplus.component';
import { BPocoComponent } from './b-poco/b-poco.component';
import { BZteComponent } from './b-zte/b-zte.component';
import { CCubotComponent } from './c-cubot/c-cubot.component';
import { CMotorolaComponent } from './c-motorola/c-motorola.component';
import { CNokiaComponent } from './c-nokia/c-nokia.component';
import { COppoComponent } from './c-oppo/c-oppo.component';
import { CUmidigiComponent } from './c-umidigi/c-umidigi.component';
import { CZteComponent } from './c-zte/c-zte.component';
import { TesteComponent } from './teste/teste.component';
import { UserComponentComponent } from './user-component/user-component.component';

const routes: Routes = [
  {path:'aXiaomi', component: UserComponentComponent},
  {path:'aRealme', component: ARealmeComponent},
  {path:'aVivo', component: AVivoComponent},
  {path:'aSamsung', component: ASamsungComponent},
  {path:'aZTE', component: AZteComponent},
  {path:'aApple', component: AAppleComponent},
  {path:'aNubia', component: ANubiaComponent},
  {path:'aAsus', component: AAsusComponent},
  {path:'aHuawei', component: AHuaweiComponent},
  {path:'aMotorola', component: AMotorolaComponent},
  {path:'aOneplus', component: AOneplusComponent},

  {path:'bMotorola', component: BMotorolaComponent},
  {path:'bNokia', component: BNokiaComponent},
  {path:'bOneplus', component: BOneplusComponent},
  {path:'bPoco', component: BPocoComponent},
  {path:'bZTE', component: BZteComponent},

  {path:'cOppo', component: COppoComponent},
  {path:'cCubot', component: CCubotComponent},
  {path:'cMotorola', component: CMotorolaComponent},
  {path:'cNokia', component: CNokiaComponent},
  {path:'cUMiDIGI', component: CUmidigiComponent},
  {path:'cZTE', component: CZteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
