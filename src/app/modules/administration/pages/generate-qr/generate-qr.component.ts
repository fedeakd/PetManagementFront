import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { QRService } from 'src/app/shared/service/repository/qr.service';
import * as JSZip from 'jszip';
import { saveAs, encodeBase64 } from '@progress/kendo-file-saver';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.component.html',
  styleUrls: ['./generate-qr.component.css']
})
export class GenerateQRComponent implements OnInit {
  myForm!: FormGroup;
  imagenes: any[] = [];



  constructor(private qrService: QRService,
    private router: Router,) { }
  ngOnInit(): void {
    this.myForm = new FormGroup({
      countQR: new FormControl([Validators.required, Validators.min(1), Validators.max(100)]),
    });
  }

  get f() { return this.myForm.controls; }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      forkJoin({
        // listHolidayCountry: this.qrService.get(123),
        list: this.qrService.generate(form.value.countQR),
      }).subscribe(data => {
        const jszip = new JSZip();
        for (let i = 0; i < data.list.length; i++) {
          var binary = atob(data.list[i].fileContents);
          var array = [];

          for (let j = 0; j < binary.length; j++) {
            array.push(binary.charCodeAt(j));
          }

          let image = new Blob([new Uint8Array(array)], { type: data.list[i].contentType });

          jszip.file(`${data.list[i].fileDownloadName}.png`, image)

          if (i === (data.list.length - 1)) {
            jszip.generateAsync({ type: 'blob' }).then(function (content) {
              // see FileSaver.js
              saveAs(content, 'QRs.zip');
            });
          }
        }
      });
      // Procesa el número aquí
      console.log('Número ingresado:', form.value.countQR);
    }
  }
}
