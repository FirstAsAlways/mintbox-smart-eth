import React from "react";

const MessageBox = (props) => {
  return (
    <React.Fragment>
      <div
        className={
          "absolute top-0 left-0 z-10 h-full w-full flex flex-col justify-center items-center bg-gray-800 bg-opacity-50" +
          (props.show ? " block" : " hidden")
        }
      >
        <div className="w-fit bg-white rounded-lg p-10 text-2xl text-center min-w-[360px]">
          <div className="mb-10 font-bold">{props.children}</div>
          <button
            className="w-full border-4 border-black rounded-lg px-5 py-3 text-xl font-bold"
            onClick={props.onOkClick}
          >
            OK
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MessageBox;
