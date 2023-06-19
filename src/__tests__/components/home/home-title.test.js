import "@testing-library/jest-dom/extend-expect";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { render, screen } from "@testing-library/react";
import spanishMessages from "@/lang/es.json";
import englishMessages from "@/lang/en.json";
import HomeTitle from "@/components/home/home-title";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("HomeTitle component", () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      locale: "es",
    }));
  });
  it("renders name and surname correctly", () => {
    render(
      <IntlProvider locale="en" messages={spanishMessages}>
        <HomeTitle />
      </IntlProvider>
    );

    const name = screen.getByText(/carlos/i);
    const surname = screen.getByText(/aldaravi/i);

    expect(name).toBeInTheDocument();
    expect(surname).toBeInTheDocument();

    const parent = name.parentNode;
    expect(parent).toContainElement(name);
    expect(parent).toContainElement(surname);

    const children = Array.from(parent.childNodes);
    const nameIndex = children.indexOf(name);
    const surnameIndex = children.indexOf(surname);

    expect(nameIndex).toBeLessThan(surnameIndex);
  });

  it("renders the description correctly in spanish", () => {
    render(
      <IntlProvider locale="es" messages={spanishMessages}>
        <HomeTitle />
      </IntlProvider>
    );

    expect(
      screen.getByText("Bienvenido, descubre los dos mundos que me apasionan")
    ).toBeInTheDocument();
  });
  it("renders the description correctly in english", () => {
    render(
      <IntlProvider locale="en" messages={englishMessages}>
        <HomeTitle />
      </IntlProvider>
    );

    expect(
      screen.getByText(
        "Welcome, discover the two worlds that I am passionate about."
      )
    ).toBeInTheDocument();
  });
});
