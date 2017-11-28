import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';

@NgModule({
    declarations: [
        ProductComponent,
        ProductDetailComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'products', component: ProductComponent },
            { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
        ])
    ],
    providers:[
        ProductService,
        ProductDetailGuard
    ]
})

export class ProductModule {

}