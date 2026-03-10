import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  linkname1,
  linkname2,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-12 mt-5 p-5">
          <h3 style={{marginTop : "5rem"}}>{productName}</h3>
          <p className="mt-4 text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo}>{linkname1}</a>
            <a href={learnMore} style={{ marginLeft: "5rem" }}>
              {linkname2}
            </a>
          </div>
        </div>
        <div className="col-xl-1"></div>
        <div className="row col-xl-6 col-lg-12">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
