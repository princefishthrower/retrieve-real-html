import fs from "fs";
import puppeteer from "puppeteer";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

export async function retrieveRealHTML(
  url: string,
  outputFilePath: string
): Promise<string> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // go to desired url
  await page.goto(url, { waitUntil: "networkidle0" });

  // set viewport to machine
  await page.setViewport({ width: 0, height: 0 });

  // scroll to bottom of page smoothly
  await page.evaluate(
    "window.scrollTo({top: document.body.scrollHeight, left: 0, behavior: 'smooth'})"
  );

  // wait for quite a while for any lazyloaded / API images etc to load
  await wait(15000);

  // get html
  const html = await page.content();

  // write html to file
  fs.writeFile(outputFilePath, html, function (error) {
    console.log(error);
  });

  // close the puppeteer browser
  await browser.close();

  // return the html string
  return html;
}
