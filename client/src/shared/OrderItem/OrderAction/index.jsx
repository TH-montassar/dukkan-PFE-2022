import React from "react";
import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";

const OrderAction = ({ isOpen, closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <Dialog
        open={isModalOpen}
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center  bg-secondary-dark bg-opacity-50">
          <Dialog.Overlay className="fixed inset-0" />

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-secondary shadow-xl rounded-2xl font-roboto">
            <Dialog.Title as="h3" className="text-primary font-bold text-2xl">
              Set product info
            </Dialog.Title>
            <div>dddd</div>

            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={closeModal}
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default OrderAction;
