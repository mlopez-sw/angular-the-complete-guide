import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NgForm,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'formsApp';
  signupForm: FormGroup;
  formData = { project: '', email: '', state: '' };
  isSubmitted = null;

  //prettier-ignore
  ngOnInit() {
    this.signupForm = new FormGroup({
      project: new FormControl(null, [Validators.required, this.projectValidator]),
      email: new FormControl(null, [Validators.required, Validators.email], this.emailValidator),
      select: new FormControl("Stable"),
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    const formValue = this.signupForm.value;
    this.formData.project = formValue.project;
    this.formData.email = formValue.email;
    this.formData.state = formValue.select;
    console.log(this.formData);
    this.signupForm.reset();
    setTimeout(() => {
      this.isSubmitted = false;
    }, 5000);
  }

  projectValidator(control: FormControl): { [a: string]: boolean } {
    if (control.value == 'Test') return { forbiddenName: true };
    return null;
  }

  emailValidator(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    //   const promise = new Promise<any>((resolve, reject) => {
    //     setTimeout(() => {
    //       if (control.value == 'test@test.com') resolve({ forbiddenEmail: true });
    //       else resolve(null);
    //     }, 1500);
    //   });
    //   return promise;
    // }
    if (control.value == 'test@test.com') {
      return of({ forbiddenEmail: true });
    }
    return of(null);
  }
  // Template driven form

  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  defaultSub = this.subscriptions[0];
  isFormSubmitted = false;
  templateFormData = { email: '', state: '', password: '' };
  onSubmitTemplate(form: NgForm) {
    console.log(form.value);
    this.templateFormData.email = form.value.email2;
    this.templateFormData.state = form.value.subs;
    this.templateFormData.password = form.value.password;
    this.isFormSubmitted = true;
    setTimeout(() => {
      this.isFormSubmitted = false;
    }, 5000);
    form.reset();
  }
}
