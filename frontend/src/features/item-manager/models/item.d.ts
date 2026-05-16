
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