import { Component, OnInit } from '@angular/core';
import { Platform, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss'],
})
export class PwaComponent implements OnInit {

  isAndroid = this.platform.is('android');
  isIPhone = this.platform.is('iphone');

  constructor(
    private platform: Platform,
    private popoverController: PopoverController
  ) { }

  ngOnInit() { }

  close() {
    this.popoverController.dismiss();
  }
}
