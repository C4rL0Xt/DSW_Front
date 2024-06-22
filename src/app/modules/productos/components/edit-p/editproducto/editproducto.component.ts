import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/product-service/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editproducto',
  templateUrl: './editproducto.component.html',
  styleUrl: './editproducto.component.css'
})
export class EditproductoComponent implements OnInit {
  productForm: FormGroup;
  totalQuantity: number;
  lots: FormGroup[] = [];

  constructor(private fb: FormBuilder, private productService: ProductoService, private snackBar: MatSnackBar) {
    this.productForm = this.fb.group({
      codigo: [{ value: 'AUTO_GENERATED_CODE', disabled: true }],
      name: ['', Validators.required],
      category: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      weight: ['', [Validators.required, Validators.min(0)]],
      presentation: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    /*
    this.productService.selectedProduct$.subscribe(product => {
      this.productForm.patchValue(product);
    });
    */
  }

  modifyProduct() {
    // Submit the form to update the product
    this.snackBar.open('Product updated successfully!', 'Close', {
      duration: 2000,
    });
  }

  addLots() {
    // Open a dialog to enter the quantity and generate lot forms
    // Assuming we have logic to handle lot generation
    if (this.productForm.valid && this.lots.every(lot => lot.valid)) {
      const productData = this.productForm.getRawValue();
      const lotsData = this.lots.map(lot => lot.getRawValue());
      console.log('Product Data:', productData);
      console.log('Lots Data:', lotsData);

      // Show success notification
      this.snackBar.open('Product and batches saved successfully!', 'Close', {
        duration: 3000,
        panelClass: ['snack-bar-success'],
        verticalPosition: 'top', // You can also set 'bottom'
        horizontalPosition: 'center', // You can also set 'start', 'end', or 'left', 'right'
      });
    }
  }

  generateLots(): void {
    this.lots = [];
    const totalLots = Math.ceil(this.totalQuantity / 200);
    const productName = this.productForm.get('name').value;

    for (let i = 0; i < totalLots; i++) {
      const quantity = (i === totalLots - 1 && this.totalQuantity % 200 !== 0) ? this.totalQuantity % 200 : 200;
      this.lots.push(this.fb.group({
        code: ['', Validators.required],
        operationalStatus: ['', Validators.required],
        availabilityStatus: ['', Validators.required],
        securityStatus: ['', Validators.required],
        productName: [{ value: productName, disabled: true }],
        quantity: [{ value: quantity, disabled: true }, [Validators.required, Validators.min(1), Validators.max(200)]],
        expirationDate: ['', Validators.required]
      }));
    }
  }
}
