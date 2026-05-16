import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Category, Item } from './models';
import { ItemService } from './services';

@Component({
  selector: 'app-item-manager',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './item-manager.component.html',
  styleUrl: './item-manager.component.css',
})

export class ItemManagerComponent implements OnInit {
  form: FormGroup;
  categories: Category[] = [];
  items: Item[] = [];
  displayedColumns: string[] = ['itemId', 'itemName', 'itemQuantity', 'categoryName'];

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this.formBuilder.group({
      itemName: ['', Validators.required],
      itemQuantity: [null, [Validators.required, Validators.min(1)]],
      categoryId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadCategories();
    this.loadItems();
  }

  loadCategories(): void {
    this.itemService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.cdr.detectChanges();
      },
    });
  }

  loadItems(): void {
    this.itemService.getItems().subscribe({
      next: (data) => {
        this.items = data;
        this.cdr.detectChanges();
      },
    });
  }

  onSave(): void {
    if (this.form.invalid) return;

    this.itemService.saveItem(this.form.value).subscribe({
      next: () => {
        this.loadItems();
        this.onClear();
      },
    });
  }

  onClear(): void {
    this.form.reset();
  }
}
