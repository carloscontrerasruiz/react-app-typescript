import { ProductCard } from "../components/ProductCard";
import { ProductButtons } from "../components/ProductCard/childComponents/ProductButtons";
import { ProductImage } from "../components/ProductCard/childComponents/ProductImage";
import { ProductTitle } from "../components/ProductCard/childComponents/ProductTitle";

const product = {
  id: "1",
  title: "Producto",
  img: "./coffee-mug.png",
};
const product1 = {
  id: "1",
  title: "Producto",
};
export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Se puede mandar desde aqui" />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
