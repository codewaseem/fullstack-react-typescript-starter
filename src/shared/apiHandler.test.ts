import { getPageSections } from "./";
test("getPageSections", async () => {
  const data = await getPageSections();
  expect(data).toBeDefined();
});