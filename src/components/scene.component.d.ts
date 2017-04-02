/// <reference types="three" />
import { AfterContentInit } from '@angular/core';
import { Scene } from 'three';
import { PerspectiveCameraComponent } from './cameras';
export declare class SceneComponent implements AfterContentInit {
    camera: PerspectiveCameraComponent;
    pointLights: any;
    directionalLights: any;
    sphereComps: any;
    videoComps: any;
    textComps: any;
    ambientLights: any;
    mapComps: any;
    fog: any;
    scene: Scene;
    ngAfterContentInit(): void;
}
