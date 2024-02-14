export default function CartOrder() {
  return (
    <div className="mx-auto   h-[70vh] w-[50%] min-w-[250px] max-w-[600px] bg-[#F3F3F3] ">
      <div className="text mx-auto py-5">
        <h2 className="text-primary text-center font-bold">Your order is on its way</h2>
        <h3 className="text-primary text-center font-medium">Thank you for contacting with us</h3>
      </div>
      <img
        className="mx-auto  min-w-[250px] max-w-[600px]"
        src="/images/Rectangle 479.png"
        alt="order on its way"
      />
    </div>
  );
}
