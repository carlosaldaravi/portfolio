import "@testing-library/jest-dom/extend-expect";
import { ThemeContextProvider } from "@/store/theme-context";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { render, screen } from "@testing-library/react";
import ContentRoleCard from "@/components/home/role-card/content-role-card";
import spanishMessages from "@/lang/es.json";
import englishMessages from "@/lang/en.json";
import roles from "@/data/roles.json";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("ContentRoleCard component", () => {
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      locale: "es",
    }));
  });
  it("displays the correct developer role title when language is spanish", () => {
    const role = roles[0];

    render(
      <IntlProvider locale="es" messages={spanishMessages}>
        <ThemeContextProvider>
          <ContentRoleCard role={role} />
        </ThemeContextProvider>
      </IntlProvider>
    );

    const titleRole = screen.getByText(/ingeniero multimedia/i);
    expect(titleRole).toBeInTheDocument();
  });
  it("displays the correct developer role title when language is english", () => {
    const role = roles[0];

    render(
      <IntlProvider locale="en" messages={englishMessages}>
        <ThemeContextProvider>
          <ContentRoleCard role={role} />
        </ThemeContextProvider>
      </IntlProvider>
    );

    const titleRole = screen.getByText(/Multimedia Engineer/i);
    expect(titleRole).toBeInTheDocument();
  });
  it("displays the correct kiter role title when language is spanish", () => {
    const role = roles[1];

    render(
      <IntlProvider locale="es" messages={spanishMessages}>
        <ThemeContextProvider>
          <ContentRoleCard role={role} />
        </ThemeContextProvider>
      </IntlProvider>
    );

    const titleRole = screen.getByText(/kitesurfero/i);
    expect(titleRole).toBeInTheDocument();
  });
  it("displays the correct kiter role title when language is english", () => {
    const role = roles[1];

    render(
      <IntlProvider locale="en" messages={englishMessages}>
        <ThemeContextProvider>
          <ContentRoleCard role={role} />
        </ThemeContextProvider>
      </IntlProvider>
    );

    const titleRole = screen.getByText(/kitesurfer/i);
    expect(titleRole).toBeInTheDocument();
  });
});
