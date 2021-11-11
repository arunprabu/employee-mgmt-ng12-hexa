import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // Step 1: have the default cart items in the cart 
  // We will normally load this from REST API 
  // but now mocking it with static data
  private defaultCartItems: any[] = [
    {
      id: 3,
      name: 'Orange',
      category: 'Fruits',
      price: '$4.85'
    }
  ];

  constructor() { }
}
