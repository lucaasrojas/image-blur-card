import React, { useEffect, useState } from "react";
import ImageCardStyles from "./ImageCard.module.css";
import "./ImageCard.model";
import { IImageCard } from "./ImageCard.model";
const ImageCard: React.FC<IImageCard> = ({
  src,
  text,
  width = 200,
  height = 200,
  cardStyle = {},
  labelStyle = {},
}) => {
  const [displayLabel, setDisplayLabel] = useState("none");
  const handleMouseOver = () => {
    setDisplayLabel("block");
    document.getElementById("card_img")?.style.setProperty("opacity", "0.5");
    document
      .getElementById("card_img")
      ?.style.setProperty("filter", "blur(5px)");
  };
  const handleMouseOut = () => {
    setDisplayLabel("none");
    document
      .getElementById("card_img")
      ?.style.setProperty("filter", "blur(0px)");
    document.documentElement.style.setProperty("--display-label", "none");
  };
  useEffect(() => {
    document
      .getElementById("card")
      ?.addEventListener("mouseover", handleMouseOver);

    document
      .getElementById("card")
      ?.addEventListener("mouseout", handleMouseOut);

    return () => {
      document
        .getElementById("card")
        ?.removeEventListener("mouseover", handleMouseOver);

      document
        .getElementById("card")
        ?.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      className={ImageCardStyles.card}
      style={{ height, width, ...cardStyle }}
      id="card"
    >
      <img
        className={ImageCardStyles.card_img}
        src={src}
        alt={`${text}-card`}
        id="card-img"
      />
      <div className={ImageCardStyles.labelContainer}>
        <span
          className={ImageCardStyles.label}
          style={{ display: displayLabel, ...labelStyle }}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default ImageCard;
