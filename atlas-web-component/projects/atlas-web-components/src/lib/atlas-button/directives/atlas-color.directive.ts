import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[color]',
})
export class AtlasColorDirective implements AfterViewInit {
    @Input()
    color: any;

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit(): void {
        this.elRef.nativeElement.style.backgroundColor = this.color;
    }
}
