import React, { useState } from "react";
import profile from "../../../../assets/image/p2.jpg";
const PersonnelInformation = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(profile);
  return (
    <div className="w-full h-full flex flex-row justify-around p-5 items-center">
      <form className="w-1/2">fff</form>

      <div className="max-w-max relative">
        <img
          src={url}
          alt="..."
          className="shadow rounded-full   w-96 h-96 border-none "
        />

        <label
          htmlFor="image"
          className=" absolute bottom-10 left-1/4  flex flex-col items-center bg-info rounded-md text-white px-10 py-1 max-w-max"
        >
          <p> Upload image</p>
          <i className="fa-solid fa-upload"></i>
        </label>

        <input
          hidden
          type="file"
          name="image"
          id="image"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setUrl(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </div>
    </div>
  );
};

export default PersonnelInformation;
