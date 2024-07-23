// import React from "react";
// import PecTopAccordion from "./pecTopAccordion/PecTopAccordion";
// import "./peculiarities_top.scss";
// import { ImageLinks } from "./PeculiaritiesTop_Data";

// const selectedImageId = 8;
// const selectedImage = ImageLinks.find((image) => image.id === selectedImageId);

// const PeculiaritiesTop = () => {
//   return (
//     <div className="peculiarities-top">
//       <h3 className="peculiarities-top__title">

//       </h3>
//       <div className="peculiarities-top__content">
//         <img
//           key={selectedImage.id}
//           className="peculiarities-top__content_image"
//           src={selectedImage.ImageLink}
//           alt={`foto ${selectedImageId}`}
//         />
//         <PecTopAccordion />
//       </div>
//     </div>
//   );
// };

// export default PeculiaritiesTop;

import React from "react";
import PecTopAccordion from "./pecTopAccordion/PecTopAccordion";
import "./peculiarities_top.scss";
import { ImageLinks, PeculiaritiesTopTitle } from "./PeculiaritiesTop_Data";

const selectedImageId = 8;
const selectedImage = ImageLinks.find((image) => image.id === selectedImageId);

const PeculiaritiesTop = () => {
  return (
    <div className="peculiarities-top">
      <h3 className="peculiarities-top__title">{PeculiaritiesTopTitle}</h3>
      <div className="peculiarities-top__content">
        <img
          key={selectedImage.id}
          className="peculiarities-top__content_image"
          src={selectedImage.ImageLink}
          alt={`foto ${selectedImageId}`}
        />
        {/* При маленьких экранах превращается в аккордион */}
        <PecTopAccordion /> 
      </div>
    </div>
  );
};

export default PeculiaritiesTop;
