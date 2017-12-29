/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EditEntityComponent } from './edit-entity.component';

let component: EditEntityComponent;
let fixture: ComponentFixture<EditEntityComponent>;

describe('edit-entity component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditEntityComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EditEntityComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});