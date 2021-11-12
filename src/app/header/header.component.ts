import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../shared/services/cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', // html
  styleUrls: ['./header.component.css'] // css
})
export class HeaderComponent implements OnInit {

  cartItemsCount = 0;

  constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cartDataService.latestCartItemsList.subscribe( (cartItems: any) => {
      console.log(cartItems);
      if(cartItems && cartItems.length > 0 ){
        this.cartItemsCount = cartItems.length;
      }
    });
  }

}
