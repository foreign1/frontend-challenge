/**
 * @jest-environment puppeteer
 */
import 'expect-puppeteer';

beforeEach(async () => {
  await page.goto('http://localhost:3000/');
});

describe('contentscript tests', () => {
  jest.setTimeout(30000);
  test('it loads dashboard', async () => {
    const dashboard = page.$(".dashboardWrapper");
    expect(dashboard).toBeDefined();
  });

  test('it loads btb button element', async () => {
    await page.goto('http://localhost:3000/extension');
    const btb = await page.$(".btb-btn");
    expect(btb).toHaveTextContent("Budget");
  });

  test('it displays details element when mouseover btb', async () => {
    await page.goto('http://localhost:3000/extension');
    await page.hover(".btb-btn");
    const details = page.$eval(".details", el => el.innerHTML)
    const dummyText = document.createElement("p");
    dummyText.innerText = "Lorem ipsum, dolor sit amet consectetur adiping elit."
    expect(details).toContainElement(dummyText);
  })
});
