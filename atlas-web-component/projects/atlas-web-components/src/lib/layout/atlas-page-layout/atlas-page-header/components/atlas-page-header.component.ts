import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'atlas-page-header',
    templateUrl: './atlas-page-header.component.html',
    styleUrls: ['./atlas-page-header.component.scss'],
})
export class AtlasPageHeaderComponent {
    @Input()
    backGroundColor = '#1F93A1';
    @Input()
    fontSize = 'x-large';
    @Input()
    textAlign = 'left';
    @Input()
    title = 'Page Header';
    @Input()
    color = 'white';
    @Input()
    showBackBtn = false;
    @Output()
    goBack: EventEmitter<any> = new EventEmitter<any>();
    
  onGoBack(event) {
        this.goBack.emit(event);
    }
}
