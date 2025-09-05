import React, { useState } from "react";

const Greet = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState([]);
  
  const greet = () => {
    const text = `안녕 내 이름은 ${name}이야`;
    setResult([...result, text]);
    setName("");
    console.log(result);
    return name;
  };

  const KeyDown = (e) => {
    if (e.key === "Enter") {
      greet();
    }
  };

  return (
    <div className="greet-back w-[300px] h-[700px] m-[10px] p-[20px] box-border border-1">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-[white]" style={{WebkitTextStroke: "0.3px black"}}>Hello world!</h1>
        <div
          className="h-[500px] w-[100%] overflow-y-auto ps-[15px] pt-[5px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
        >
          {result.map((i, index) => (
            <p key={index}>{i}</p>
          ))}
        </div>
        <div className="flex w-[100%] mt-[10px] justify-between">
          <input
            className="w-[80%]"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요"
            onKeyDown={KeyDown}
          />
          <button onClick={greet}>입력</button>
        </div>
      </div>
    </div>
  );
};

export default Greet;
