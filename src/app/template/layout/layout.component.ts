import { Component, OnInit } from '@angular/core';
import { LayoutProps } from './layoutProps'
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs'

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  props: LayoutProps = { titulo: '', subTitulo: '' };

  constructor(private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.router.events.pipe((filter(() => this.activateRoute.firstChild !== null)),
      map(() => this.obterPropiedades())
    ).subscribe((props: LayoutProps) => this.props = props)

  }

  obterPropiedades(): LayoutProps {
    let rotaFilha = this.activateRoute.firstChild;

    while (rotaFilha?.firstChild) {
      rotaFilha = rotaFilha.firstChild
    }

    return rotaFilha?.snapshot.data as LayoutProps;
  }
}
