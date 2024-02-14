/* eslint-disable no-unused-vars */
import PageTitle from "../../components/title/page.title";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, onChangeQuantity } from "../../store/cart/cart.store";
import SecondaryButton from "../../components/buttons/secondaryButton";
import OrderSummery from "./components/order.summery";
import { useEffect, useState } from "react";
import CartCard from "./components/cart.card";
import QuantityInput from "../../components/inputs/quantity.input";
import CartEmpty from "./components/cart.empty";
import CartLocation from "./components/cart.location";
import CartOrder from "./components/cart.order";
import { useAuth } from "../../Auth";

export default function CartPage() {
  const dispatch = useDispatch();
  const auth = useAuth();
  const products = useSelector((state) => state.cart) || [];

  const initialChecked = localStorage.getItem("isCheckedOut") || false;
  const initialConfirm = localStorage.getItem("isConfirmed") || false;

  const [isCheck, set_is_checked] = useState(initialChecked);
  const [isConfirm, set_is_Confirm] = useState(initialConfirm);

  const totalPrice = products.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const tax = Number(totalPrice * 0.1);
  const delivery = Number(totalPrice * 0.05);

  const handleCheckedOut = () => {
    set_is_checked(true);
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteCartItem(itemId));
  };

  useEffect(() => {
    localStorage.setItem("isCheckedOut", isCheck);
  }, [isCheck]);

  useEffect(() => {
    localStorage.setItem("isConfirmed", isConfirm);
  }, [isConfirm]);

  console.log(isCheck, isCheck, auth.user.length !== 0);

  return (
    <>
      <PageTitle title={"Cart"} />
      {auth.user.length !== 0 && isConfirm && isCheck ? (
        <CartOrder />
      ) : (
        <section className="cart__content md:py-16 py-10 shadow-md">
          {products.length === 0 ? (
            <CartEmpty />
          ) : (
            <>
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
                  isCheck={!isCheck}
                  checkoutButton={
                    !isCheck && (
                      <div className="mt-2 flex justify-center items-center">
                        <SecondaryButton onClick={handleCheckedOut} text={"Checkout"} />
                      </div>
                    )
                  }
                />
              </div>
              <CartLocation
                onClick={() => set_is_Confirm(true)}
                confirm={isConfirm}
                checked={isCheck}
              />
            </>
          )}
        </section>
      )}
    </>
  );
}
