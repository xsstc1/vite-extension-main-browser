import {
  kitchenSinkRoot,
  optionsHtml,
} from "../../../__fixtures__/kitchen-sink-paths";
import { getScriptSrc, loadHtml } from "../cheerio";

const html$ = loadHtml(kitchenSinkRoot)(optionsHtml);

test("scrapes correct script tags", () => {
  const result = getScriptSrc(html$);

  expect(result).toEqual([
    "__fixtures__/extensions/kitchen-sink/options1.js",
    "__fixtures__/extensions/kitchen-sink/options2.jsx",
    "__fixtures__/extensions/kitchen-sink/options3.ts",
    "__fixtures__/extensions/kitchen-sink/options4.tsx",
  ]);
});
