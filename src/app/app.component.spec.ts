import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { QuantityCheckerComponent } from './components/table/quantity-checker/quantity-checker.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				TableComponent,
				QuantityCheckerComponent
			],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});
});
