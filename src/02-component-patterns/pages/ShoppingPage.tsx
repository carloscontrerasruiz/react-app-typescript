import { ProductCard } from "../components/ProductCard";
import { ProductButtons } from "../components/ProductCard/childComponents/ProductButtons";
import { ProductImage } from "../components/ProductCard/childComponents/ProductImage";
import { ProductTitle } from "../components/ProductCard/childComponents/ProductTitle";
import "../styles/custom-styles.css";

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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="Se puede mandar desde aqui" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard
          product={product1}
          style={{
            backgroundColor: "blue",
          }}
        >
          <ProductCard.Image />
          <ProductCard.Title style={{ color: "red" }} />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
