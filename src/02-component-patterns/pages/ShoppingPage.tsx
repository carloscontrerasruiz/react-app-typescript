import { ProductCard } from "../components/ProductCard";
import { ProductButtons } from "../components/ProductCard/childComponents/ProductButtons";
import { ProductImage } from "../components/ProductCard/childComponents/ProductImage";
import { ProductTitle } from "../components/ProductCard/childComponents/ProductTitle";
import "../styles/custom-styles.css";
import { products, useShoppingCard } from "../hooks/useShoppingCard";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCard();

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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={(e) => onProductCountChange(e)}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart" style={{ width: "100px" }}>
        {Object.entries(shoppingCart).map((productInCart) => (
          <ProductCard
            key={productInCart[0]}
            product={productInCart[1]}
            className="bg-dark text-white"
            style={{ width: "100%" }}
            value={productInCart[1].count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
