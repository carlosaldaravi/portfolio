const useRouter = jest.spyOn(require("next/router"), "useRouter");

/**
 * mockNextUseRouter
 * Mocks Next.js 'useRouter' hook for tests.
 * @param {Object} props - return values for the router hook.
 */
const mockNextUseRouter = (props) => {
  useRouter.mockImplementationOnce(() => ({
    push: jest.fn().mockResolvedValue(true),
    replace: jest.fn().mockResolvedValue(true),
    route: "/",
    pathname: "",
    query: "",
    asPath: "",
    prefetch: async () => undefined,
    ...props,
  }));
};

module.exports = {
  useRouter,
  mockNextUseRouter,
};
