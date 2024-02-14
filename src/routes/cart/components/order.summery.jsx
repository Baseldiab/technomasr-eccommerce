/* eslint-disable react/prop-types */

export default function OrderSummery(props) {
  return (
    <div className="border col-span-2 border-gray-400 rounded-md  bg-white max-w-[480px] min-w-[300px] py-4 px-8">
      <h5 className="text-center font-medium text-primary">Order summery</h5>
      {/* CART TOTAL PRODUCTS PRICE */}
      <div className="flex justify-between items-center my-2">
        <span className="">Cart total</span>
        <span className="">{Number(props.totalPrice).toFixed(2)} $</span>
      </div>

      {/* TAX PRICES */}
      <div className="flex justify-between items-center my-2">
        <span className="">Tax</span>
        <span className="">{props.tax.toFixed(2)} $</span>
      </div>

      {/* DELIVERY PRICE */}
      <div className="flex justify-between items-center my-2">
        <span className="">Delivery</span>
        <span className="">{props.delivery.toFixed(2)} $</span>
      </div>

      <hr className="h-0.5 bg-gray-300 my-4" />

      {/* TOTAL PRICE */}
      <div className="flex justify-between items-center my-2">
        <span className="">Total</span>
        <span className="text-primary font-medium">
          {Number(props.totalPrice + props.tax + props.delivery).toFixed(2)} $
        </span>
      </div>

      {props.checkoutButton}
    </div>
  );
}
