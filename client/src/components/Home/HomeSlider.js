import React from "react";
import "../../assests/styling/slideshow.css"
import img1 from "../../assests/img/slider1.png"
import img2 from "../../assests/img/slider2.jpg"
import img3 from "../../assests/img/slider3.jpg"
import img4 from "../../assests/img/slider4.png"
import img5 from "../../assests/img/slider5.png"

const colors = [img1, img2, img3, img4, img5];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow" data-testid="Slideshow">
      <div
        className="slideshowSlider"

        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <img
            className="slide"
            data-testid="sliderimage"
            key={index}
            src={colors[index]}
            style={{ backgroundColor: "grey" }}
            alt="sliderpic"
          />
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
