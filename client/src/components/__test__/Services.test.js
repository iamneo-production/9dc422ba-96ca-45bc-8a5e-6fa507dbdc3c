import { render, screen, cleanup } from "@testing-library/react";
import Services from "../Home/services";
afterEach(() => {
    cleanup();
})

test('Should Render Mainservices Component', () => {
    render(<Services />);
    const ServicesElement = screen.getByTestId("service-test")
    expect(ServicesElement).toBeInTheDocument();
    expect(ServicesElement).toHaveTextContent("Our Services")
})