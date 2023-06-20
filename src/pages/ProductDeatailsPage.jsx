import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDeatails from "../components/Product/ProductDeatails";
import SuggestedProduct from "../components/Product/SuggestedProduct";
import { productData } from "../static/data";

const ProductDeatailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");
  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
  }, [productName]);
  return (
    <div>
      <Header />
      <ProductDeatails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDeatailsPage;
