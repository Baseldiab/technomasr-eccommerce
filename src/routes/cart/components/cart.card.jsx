/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { deleteCartItem } from "../../../store/cart/cart.store";
import { useDispatch } from "react-redux";

export default function CartCard(props) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="col-span-1 flex justify-center items-center"
        style={{
          filter: "brightness(0.8)",
          backgroundColor: "#fff",
        }}
      >
        <Link
          className="col-span-1 card__img-link img-container p-2 mx-auto "
          to={`/products/productId=${props.id}`}
        >
          <img
            className="block rounded-l-2xl mx-auto w-auto max-w-[100%] !h-[160px]"
            src={props.image}
            alt={props.title}
          />
        </Link>
      </div>
      <div className="col-span-2 card-content flex justify-start items-start p-4 flex-col ">
        <h5 className="text-xl text-primary font-medium mb-3">{props.title}</h5>
        <div className="flex justify-between items-center w-full my-4">
          <span className="text-primary font-medium">{props.price}</span>
          <div className="flex justify-center items-center">
            <span className="text-primary">{props.quantityInput}</span>
            <Button
              variant={"outlined"}
              className=" bg-primary hover:bg-sky-700 !min-w-[20px] !p-0  rounded-md "
              onClick={() => dispatch(deleteCartItem(props.id))}
            >
              <DeleteIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
