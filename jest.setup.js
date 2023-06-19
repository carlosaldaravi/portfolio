jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      asPath: "/",
      query: "",
      push: jest.fn().mockResolvedValue(true),
      replace: jest.fn().mockResolvedValue(true),
      prefetch: async () => undefined,
    };
  },
}));
