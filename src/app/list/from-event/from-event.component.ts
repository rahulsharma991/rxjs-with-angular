import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { CommonServiceService } from 'src/app/common-service.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn!: ElementRef;
  title: any;
  videoArrays: Array<any> = [];
  count = 1;
  removedVideoArrays: Array<any> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CommonServiceService
  ) {}

  ngOnInit(): void {
    this.getActivatedRouteTitles();
  }
  ngAfterViewInit() {
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      this.videoArrays.push(`video ${this.count++}`);
    });
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

  removeEvents(index: any) {
    this.removedVideoArrays.push(this.videoArrays.splice(index, 1));
    if (this.videoArrays.length == 0) {
      this.count = 1;
    }
  }
  reset() {
    this.count = 1;
    this.videoArrays = [];
    this.removedVideoArrays = [];
  }
}
