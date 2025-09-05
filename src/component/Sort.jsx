import React, { useState } from "react";

const Sort = () => {
  const [originList, setOriginList] = useState([]);
  const [list, setList] = useState([]);
  const sortUp = (list) => {
    let n = list.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (list[j] > list[j + 1]) {
          [list[j], list[j + 1]] = [list[j + 1], list[j]];
        }
      }
    }
    console.log(list);
    return list;
  };
  const sortDown = (list) => {
    let n = list.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (list[j] < list[j + 1]) {
          [list[j], list[j + 1]] = [list[j + 1], list[j]];
        }
      }
    }
    console.log(list);
    return list;
  };

  const randomList = () => {
    const random = Array.from(
      { length: 6 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setOriginList(random);
    setList(random);
    console.log(random);
  };
  return (
    <div className="sort-back w-[600px] h-[345px] m-[10px] border-1 box-border p-[20px] flex flex-col items-center">
      <div className="flex items-center justify-between mb-[20px]">
        <h1
          className="text-[white] m-[0px] me-[15px]"
        >
          버블 정렬
        </h1>
        <div>
          <button onClick={randomList}>랜덤 배열</button>
          <button onClick={() => setList(sortUp([...list]))}>오름차순</button>
          <button onClick={() => setList(sortDown([...list]))}>내림차순</button>
        </div>
      </div>
      <div
        className="h-[250px] w-[80%] p-[30px] flex flex-col items-start justify-around"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
      >
        <h3 className="m-[10px]">원본 배열 : {originList.join(", ")}</h3>
        <h3 className="m-[10px]">정렬된 배열 :{list.join(", ")}</h3>
      </div>
    </div>
  );
};

export default Sort;
