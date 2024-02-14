import { useDispatch, useSelector } from "react-redux";
// import { selectStockList } from "../../../store/home/home.selector";
import { useEffect, useState } from "react";
import { fetchProducts, filterProducts, searchProducts } from "../../store/home/home.store";
import MainCard from "../../components/cards/main.card";
import Loading from "../../components/loading";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function ProductPage() {
  const products = useSelector((state) => state.home.products) || [];
  const isLoading = useSelector((state) => state.home.loading);

  const dispatch = useDispatch();

  const [categories, setCategory] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState("all");
  // const [searchQuery, setSearchQuery] = useState("");
  // const [offset, setOffset] = useState(6);

  const getCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };

  useEffect(() => {
    dispatch(fetchProducts());
    getCategory();
  }, [dispatch]);

  const filterProduct = (value) => {
    if (value === "all") {
      dispatch(fetchProducts());
    } else {
      dispatch(filterProducts(value));
    }
    // setSelectedCategory(value);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    // setSearchQuery(e.target.value);
    dispatch(searchProducts(e.target.value));
  };

  // const fetchMoreData = () => {
  //   setOffset((prevOffset) => prevOffset + 5);
  // };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section className="md:py-16 py-10 shadow-md">
            <div className="container grid lg:grid-cols-4 gap-5 items-start">
              {/* SIDE FILTERATION */}
              <div className="col-span-1 hidden lg:inline-block ">
                <h3 className="mb-2 font-bold text-xl">Categories</h3>
                <ul className="list-none">
                  <li
                    className="cursor-pointer d-flex justify-between text-capitalize my-1 font-medium items-center"
                    onClick={() => filterProduct("all")}
                  >
                    All
                  </li>
                  {categories.map((category) => {
                    return (
                      <li
                        key={category}
                        className="cursor-pointer font-medium d-flex justify-between text-capitalize my-1 items-center"
                        onClick={() => filterProduct(category)}
                      >
                        {category}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* PRODUCTS */}
              <div className="col-span-3">
                <div className="select-category md:mb-10 mb-4 flex sm:items-start sm:justify-between sm:flex-row  flex-col justify-start gap-5">
                  <FormControl
                    className="md:!w-64"
                    sx={{
                      m: 0,
                      minWidth: "250px !important",
                      maxWidth: "500px !important",
                      width: "40% !important",
                    }}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-search"
                      type={"search"}
                      onChange={handleInputChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="search"
                            onClick={handleInputChange}
                            onMouseDown={handleInputChange}
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="search"
                    />
                  </FormControl>

                  <h5 className="right-side__head my-1 text-primary font-medium text-base">
                    {products.length} product{products.length !== 1 ? "s" : ""} found
                  </h5>
                </div>

                <div className=" gap-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-col-1 ">
                  {products.slice(0, 8).map((product) => {
                    return (
                      <div key={product.id}>
                        <MainCard
                          id={product.id}
                          image={product.image}
                          title={product.title}
                          category={product.category}
                          price={product.price}
                          description={product.description}
                        />
                      </div>
                    );
                  })}
                  {/* <MainCard /> */}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
