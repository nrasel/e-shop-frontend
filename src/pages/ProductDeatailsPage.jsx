import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDeatails from "../components/Product/ProductDeatails";
import SuggestedProduct from "../components/Product/SuggestedProduct";

const ProductDeatailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);

  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const data = allProducts && allProducts.find((i) => i._id === id);
    setData(data);
  }, [allProducts, id]);
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
