import { render, screen, cleanup } from "@testing-library/react"
import ServiceCard from "../service/service-card"

afterEach(() => {
    cleanup();
})

test("Service Card should render with given test props", () => {
    const testProps = { title: "Loans and Insurance", desc: "apply for different Loans and check your insurance", link: "#" }
    render(<ServiceCard testProps={testProps} />)
    const ServiceCardElement = screen.getByTestId("service-card");
    expect(ServiceCardElement).toHaveClass("service-card-boundary");
    expect(ServiceCardElement).toHaveTextContent("Loans and Insurance")
})

test("check the description of service card", () => {
    const testProps = { title: "Loans and Insurance", desc: "apply for different Loans and check your insurance", link: "#" }
    render(<ServiceCard testProps={testProps} />)
    const ServiceCardElement = screen.getByTestId("service-card");
    expect(ServiceCardElement).toContainHTML(`<h4 class="service-title">${testProps.title}</h4>`)
    expect(ServiceCardElement).toHaveTextContent("apply for different Loans and check your insurance")
})