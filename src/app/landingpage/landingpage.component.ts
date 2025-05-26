import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';
import { AuthgoogleService } from '../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  profile: Profile | undefined; // se autenticado = undefined, caso contrário = Profile.
  constructor(private router: Router , private loginService: AuthgoogleService) {
    this.loginService.initConfiguration();
  }

  navegar() {
    this.router.navigate(['/galeria'])
  }

  logarGoogle (){
    this.loginService.login()
  }

  isLoggedIn() : boolean{
    this.profile = this.loginService.getLoggedProfile();

    return !!this.profile // técnica usada p/ retornar um boolean caso logado ou não.
  }

}