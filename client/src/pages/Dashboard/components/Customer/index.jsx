import React, { useState, useEffect } from "react";
import { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCustomerByCarts } from "../../../../redux/Actions/cart.action";

const Customer = () => {
  let [c, setC] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomerByCarts());
  }, []);
  const { carts } = useSelector((state) => {
    return state.cartReducers;
  });
  let customerNum = 0;

  return (
    <div className="pt-10">
      <div className="font-semibold"> customer {c}</div>
      <section>
        <table className=" w-[80%] m-auto">
          <thead className="pb-20">
            <tr>
              <th>Customer Name </th>
              <th>Address</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody className=" ">
            {carts.length > 0 &&
              carts.map((customer) => {
                return customer.carts.length > 0 ? (
                  <Fragment>
                    {(customerNum = customerNum + 1)}
                    <tr className=" bg-white transition  ease-in-out duration-500 hover:rounded-lg hover:scale-[1.02]  hover:border-b-2	 border-b-2 border-gray border-style:solid rounded-lg ">
                      <td className="flex flex-row justify-start	 items-center gap-1">
                        <div className=" w-14 h-14 sm:w-10 sm:h-10">
                          <img
                            className="rounded-full object-cover  w-full h-full"
                            src={customer?.profile.avatar}
                            alt="customerAvatar"
                          />
                        </div>
                        <div>
                          {customer?.firstName}
                          <pre></pre>
                          {customer?.lastName}
                        </div>
                      </td>
                      <td>
                        <div>
                          {customer.address.country},{customer.address.city}
                        </div>
                        <div>
                          {customer.address.street},{customer.address.zipCode}
                        </div>
                      </td>
                      <td>+216 {customer.number}</td>
                    </tr>
                  </Fragment>
                ) : (
                  <div></div>
                );
              })}
            {/* {setC(customerNum)} */}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Customer;
