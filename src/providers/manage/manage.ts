import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Respuesta } from '../../pages/home/home';
/*
  Generated class for the ManageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ManageProvider {
 
 

  constructor(public http: Http) {
    console.log('Hello ManageProvider Provider');
  }
  saveImage(image, idempleado): Respuesta {

    var url = "http://ctrlztest.com.ar/unilever/api/guardarfoto.php";

    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
    const requestOptions = new RequestOptions({ headers: headers });

    var body = {
      idempleado: idempleado, 
      foto: image
    };

    var senderBody = JSON.stringify(body);


    
    let req = this.http.post(url, senderBody, requestOptions);
    let ble;
    req.subscribe((res) => {
      ble = res;
      console.log(res)
    }, (err) => {
      ble = err;

      console.log(err);
    })
    return {envio: senderBody, result: ble};
  }
}

