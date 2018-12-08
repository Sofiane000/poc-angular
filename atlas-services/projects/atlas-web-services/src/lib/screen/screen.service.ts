import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum DeviceType {
    Phone,
    Tablet,
    Desktop,
}

export class DeviceSize {
    width;
    height;
}

@Injectable({
    providedIn: 'root',
})
export class ScreenService {
    private lastDeviceType;

    private isPhone;
    private isTablet;
    private isPhoneDesktop;

    public onDeviceTypeChange: BehaviorSubject<DeviceType> = new BehaviorSubject(
        DeviceType.Desktop
    );

    public onScreenResize: BehaviorSubject<DeviceSize> = new BehaviorSubject({
        width: 0,
        height: 0,
    });

    constructor() {
        this.isPhone = window.matchMedia('(max-width: 767.98px)');
        this.isTablet = window.matchMedia('(min-width: 768px) and (max-width: 991.98px)');
        this.isPhoneDesktop = window.matchMedia('(min-width: 992px)');
        this.publishResize();
        this.publishDeviceType();
        this.listenForResize();
    }

    private listenForResize() {
        let timeout;
        // Listen for resize events
        window.addEventListener(
            'resize',
            () => {
                // If there's a timer, cancel it
                if (timeout) {
                    window.cancelAnimationFrame(timeout);
                }
                // Setup the new requestAnimationFrame()
                timeout = window.requestAnimationFrame(() => {
                    this.publishResize();
                    this.publishDeviceType();
                });
            },
            false
        );
    }

    private publishResize() {
        this.onScreenResize.next({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    private publishDeviceType() {
        let deviceType;
        if (this.isPhone.matches) {
            deviceType = DeviceType.Phone;
        } else if (this.isTablet.matches) {
            deviceType = DeviceType.Tablet;
        } else if (this.isPhoneDesktop.matches) {
            deviceType = DeviceType.Desktop;
        }
        if (deviceType !== this.lastDeviceType) {
            this.onDeviceTypeChange.next(deviceType);
            this.lastDeviceType = deviceType;
        }
    }
}
