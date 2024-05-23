import React, { useState } from "react";
import "./styles.scss";
import Text from "./Text";
import Image from "next/image";

function Present() {
  const [toggleText, setToggleText] = useState(false);
  const [reLoad, setReLoad] = useState(false);
  const [clickFalse, setClickFalse] = useState(false);

  const handleToggle = () => {
    setToggleText(true);
    setReLoad(true);
  };

  const handleReload = () => location.reload();

  const handleClick = () => setClickFalse(true);

  return (
    <>
      <div className="container-present">
        <div className="birthday-gift">
          <div className="gift">
            <input id="click" type="checkbox" />
            <label
              className="click"
              htmlFor="click"
              onClick={handleToggle}
            ></label>
            <div className="wishes">
              <Image src={"/pic.jpg"} width={137} height={140} alt="pic" />
            </div>
            <div className="sparkles">
              <div className="spark1"></div>
              <div className="spark2"></div>
              <div className="spark3"></div>
              <div className="spark4"></div>
              <div className="spark5"></div>
              <div className="spark6"></div>
            </div>
          </div>
          <div className="text-place">{toggleText && <Text />}</div>
          <div>
            {reLoad && (
              <button className="btn-reload" onClick={handleReload}>
                Love Youu =))
              </button>
            )}
            {!reLoad && (
              <button className="btn-reload" onClick={handleClick}>
                {!clickFalse ? "Click hộp quà :))" : "Hộp ở trên mà -_-"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Present;
