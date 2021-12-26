import { Component, OnInit } from '@angular/core';
import { Animes } from './animes.model';
import { AnimesService } from './animes.service';

@Component({
  selector: 'dbzn-animes',
  templateUrl: './animes.component.html'
})
export class AnimesComponent implements OnInit {

  animes: Animes[] = []

  constructor(private animesService: AnimesService) { }

  ngOnInit(): void {
    this.animesService.animes().subscribe(animes => this.animes = animes)
  }

}
