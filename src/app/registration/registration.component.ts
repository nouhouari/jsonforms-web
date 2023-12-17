import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Generate, ValidationMode } from '@jsonforms/core';

import { angularMaterialRenderers } from '@jsonforms/angular-material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  renderers = [
    ...angularMaterialRenderers
  ];

  validationMode: ValidationMode = 'ValidateAndShow';
  error = false;
  schema: any;
  data: any;
  validationErrors: any;
  uischema: any;
  loading = false;

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.loading = true;
      this.api.getLatestSchema().subscribe(
        (formdef) => {
          this.schema = JSON.parse(formdef.schema);
          this.uischema = formdef.uiSchema?formdef.uiSchema:Generate.uiSchema(this.schema);
        },
        (err) => { this.loading = false},
        ()=> this.loading = false
      );
  }

  onError(ev: any): void {
    this.validationErrors = ev;
    this.error = ev.length>0;    
  }

  register(){
    console.log(this.data);
    
  }

  defaultConfig = {
    showUnfocusedDescription: true
  };

}
