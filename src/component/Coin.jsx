import React, { useState } from "react";

const Coin = () => {
  const [gold, setGold] = useState();
  const [result, setResult] = useState({});
  const coins = [1000000, 500000, 100000, 50000, 10000, 5000, 1000, 500, 100, 50, 10];

  const Bills = (gold) => {
    const result = {};

    for (let coin of coins) {
      result[coin] = Math.floor(gold / coin);
      gold %= coin;
    }
    return result;
  };

  const btnCilick = () =>{
    const intGold = parseInt(gold);
    if(isNaN(intGold)) return;
    const billResult = Bills(intGold)
    setResult(billResult);
  }

  const KeyDown = (e) => {
    if (e.key === "Enter") {
      Bills();
    }
  };
  console.log(Bills(gold));
  return (
    <div className="coin-back w-[600px] h-[345px] m-[10px] p-[10px] box-border flex flex-col items-center">
      <div className="flex items-center mt-[10px]">
        <h1
          className="text-[white] m-[0px]"
          style={{ WebkitTextStroke: "0.3px black" }}
          onKeyDown={KeyDown}
        >
          비트 코인
        </h1>
        <div className="flex">
          <input
            type="text"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
          />
          <button onClick={btnCilick}>입력</button>
        </div>
      </div>
      <div
        className="w-[80%] h-[250px] mt-[20px] p-[50px] box-border flex justify-around"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
      >
        <div>
          <h4>십만원권: {result[100000] || 0}장</h4>
          <h4>오만원권: {result[50000] || 0}장</h4>
          <h4>만원권: {result[10000] || 0}장</h4>
        </div>
        <div>
          <h4>오천원권: {result[5000] || 0}장</h4>
          <h4>천원권: {result[1000] || 0}장</h4>
          <h4>오백원: {result[500] || 0}장</h4>
        </div>
        <div>
          <h4>백원: {result[100] || 0}개</h4>
          <h4>오십원: {result[50] || 0}개</h4>
          <h4>십원: {result[10] || 0}개</h4>
        </div>
      </div>
    </div>
  );
};

export default Coin;
