import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'alumnos',
    pathMatch: 'full'
  },
  {
    path: 'alumnos',
    children: [
      {
        path:'',
        loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
      },
      {
        path:':idAlumno',
        loadChildren: () => import('./alumnos/detalle-alumno/detalle-alumno.module').then( m => m.DetalleAlumnoPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }