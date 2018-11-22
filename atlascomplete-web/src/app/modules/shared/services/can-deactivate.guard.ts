import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ComponentCanDeactivate } from '../components/component-can-deactivate';
import { Location } from '@angular/common';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {
    constructor(private readonly location: Location, private readonly route: Router) {

    }
    canDeactivate(component: ComponentCanDeactivate, currentRoute: ActivatedRouteSnapshot): boolean {

        if (!component.canDeactivate()) {
            const currentUrlTree = this.route.createUrlTree([], currentRoute);
            const currentUrl = currentUrlTree.toString();
            this.location.go(currentUrl);
            return confirm('You have unsaved changes! If you leave, your changes will be lost.');
        } else {
            return true;
        }
    }
}
