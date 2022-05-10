import React, { useEffect } from "react";
import { MyOrders } from "../../../../redux/Actions/order.action";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../shared/Spinner";
import "./index.css";
import { parseISO, format } from "date-fns";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";
const Orders = () => {
  const { isAuthenticated, user } = useSelector((state) => {
    return state.authReducers;
  });
  const dispatch = useDispatch();
  useEffect(() => {
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

      <div className=" w-full px-3 grid grid-flow-col justify-around py-10 text-xl font-semibold">
        <div className="pr-36"> ID</div>
        <div>DATE</div>
        <div>TOTAL</div>
        <div>WITH TAX</div>
        <div>STATUS</div>
        <div>ADDRESS</div>
        <div>STORE</div>
      </div>

      <Disclosure>
        {({ open }) =>
          orders.orders?.length > 0 &&
          orders.orders.map((order) => (
            <div
              key={order._id}
              className="w-[90%] 	border-gray pb-10 flex flex-col justify-center items-center border-t mx-auto "
            >
              <Disclosure.Button className="grid grid-flow-col gap-10 items-center font-medium	 ">
                <td>{order._id}</td>
                <td> {format(parseISO(order.createdAt), "P")}</td>
                <td>{order.totalPrice} TND</td>
                <td>{order.totalPriceWithTax} TND</td>
                <td>
                  <div className="cursor-pointer  select-none py-1.5 rounded-md transition	duration-300		 	hover:scale-95 ">
                    {order.status === "pending" ? (
                      <div className="text-Warning ">{order.status}</div>
                    ) : order.status === "canceled" ? (
                      <div className="text-danger">{order.status}</div>
                    ) : order.status === "confirmed" ? (
                      <div className="text-info">{order.status}</div>
                    ) : (
                      <div className="text-Success">{order.status}</div>
                    )}
                  </div>
                </td>
                <td className="grid grid-flow-col grid-rows-2">
                  <div>
                    {order.address.country},{order.address.city}
                  </div>
                  <div>
                    {order.address.street},{order.address.zipCode}
                  </div>
                </td>

                <td>{order.store.title}</td>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-info`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="pt-5 grid grid-flow-row sm:grid-flow-row w-[80%] items-center justify-center mx-auto">
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
                          quantity : <span>{product.quantity} </span>
                        </p>
                        <p>
                          total : <span>{product.total} </span>{" "}
                        </p>
                      </div>
                    );
                  })}
              </Disclosure.Panel>
            </div>
          ))
        }
      </Disclosure>
    </div>
  );
};

export default Orders;
