import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityCheckerComponent } from './quantity-checker.component';

describe('QuantityCheckerComponent', () => {
	let component: QuantityCheckerComponent;
	let fixture: ComponentFixture<QuantityCheckerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [QuantityCheckerComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(QuantityCheckerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('danger class', () => {
		it('should be added when quantity variable is less than 5', () => {
			component.quantity = 4;
			fixture.detectChanges();
			const element: HTMLElement = fixture.debugElement.nativeElement.querySelector('.danger');
			expect(element.classList).toBeTruthy();
		});

		it('should not be added when quantity variable is greater than or equal 5', () => {
			component.quantity = 5;
			fixture.detectChanges();
			const element: HTMLElement = fixture.debugElement.nativeElement.querySelector('.danger');
			expect(element).toBeNull();
		});
	});
});
