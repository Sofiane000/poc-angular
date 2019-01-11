import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router } from '@angular/router';
import { ComponentCanDeactivate } from './component-candeactivate';

@Injectable({
    providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {
    constructor(private readonly location: Location, private readonly route: Router) {}
    
  canDeactivate(
        component: ComponentCanDeactivate,
        currentRoute: ActivatedRouteSnapshot
    ): boolean {
        if (!component.canDeactivate()) {
            const currentUrlTree = this.route.createUrlTree([], currentRoute);
            const currentUrl = currentUrlTree.toString();
            this.location.go(currentUrl);
            if (confirm('You have unsaved changes! If you leave, your changes will be lost.')) {
                (component as any).dialogRef.close();
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
}
