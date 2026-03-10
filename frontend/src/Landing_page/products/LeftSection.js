import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  linkname1,
  linkname2
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-xl-6 col-lg-12 mt-5">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-xl-5 col-lg-12 mt-5 p-5">
          <h3 className="mt-3">{productName}</h3>
          <p className="mt-3 text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo}>{linkname1}</a>
            <a href={learnMore} style={{marginLeft : "5rem"}}>{linkname2}</a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="/media/images/appstoreBadge.svg" style={{marginLeft : "1.3rem"}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
