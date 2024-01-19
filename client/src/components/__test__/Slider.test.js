import { render, screen, cleanup } from "@testing-library/react"

import Slideshow from "../Home/HomeSlider"

afterEach(() => {
    cleanup();
})

test("SlideShow Component should Render", () => {
    render(<Slideshow />);
    const SliderElement = screen.getByTestId("Slideshow");
    expect(SliderElement).toBeInTheDocument();
    expect(SliderElement).toHaveClass("slideshow")
})

test("SlideShow class in slideshow Component should render", () => {
    render(<Slideshow />);
    const SliderElement = screen.getAllByTestId("sliderimage");
    expect(SliderElement[0]).toBeInTheDocument();
    expect(SliderElement[0]).toHaveAttribute("alt")
})