import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loading from "../../../components/loading";
import { Breadcrumbs, Typography } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { addToCart } from "../../../store/cart/cart.store";
import { addToWish } from "../../../store/wish/wish.store";

// Import addToWish action and useAuth hook if necessary

export default function ProductDetailsPage() {
  const isLoading = useSelector((state) => state.home.loading);
  const params = useParams();
  const dispatch = useDispatch();
  const filterParams = params.productId.match(/\d+/g).map(Number);
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${filterParams}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [filterParams]);

  const handleAddToWish = () => {
    // Define addToWish action and useAuth hook properly
    // if (auth.user.length) {
    dispatch(addToWish(singleProduct));
    // } else {
    //   Swal.fire({
    //     title:
    //       "<strong>SIGN IN TO SYNC YOUR SAVED ITEMS ACROSS ALL YOUR DEVICES</strong>",
    //     icon: "warning",
    //     showCloseButton: true,
    //     showCancelButton: true,
    //     focusConfirm: false,
    //     confirmButtonText: "<a class= 'text-light' href='/login' >LOGIN</a>",
    //     confirmButtonAriaLabel: "Thumbs up, great!",
    //     cancelButtonText: "CONTINUE SHOPPING",
    //     cancelButtonAriaLabel: "Thumbs down",
    //   });
    // }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="my-3 container">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" className="border-b border-black" color="inherit" to="/">
                Home
              </Link>
              <Link
                underline="hover"
                className="border-b border-black"
                color="inherit"
                to="/products"
              >
                Products
              </Link>
              <Typography color="text.primary">{singleProduct.title}</Typography>
            </Breadcrumbs>
          </div>

          <div className=" md:py-16 py-10 shadow-md">
            <div className="container grid md:grid-cols-3 grid-col-1 items-start md:gap-10">
              <div
                className="col-span-1 p-4 rounded-lg"
                style={{
                  filter: "brightness(0.8)",
                  backgroundColor: "#fff",
                }}
              >
                <img src={singleProduct.image} className="w-full" alt={singleProduct.title} />
              </div>
              <div className="col-span-2">
                <h1 className="singleProduct__name font-bold text-xl md:text-2xl text-capitalize">
                  {singleProduct.title}
                </h1>
                <h4 className="singleProduct__price font-medium my-4">
                  ${Number(singleProduct.price).toFixed(2)}
                </h4>
                <p className="singleProduct__availability text-gray-600 my-2">In Stock</p>
                <div className="singleProduct__description my-4">
                  <h4 className="singleProduct__description-head my-2 text-capitalize">
                    Description
                  </h4>
                  <p className="singleProduct__description-text text-gray-600">
                    {singleProduct.description}
                  </p>
                </div>
                <div className="singleProduct__buttons my-4">
                  <button
                    className="main-button add-cart add-cart-singleProduct me-2 my-1 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => dispatch(addToCart(singleProduct))}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="main-button add-wish add-cart-singleProduct me-2 my-1 px-4 py-2 border border-blue-500 text-blue-500 rounded"
                    title="you must login first to add to wish"
                    onClick={handleAddToWish}
                  >
                    Add to Wish
                  </button>
                </div>
                <figure className="singleProduct__trustSeal border-b border-gray-500 py-2 my-2">
                  <img className="my-3" src={"/images/trustseal_499x.gif"} alt="trustSeal_image" />
                </figure>
                <div className="singleProduct__meta">
                  <p className="text-capitalize text-gray-600">
                    <span className="font-medium">Vendor:</span> alwaan
                  </p>
                  <p className="text-uppercase text-gray-600">
                    <span className="font-medium">SKU:</span> N/A
                  </p>
                  <div className="text-capitalize text-gray-600 flex justify-start items-center">
                    <span className="font-medium">Share:</span>
                    <div className="flex justify-between items-center  mx-2">
                      <a href="https://twitter.com/">
                        <XIcon className=" text-primary !text-base" />
                      </a>
                      <a href="https://www.facebook.com/">
                        <FacebookIcon className="mx-3 text-primary !text-base" />
                      </a>
                      <a href="https://www.instagram.com/">
                        <InstagramIcon className=" text-primary !text-base" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
