import { Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ComponentSecurity, ComponentSecurityService } from './component.security.service';

@Directive({
    selector: '[atlasSecurity]',
})
export class ComponentSecurityDirective implements OnChanges, OnDestroy {
    @Input() private atlasSecurity: string;
    private secChgSub;

    constructor(
        private readonly securityService: ComponentSecurityService,
        private element: ElementRef
    ) {
        this.secChgSub = securityService.securityChanged.subscribe(() => {
            this.enforceSecurity();
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.enforceSecurity();
    }

    ngOnDestroy() {
        this.secChgSub.unsubscribe();
    }

    enforceSecurity() {
        if (!this.atlasSecurity) {
            return; // component ID is not set - yet
        }
        const componentSecurity: ComponentSecurity = this.securityService.getSecurity(
            this.atlasSecurity
        );
        this.element.nativeElement.style.display = !componentSecurity.canRead ? 'none' : void 0;
    }
}
