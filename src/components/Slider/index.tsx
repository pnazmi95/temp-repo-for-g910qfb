import React, { useEffect, useState } from "react";
import movies from "../../movies";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Button from "../Base/Button";
interface IMoviesSliderProps extends React.PropsWithChildren {}

const movieItems = [...movies];

const MoviesSlider: React.FunctionComponent<
  IMoviesSliderProps
> = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let sliderInterval: any;

  const slideSpeed: number = 4000;
  const autoPlay: boolean = true;

  useEffect(
    () => {
      autoPlay && autoPlayFunc();
      return () => clearInterval(sliderInterval);
    },
    [currentIndex]
  )

  const autoPlayFunc = (): void => {
    sliderInterval = setInterval(nextSlideHandler, slideSpeed);
  };

  const prevSlideHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? movieItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlideHandler = () => {
    const isLastSlide = currentIndex === movieItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-light-primary dark:bg-dark-primary">
      <div className="group relative m-auto h-[calc(100vh-176px)] w-full max-w-7xl px-2 pb-2 md:pb-12 pt-2">
        <div
          style={{
            backgroundImage: `url(${movieItems[currentIndex].slider})`,
          }}
          className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
        ></div>
        {/* arrows */}
        <div className="duration-400 absolute top-0 left-0 flex h-[calc(100%-48px)] w-full items-center justify-between px-2 pt-2 text-2xl text-dark-heading opacity-0 transition-opacity group-hover:opacity-100">
          <div className="cursor-pointer rounded-full bg-dark-primary/20 p-1 dark:bg-light-primary/20">
            <BsChevronCompactLeft onClick={prevSlideHandler} size={25} />
          </div>
          <div className="cursor-pointer rounded-full bg-dark-primary/20 p-1 dark:bg-light-primary/20">
            <BsChevronCompactRight onClick={nextSlideHandler} size={25} />
          </div>
        </div>
        {/* dots */}
        <div className="top-4 hidden md:flex items-center justify-center gap-2 py-5">
          {movieItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                goToSlide(index);
              }}
              className={`h-[0.5rem] w-[0.5rem] cursor-pointer rounded-full bg-dark-primary dark:bg-light-primary ${
                currentIndex === index && "md:bg-dark-error md:dark:bg-dark-error"
              }`}
            ></div>
          ))}
        </div>
        {/* Card */}
        <div
          className="absolute top-[50%] md:top-[45.5%] md:left-[4%] flex 
          h-[88%] md:h-[75%] w-[80%] left-[10%] md:w-[40%] -translate-x-0 translate-y-[-50%] items-center justify-center gap-3 rounded-md  border-2 border-light-primary bg-light-primary p-3 
        text-sm text-dark-primary dark:border-dark-primary dark:bg-dark-primary dark:text-dark-heading"
        >
          <img
            src={`${movieItems[currentIndex].poster}`}
            className="h-[90%] w-[50%] bg-cover bg-center duration-500"
          ></img>
          <div className="flex h-[90%] max-h-[90%] min-h-[90%] w-[50%] flex-col justify-between">
            <div className="flex flex-col">
              <div
                id="MovieTitle"
                className="font-bold uppercase text-light-hover dark:text-dark-error "
              >
                {`${movieItems[currentIndex].title}`}
              </div>
              <div id="YearScoreBlock" className="flex justify-between">
                <div>{`${movieItems[currentIndex].year}`}</div>
                <div>
                  {`${movieItems[currentIndex].rate}/10`}
                  <span className="font-bold text-light-hover dark:text-dark-error ">
                    IMDB
                  </span>
                </div>
              </div>
              <div className="overflow-hidden text-ellipsis whitespace-nowrap text-justify dark:text-dark-content">
                <h4 className="font-bold text-light-hover dark:text-dark-error">
                  Summary:
                </h4>
                {`${movieItems[currentIndex].summary}`}
              </div>
            </div>
            <div className="flex flex-col">
              <p>
                <span className="font-bold text-light-hover dark:text-dark-error">
                  Director:{" "}
                </span>
                {`${movieItems[currentIndex].director}`}
              </p>
              <p>
                <span className="font-bold text-light-hover dark:text-dark-error">
                  Stars:{" "}
                </span>
                {`${movieItems[currentIndex].stars.join(", ")}`}
              </p>
              <p>
                <span className="font-bold text-light-hover dark:text-dark-error">
                  Geners:{" "}
                </span>
                {`${movieItems[currentIndex].genre.join(", ")}`}
              </p>
              <div className="flex flex-col gap-2">
                <Button title="Add To Card" />
                <Button title="Read More" to={`/movie/${currentIndex}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesSlider;
