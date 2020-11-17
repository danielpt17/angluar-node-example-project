import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HomeService} from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  searchLineControl: FormControl = new FormControl();
  private subs: Subscription = new Subscription();

  constructor(private readonly fb: FormBuilder, private readonly homeService: HomeService) {
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: new FormControl('', Validators.nullValidator && Validators.required),
      lastName: new FormControl('', Validators.nullValidator && Validators.required),
      email: new FormControl('', Validators.nullValidator && Validators.required)
    });
  }

  onSubmit() {
    this.subs.add(this.homeService.addUser(this.form.value).subscribe(data => {
      this.form.reset();
    }));
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}

