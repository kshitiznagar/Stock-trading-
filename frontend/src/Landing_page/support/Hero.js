import React from "react";
function Hero() {
  return (
    <div style={{ backgroundColor: "#efeff0" }}>
      <div className="row ms-5">
        <div className="col-10 mt-4 mb-4">
          <h1 style={{ paddingLeft: "2.5rem" }}>Support Portal</h1>
        </div>
        <div className="col-2 mt-4 mb-4">
          <button
            style={{
              backgroundColor: "#397dd0",
              color: "white",
              border: "none",
              fontSize: "1rem",
              height: "2.5rem",
              width: "7rem",
              borderRadius: "0.2rem",
            }}
          >
            My tickets
          </button>
        </div>
      </div>
      <div className="row" style={{ paddingBottom: "3rem" }}>
        <input
          style={{
            width: "85%",
            margin: "0 auto",
            height: "3.4rem",
            boxShadow: "1.5px 1.5px 8px #E0E7EF",
            border: "1px solid #E0E7EF",
            borderRadius: "0.5rem",
          }}
          placeholder="Eg: How do I open my account, How do i activate F&O..."
        ></input>
      </div>
    </div>
  );
}

export default Hero;
