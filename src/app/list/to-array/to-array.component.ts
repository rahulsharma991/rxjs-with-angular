import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss'],
})
export class ToArrayComponent implements OnInit, OnDestroy {
  title: any;
  intervalSubscription: Subscription = new Subscription();
  intervalData: any;
  ofData: any;
  ofSubscription: Subscription = new Subscription();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getActivatedRouteTitles();
  }
  getActivatedRouteTitles() {
    this.activatedRoute.params.subscribe(
      (res: any) => {
        if (res.title !== null || res.title !== '' || res.title !== undefined) {
          this.title = res.title;
        } else {
          alert('Route title is not passed properly');
        }
      },
      (error) => {
        alert(error);
      }
    );
  }
  //example with interval
  toArrayConvert() {
    let intervalData$ = interval(1000);

    this.intervalSubscription = intervalData$
      .pipe(take(5), toArray())
      .subscribe((res) => {
        this.intervalData = res;
        console.log(this.intervalData);
      });
  }

  //example with of

  oftoArrayConvert() {
    let ofData$ = of('test', 'hoist', 'clouser');
    this.ofSubscription = ofData$.pipe(toArray()).subscribe((res) => {
      this.ofData = res;
    });
  }

  removeInterval() {
    this.intervalSubscription.unsubscribe();
  }
  ngOnDestroy() {
    this.removeInterval();
    this.ofSubscription.unsubscribe();
  }
}
