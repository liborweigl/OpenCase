/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PresentEntityComponent } from './present-entity.component';

let component: PresentEntityComponent;
let fixture: ComponentFixture<PresentEntityComponent>;

describe('present-entity component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PresentEntityComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PresentEntityComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});