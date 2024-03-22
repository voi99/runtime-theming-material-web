// check [https://github.com/material-components/material-web]

type WithStylesheet = typeof globalThis & {
  [stylesheetName: string]: CSSStyleSheet | undefined;
};

export function applyThemeString(doc: DocumentOrShadowRoot, themeString: string, ssName = "material-theme") {
  let sheet = (globalThis as WithStylesheet)[ssName];

  if (!sheet) {
    sheet = new CSSStyleSheet();
    (globalThis as WithStylesheet)[ssName] = sheet;
    doc.adoptedStyleSheets.push(sheet);
  }

  sheet.replaceSync(themeString);
}
