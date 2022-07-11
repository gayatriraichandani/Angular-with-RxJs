import { Component, OnInit, VERSION } from '@angular/core';
import { of, from, map, tap, take } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    // of(2, 3, 4, 5)
    //   .pipe(
    //     map((item) => item * 2),
    //     tap((item) => console.log(item)),
    //     take(3)
    //   )
    //   .subscribe((item) => console.log(item));

    from([10, 11, 12, 5])
      .pipe(
        tap((item) => console.log(`item is ${item}`)),
        map((item) => item * 2),
        map((item) => item - 10),
        map((item) => {
          if (item === 0) {
            throw new Error('Error occurred');
          }
          return item;
        }),
        take(3)
      )
      .subscribe({
        next: (item) => console.log(`item ${item}`),
        error: (err) => console.log(`error: ${err}`),
        complete: () => console.log(`complete`),
      });

    // from(['abc', 'xyz', '12']).subscribe({
    //   next: (item) => console.log(`item ${item}`),
    //   error: (err) => console.log(`error: ${err}`),
    //   complete: () => console.log(`complete`),
    // });

    // of('abc', 'xyz', '12').subscribe({
    //   next: (item) => console.log(`item ${item}`),
    //   error: (err) => console.log(`error: ${err}`),
    //   complete: () => console.log(`complete`),
    // });
  }
}
