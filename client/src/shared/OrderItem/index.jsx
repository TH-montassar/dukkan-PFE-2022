import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { parseISO, format } from "date-fns";
import Spinner from "../Spinner";
import { useSelector, useDispatch } from "react-redux";
import OrderAction from "./OrderAction";
const OrderItem = () => {
  let [isOpen, setIsOpen] = useState(false);

  const { orders, isLoading } = useSelector((state) => state.orderReducers);
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <OrderAction isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      <table className=" w-full m-auto bg-white">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>address</th>
            <th>date of order</th>
            <th>update date</th>
            <th>prix total</th>
            <th>prix total with tax</th>
            <th>tax Percentage</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody className="">
          <Disclosure>
            {({ open }) =>
              orders.orders?.length > 0 &&
              orders.orders.slice(0, 10).map((order) => (
                <Fragment key={order._id}>
                  <tr
                    className="border-gray border-t " 
                  >
                    <td className="text-slate-500 hover:text-black">
                      {order._id}
                    </td>
                    <td>
                      {order.customer.lastName} {order.customer.firstName}
                    </td>
                    <td className=" flex flex-wrap flex-row gap-1">
                      <div>
                        {order.address.country},{order.address.city}
                      </div>
                      <div>
                        {order.address.street},{order.address.zipCode}
                      </div>
                    </td>
                    <td> {format(parseISO(order.createdAt), "P")}</td>
                    <td>{format(parseISO(order.updatedAt), "P")}</td>
                    <td>{order.totalPrice} TND</td>
                    <td>{order.totalPriceWithTax} TND</td>
                    <td>{order.taxPercentage} </td>
                    <td className="cursor-pointer" onClick={() => setIsOpen(true)}>
                      {order.status === "pending" ? (
                        <div className="text-Warning">{order.status}</div>
                      ) : order.status === "canceled" ? (
                        <div className="text-danger">{order.status}</div>
                      ) : order.status === "confirmed" ? (
                        <div className="text-Success">{order.status}</div>
                      ) : (
                        <div>{order.status}</div>
                      )}
                    </td>
                    <td>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-info`}
                        />
                      </Disclosure.Button>
                    </td>
                  </tr>
                  <tr colSpan="2">
                    <Disclosure.Panel colSpan="2" className=" ">
                      {order.items.length > 0 &&
                        order.items.map((product) => {
                          return (
                            <div className="font-medium	 grid grid-flow-col gap-7 sm:grid-flow-row w-[80%] items-center  mx-auto">
                              <p>product:{product.product?.title}</p>
                              <p>price: {product.price}</p>
                              <p>quantity :{product.quantity}</p>
                              <p>total: {product.total}</p>
                            </div>
                          );
                        })}
                    </Disclosure.Panel>
                  </tr>
                </Fragment>
              ))
            }
          </Disclosure>
        </tbody>
      </table>
    </div>
  );
};

export default OrderItem;
