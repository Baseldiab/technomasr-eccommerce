/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { deleteCartItem } from "../../../store/cart/cart.store";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function CartCard(props) {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCartItem(props.id));

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };

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
              onClick={handleDeleteItem}
            >
              <DeleteIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
