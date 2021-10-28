import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-intervalandtimer',
  templateUrl: './intervalandtimer.component.html',
  styleUrls: ['./intervalandtimer.component.scss'],
})
export class IntervalandtimerComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('addBtn') addBtn!: ElementRef;
  @ViewChild('removeBtnEvent') removeBtnEvent!: ElementRef;
  @ViewChild('addTimerBtn') addTimerBtn!: ElementRef;
  @ViewChild('removeTimerBtnEvent') removeTimerBtnEvent!: ElementRef;
  title: any;
  intervalData: Array<any> = [];
  interValSubscription: Subscription = new Subscription();
  timerSubscription: Subscription = new Subscription();
  timerData: Array<any> = [];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getActivatedRouteTitles();
  }

  ngAfterViewInit() {
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(
      (res) => {
        const intervalStart = interval(1000); // rxjs interval 1sec time

        //subscribing the interval
        this.interValSubscription = intervalStart.subscribe(
          (res: any) => {
            this.intervalData.push(`video ${res}`);
          },
          (err: any) => {
            alert(err);
          }
        );
      },
      (err) => {
        alert(err);
      }
    );

    fromEvent(this.removeBtnEvent.nativeElement, 'click').subscribe(
      (res) => {
        this.interValSubscription.unsubscribe();
      },
      (err) => alert(err)
    );

    fromEvent(this.addTimerBtn.nativeElement, 'click').subscribe(
      (res) => {
        const timerStart = timer(2000, 1000);

        this.timerSubscription = timerStart.subscribe(
          (res: any) => {
            this.timerData.push(`Video ${res}`);
          },
          (err) => alert(err)
        );
      },
      (err) => alert(err)
    );

    fromEvent(this.removeTimerBtnEvent.nativeElement, 'click').subscribe(
      (res) => {
        this.timerSubscription.unsubscribe();
      },
      (err) => alert(err)
    );
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

  ngOnDestroy() {
    this.interValSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }
}
