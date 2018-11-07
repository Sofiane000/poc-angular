import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[color]'
})
export class AtlasColorDirective implements AfterViewInit {
    @Input()
    color: any;
    constructor(private elRef: ElementRef) {
    }
    ngAfterViewInit(): void {
        this.elRef.nativeElement.style.backgroundColor = this.color;
    }
}
