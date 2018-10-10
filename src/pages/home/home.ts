import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ManageProvider } from '../../providers/manage/manage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private manage: ManageProvider) {

  }

  hacer() {
    this.convertToDataURLviaCanvas('https://thumbs2.ebaystatic.com/d/l225/m/meq1dL2LagH7im1peY0JtkQ.jpg', "image/jpg")
      .then(base64Img => {
        this.manage.saveImage(2, base64Img);
      })
  }

  convertToDataURLviaCanvas(url, outputFormat) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        let canvas = <HTMLCanvasElement>document.createElement('CANVAS'),
          ctx = canvas.getContext('2d'),
          dataURL;
        canvas.height = 300;
        canvas.width = 300;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        //callback(dataURL);
        canvas = null;
        resolve(dataURL);
      };
      img.src = url;
    });
  }
}
