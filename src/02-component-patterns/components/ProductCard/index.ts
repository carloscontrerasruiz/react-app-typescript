import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductTitle } from "./childComponents/ProductTitle";
import { ProductImage } from "./childComponents/ProductImage";
import { ProductButtons } from "./childComponents/ProductButtons";
// export { ProductButtons } from "./childComponents/ProductButtons";
// export { ProductImage } from "./childComponents/ProductImage";
// export { ProductTitle } from "./childComponents/ProductTitle";

export const ProductCard = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
