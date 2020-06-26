import { retrieveRealHTML } from "./index";
import path from "path";

// retrieves HTML from CNN homepage and saves it to folder in project root folder named 'output-html'
async function test() {
  const url = "https://www.maillardos.ch/shop";
  const retrievedRealHTML = await retrieveRealHTML(
    url,
    path.join(__dirname, "..", "output-html", "maillardos.html")
  );
  console.log(
    "Done with HTML retrieval. Retrieved HTML: " +
      JSON.stringify(retrievedRealHTML)
  );
}

test();
