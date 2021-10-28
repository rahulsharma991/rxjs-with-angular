import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  observableEvents = [
    {
      event: 'fromEvent',
    },
    {
      event: 'Interval&Timer',
    },
    {
      event: 'ofandfrom',
    },
    {
      event: 'toArray',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  eventRoutes(event: any) {
    if (event === 'fromEvent') {
      this.router.navigate(['/fromevent', event]);
    } else if (event === 'Interval&Timer') {
      this.router.navigate(['/intervalandtimer', event]);
    } else if (event === 'ofandfrom') {
      this.router.navigate(['ofandfrom', event]);
    } else if (event === 'toArray') {
      this.router.navigate(['toArray', event]);
    }
  }
}
