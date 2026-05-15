export interface Category {
  categoryId: number;
  categoryName: string;
}

export interface Item {
  itemId: number;
  itemName: string;
  itemQuantity: number;
  category: Category;
}

export interface ItemRequest {
  categoryId: number;
  itemName: string;
  itemQuantity: number;
}
