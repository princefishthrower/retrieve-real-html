# retrieve-real-html

A function that retrieves the fully rendered HTML for a given a webpage and outputs it to a file. The function also returns the html string itself for method chaining if needed.

## TypeScript Usage:

```typescript
import { retrieveRealHTML } from 'retrieve-real-html';
import path from 'path';

// retrieves HTML from CNN homepage to folder in project root folder under output-images/
async function test() {
  const retrieveRealHTML = await retrieveRealHTML(
    "https://edition.cnn.com",
    path.join(__dirname, "..", "output-images")
  );
  console.log(
    "Done with HTML retrieval. Retrieved HTML: " +
      JSON.stringify(retrieveRealHTML)
  );
}

test();
```

