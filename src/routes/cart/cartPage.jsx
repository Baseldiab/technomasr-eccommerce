/* eslint-disable no-unused-vars */
import PageTitle from "../../components/title/page.title";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, onChangeQuantity } from "../../store/cart/cart.store";
import SecondaryButton from "../../components/buttons/secondaryButton";
import OrderSummery from "./components/order.summery";
import { useEffect, useState } from "react";
import CartCard from "./components/cart.card";
import QuantityInput from "../../components/inputs/quantity.input";

export default function CartPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart) || [];
  // console.log(products);

  const [isCheck, set_is_checked] = useState(true);

  const totalPrice = products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  console.log(totalPrice);

  const tax = Number(totalPrice * 0.1);
  const delivery = Number(totalPrice * 0.05);

  const handleCheckedOut = () => {
    set_is_checked(false);
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteCartItem(itemId));
  };

  useEffect(() => {
    localStorage.setItem("isCheckedOut", isCheck);
  }, [isCheck]);

  return (
    <>
      <PageTitle title={"Cart"} />
      <section className="cart__content md:py-16 py-10 shadow-md">
        <div className="container grid md:grid-cols-5 grid-cols-1 gap-5  items-start md:gap-8">
          <div className="col-span-3 ">
            {products.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" border border-gray-400 rounded-md !min-w-[300px] bg-white grid grid-cols-3 justify-between mb-4"
                >
                  <CartCard
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={`${Number(item.price).toFixed(2)} $`}
                    quantityInput={
                      <div className="quantity-input">
                        <input
                          className="quantity-field !min-w-[20px] !p-0"
                          type="number"
                          id="quantity"
                          name="quantity"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(
                              onChangeQuantity({
                                productId: item.id,
                                qty: e.target.value,
                              })
                            )
                          }
                          // readOnly
                        />
                      </div>
                    }
                  />
                </div>
              );
            })}
          </div>
          {/* CART TOTAL PRICE */}
          <OrderSummery
            totalPrice={totalPrice}
            tax={tax}
            delivery={delivery}
            isCheck={isCheck}
            checkoutButton={
              isCheck && (
                <div className="mt-2 flex justify-center items-center">
                  <SecondaryButton onClick={handleCheckedOut} text={"Checkout"} />
                </div>
              )
            }
          />
        </div>
      </section>
    </>
  );
}
