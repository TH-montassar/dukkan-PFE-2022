import React, { useEffect } from "react";
import { MyOrders } from "../../../../redux/Actions/order.action";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../shared/Spinner";
import "./index.css";
import { parseISO, format } from "date-fns";
const Orders = () => {
  const { isAuthenticated, user } = useSelector((state) => {
    return state.authReducers;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    // if (isAuthenticated) {
    //   dispatch(MyOrders());
    // }
    dispatch(MyOrders());
  }, [isAuthenticated]);
  const { orders, isLoading } = useSelector((state) => state.orderReducers);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="w-full h-full">
      <div className=" flex justify-between pt-5 px-5 sm:flex-col text-3xl md:text-2xl">
        <h1 className=" "> Order History</h1>
        <h1 className=" "> number of orders :{orders.length}</h1>
      </div>

      <div className=" w-full px-3 grid grid-flow-col justify-around pt-10 text-2xl font-semibold">
        <div className="pr-28"> ID</div>
        <div>DATE</div>
        <div>TOTAL</div>
        <div>WITH TAX</div>
        <div>STATUS</div>
        <div>ADDRESS</div>
        <div>STORE</div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {orders.orders?.length > 0 &&
          orders.orders.map((order) => (
            <div className="w-[90%] pb-10 border-t 	border-gray-700	 ">
              <div className="grid grid-flow-col justify-between items-center font-medium	 ">
                <td>{order._id}</td>
                <td> {format(parseISO(order.createdAt), "P")}</td>
                <td>{order.totalPrice} TND</td>
                <td>{order.totalPriceWithTax} TND</td>
                <td>{order.status}</td>
                <td className="grid grid-flow-col grid-rows-2	">
                  <div>
                    {order.address.country},{order.address.city}
                  </div>
                  <div>
                    {order.address.street},{order.address.zipCode}
                  </div>
                </td>

                <td>{order.store.title}</td>
              </div>

              <div className="pt-5 grid grid-flow-row sm:grid-flow-row w-[80%] items-center justify-center mx-auto">
                {order.items.length > 0 &&
                  order.items.map((product) => {
                    return (
                      <div className="grid grid-flow-col gap-7 ">
                        <p>
                          product: <span>{product.product?.title} </span>
                        </p>
                        <p>
                          price: <span>{product.price} </span>
                        </p>
                        <p>
                          quantity : <span>{product.price} </span>
                        </p>
                        <p>
                          total : <span>{product.total} </span>{" "}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Orders;
