import { useSelector } from "react-redux";
import MainCard from "../../components/cards/main.card";
import PageTitle from "../../components/title/page.title";

export default function WishPage() {
  const wishProducts = useSelector((state) => state.wish) || [];


  return (
    <>
      <PageTitle title={"Wishlist"} />
      <section className="wish__content py-6 shadow-md">


    <div className="container gap-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1">
  {wishProducts.map((product) => {
    return (
      <div key={product.id}>
        <MainCard
          id={product.id}
          image={product.image}
          title={product.title}
          category={product.category}
          price={product.price}
          description={product.description}
          isWishPage = {true}
        />
      </div>
    );
  })}
    </div >
      </section>
    </>
)
}


