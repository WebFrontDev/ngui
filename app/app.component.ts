import { Component, enableProdMode, ViewChild } from '@angular/core';
// import { HTTP_PROVIDERS } from '@angular/http';
import {
  NguiOverlayManager,
  NguiPopupComponent,
  NguiMessagePopupComponent,
  NguiScrollableDirective
} from '@ngui/ngui';

@Component({
  selector: 'my-app',
  templateUrl: './app.tpl.html'
})
export class AppComponent {
  id: string = 's1';

  constructor(public overlayManager: NguiOverlayManager) {
    console.log('overlayManager', overlayManager);
    // NguiMapComponent['apiUrl'] = "https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM";
  }

  scrollTo(selector, parentSelector, horizontal) {
    console.log('selector', selector, parentSelector, horizontal);
    NguiScrollableDirective.scrollTo(
      selector,       // scroll to this
      parentSelector, // scroll within (null if window scrolling)
      horizontal       // is it horizontal scrolling
      //10              // distance from top or left
    );
  }

  arrayOfKeyValues: any[] =
    [{key:1, name:'Key One'}, {key:2, name:'Key Two'}, {key:3, name:'Key Three'}, {key:4, name:'Key Four'}];

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;

  openPopup(size, title) {
    this.popup.open(NguiMessagePopupComponent, {
      classNames: size,
      title: title,
      message: "This is message given using popup.open()"
    });
  }
  
}

