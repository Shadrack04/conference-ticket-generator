import React from "react";
import uploadIcon from "../assets/images/icon-upload.svg";
import infoIcon from "../assets/images/icon-info.svg";

function UploadAvatar() {
  return (
    <div>
      <h3 className=" text-[#fff] font-Inconsolata text-xl">Upload Avatar</h3>
      <DragDrop />
      <p className=" flex gap-1 text-[#fff] font-Inconsolata text-xs text-[#ffffff9a]">
        <span>
          <img src={infoIcon} alt="" />
        </span>
        Upload your photo (JPG or PNG, max size: 500KB).
      </p>
    </div>
  );
}

function DragDrop() {
  return (
    <div className=" my-2 bg-[#81797931] border-dashed border-[#ffffff6f] border-2 h-32 w-70 rounded-md flex flex-col items-center justify-between p-4">
      <div className=" p-3 bg-[#524b4b5d] rounded-md">
        <img className=" h-8 w-8" src={uploadIcon} alt="upload icon" />
      </div>
      <p className=" text-[#fff] font-Inconsolata">
        Drag and drop or click to upload
      </p>
    </div>
  );
}

export default UploadAvatar;
