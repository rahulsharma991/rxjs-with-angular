import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, fromEvent, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-ofand-from',
  templateUrl: './ofand-from.component.html',
  styleUrls: ['./ofand-from.component.scss'],
})
export class OFandFromComponent implements OnInit, AfterViewInit, OnDestroy {
  title: any;
  @ViewChild('ofBtn') ofBtn!: ElementRef;
  ofData: Array<any> = [];
  ofCollapse: boolean = true;
  fromCollapse: boolean = true;
  ofSubscription: Subscription = new Subscription();
  fromData: Array<any> = [];
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
  ngAfterViewInit() {
    this.ofSubscription = fromEvent(
      this.ofBtn.nativeElement,
      'click'
    ).subscribe(
      () => {
        const ofObserver$ = of(1, 2, 3);
        ofObserver$.subscribe(
          (res) => {
            this.ofData.push(res);
            this.ofCollapse = false;
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
  fromEvent() {
    let fromObserver$ = from('hello');
    fromObserver$.subscribe((res) => {
      this.fromData.push(res);
      this.fromCollapse = false;
    });
  }

  ngOnDestroy() {
    this.ofSubscription.unsubscribe();
  }
}
