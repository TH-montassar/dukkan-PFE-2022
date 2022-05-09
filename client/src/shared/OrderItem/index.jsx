import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { parseISO, format } from "date-fns";
import Spinner from "../Spinner";
import { useSelector, useDispatch } from "react-redux";
const OrderItem = () => {
  const { orders, isLoading } = useSelector((state) => state.orderReducers);
  return isLoading ? (
    <Spinner />
  ) : (
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

      <Disclosure>
        {({ open, index }) =>
          orders.orders?.length > 0 &&
          orders.orders.slice(0, 10).map((order) => (
            <tbody key={order._id} className="">
              <tr className="border-gray border-t ">
                <td className="text-slate-500 hover:text-black">{order._id}</td>
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
                <td>{order.status}</td>
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
                        <div className="grid grid-flow-col gap-7 sm:grid-flow-row w-[80%] items-center  mx-auto">
                          <p>product:{product.product?.title}</p>
                          <p>price: {product.price}</p>
                          <p>quantity :{product.quantity}</p>
                          <p>total: {product.total}</p>
                        </div>
                      );
                    })}
                </Disclosure.Panel>
              </tr>
            </tbody>
          ))
        }
      </Disclosure>
    </table>
  );
};

export default OrderItem;
