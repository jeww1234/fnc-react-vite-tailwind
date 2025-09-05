import React, { useState } from "react";

const MeetAt = () => {
  const [date, setDate] = useState("");
  const [result2, setResult2] = useState([]);

  const meetAt = (y, m, d) => {

    const parts = date.split("/").map((p)=>p.trim());
    let formatted = "";

    if(parts.length === 1 && parts[0]){
      formatted = `${parts[0]}년`
    }else if(parts.length === 2){
      formatted = `${parts[0]}년 ${parts[1]}월`
    }else if(parts.length === 3){
      formatted = `${parts[0]}/${parts[1]}/${parts[2]}`
    }else{
      formatted = "잘못된 형식입니다. 예: 2025/09/05";
    }
    setResult2([...result2, formatted]);
  };

  const KeyDown = (e) => {
    if (e.key === "Enter") {
      meetAt();
    }
  };

  return (
    <div className="date-back w-[300px] h-[700px] m-[10px] p-[20px] box-border border-1">
      <div className="flex flex-col justify-center items-center ">
        <h1
          className="text-[white]"
          style={{ WebkitTextStroke: "0.3px black" }}
        >
          Date
        </h1>
        <div
          className="h-[500px] w-[100%] overflow-y-auto ps-[15px] pt-[5px]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
        >
          {result2.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="flex w-[100%] mt-[10px] justify-between">
          <input
          placeholder="ex) 2023, 2024/08, 2025/09/05"
            className="w-[80%]"
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            onKeyDown={KeyDown}
          />
          <button onClick={meetAt}>입력</button>
        </div>
      </div>
    </div>
  );
};

export default MeetAt;
