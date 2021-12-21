import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { VermudanzasPageModule } from './vermudanzas/vermudanzas.module';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
  },
  {
    path: "category",
    loadChildren: () =>
      import("./category/category.module").then((m) => m.CategoryPageModule),
  },
  {
    path: "person",
    loadChildren: () =>
      import("./person/person.module").then((m) => m.PersonPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registrate',
    loadChildren: () => import('./registrate/registrate.module').then( m => m.RegistratePageModule)
  },
  {
    path: 'registroexitoso',
    loadChildren: () => import('./registroexitoso/registroexitoso.module').then( m => m.RegistroexitosoPageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'contrasena',
    loadChildren: () => import('./contrasena/contrasena.module').then( m => m.ContrasenaPageModule)
  },
  {
    path: 'enviodecontrasena',
    loadChildren: () => import('./enviodecontrasena/enviodecontrasena.module').then( m => m.EnviodecontrasenaPageModule)
  },
  {
    path: 'vermudanzas',
    loadChildren: () => import('./vermudanzas/vermudanzas.module').then( m => VermudanzasPageModule)
  },
  {
    path: 'repartidor',
    loadChildren: () => import('./repartidor/repartidor.module').then( m => m.RepartidorPageModule)
  },
  {
    path: 'loginrepartidor',
    loadChildren: () => import('./loginrepartidor/loginrepartidor.module').then( m => m.LoginrepartidorPageModule)
  },
  {
    path: 'vistarepartidor',
    loadChildren: () => import('./vistarepartidor/vistarepartidor.module').then( m => m.VistarepartidorPageModule)
  },
  {
    path: 'correct',
    loadChildren: () => import('./correct/correct.module').then( m => m.CorrectPageModule)
  },
  {
    path: 'vistausuario',
    loadChildren: () => import('./vistausuario/vistausuario.module').then( m => m.VistausuarioPageModule)
  },
  {
    path: 'loginusuario',
    loadChildren: () => import('./loginusuario/loginusuario.module').then( m => m.LoginusuarioPageModule)
  },
  {
    path: 'registrousuario',
    loadChildren: () => import('./registrousuario/registrousuario.module').then( m => m.RegistrousuarioPageModule)
  },
  {
    path: 'exitosouser',
    loadChildren: () => import('./exitosouser/exitosouser.module').then( m => m.ExitosouserPageModule)
  },
  {
    path: 'forgotuser',
    loadChildren: () => import('./forgotuser/forgotuser.module').then( m => m.ForgotuserPageModule)
  },
  {
    path: 'olvidorepartidor',
    loadChildren: () => import('./olvidorepartidor/olvidorepartidor.module').then( m => m.OlvidorepartidorPageModule)
  },
  {
    path: 'olvidouser',
    loadChildren: () => import('./olvidouser/olvidouser.module').then( m => m.OlvidouserPageModule)
  },
  {
    path: 'correctcontra',
    loadChildren: () => import('./correctcontra/correctcontra.module').then( m => m.CorrectcontraPageModule)
  },
  {
    path: 'loginadmin',
    loadChildren: () => import('./loginadmin/loginadmin.module').then( m => m.LoginadminPageModule)
  },
  {
    path: 'vistaadmin',
    loadChildren: () => import('./vistaadmin/vistaadmin.module').then( m => m.VistaadminPageModule)
  },
  {
    path: 'registroadmin',
    loadChildren: () => import('./registroadmin/registroadmin.module').then( m => m.RegistroadminPageModule)
  },
  {
    path: 'exitosoadmin',
    loadChildren: () => import('./exitosoadmin/exitosoadmin.module').then( m => m.ExitosoadminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
