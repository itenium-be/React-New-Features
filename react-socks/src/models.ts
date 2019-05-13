export interface SockModel {
  id: number;
  name: string;
  brand: string; // used for the image uri
  price: number;
  variants: SockVariantModel[];
  inventory: number;
  reviews: SockReviewModel[];
}

export interface SockVariantModel {
  id: number;
  color: string; // used for the image uri
  fancyColor: string; // color-box background color
}


export interface SockReviewModel {
  name: string;
  rating: number;
  fullReview: string;
}


export interface CartModel {
  sock: SockModel;
  variant: SockVariantModel;
}