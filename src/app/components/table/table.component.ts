import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent {

	@Input() data: IProduct[];
}
