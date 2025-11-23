### Repository overview

This workspace contains small static HTML/JS exercises organized by date folders. There is no build system, CI, or package manager. Primary entry points:

- `13112025/index.html` — a multipurpose page (meters→km converter, basic calculator, IMC calculator). The behavior is implemented in `13112025/script.js`.
- `18112025/index.html` — a client-capture example (name concatenation). Behavior in `18112025/script.js` and styling in `18112025/styel.css` (note the filename typo: `styel.css`).

### Big-picture architecture and patterns

- Very small, static pages. Each dated folder is self-contained: HTML references a local `script.js` and a local CSS file.
- JavaScript style is minimal and uses implicit globals (no `let`/`const`/`var` in current functions). Example: `convertirMetrosAKilometros()` reads `in_metros` and writes `out_kilometros` using global names like `metros` and `kilometros` (see `13112025/script.js`).
- DOM IDs are the primary contract between HTML and JS. When changing logic, prefer keeping IDs stable (examples: `in_metros`, `out_kilometros`, `in_num1`, `out_result`, `in_cliente`, `out_datos_cliente`).

### Project-specific conventions and gotchas (do not change silently)

- Scripts are included directly in the HTML using `<script src="script.js"></script>`; avoid adding duplicate script tags (the `13112025/index.html` currently includes `script.js` twice — remove duplicates when refactoring).
- File name typos: `18112025` uses `styel.css` instead of `style.css`. If you rename files, update the HTML link href accordingly.
- The codebase relies on implicit globals — refactor carefully. Converting to block-scoped declarations (`let`/`const`) is fine, but ensure the functions still reference the same element IDs and that no cross-file globals are unintentionally removed.

### How to run & debug locally

- There is no build step. Open `.../13112025/index.html` or `.../18112025/index.html` in a browser. Recommended quick ways:

  - From VS Code: install and use the Live Server extension and click "Go Live" on the folder that contains the desired `index.html` file.
  - From PowerShell (Windows) open the file in the default browser: `Start-Process 'C:\path\to\13112025\index.html'`.

- Debugging tips:
  - Use DevTools Console for errors and `console.log(...)` instrumentation. Example: add `console.log(document.getElementById('in_metros').value)` inside `convertirMetrosAKilometros()`.
  - Watch for `NaN` from `parseInt/parseFloat` when inputs are empty or non-numeric.

### Examples to reference when editing

- To change the meter→km converter: edit `13112025/script.js` — function `convertirMetrosAKilometros()` reads `in_metros` and writes `out_kilometros`.
- To add validation, check `in_num1`/`in_num2` before arithmetic (current code does not guard against empty inputs or division by zero in `divisorNumeros`).
- To fix `styel.css` typo: update the `<link>` in `18112025/index.html` or rename the CSS file to `style.css` and keep the HTML updated.

### Safety and small-refactor guidance

- Prefer local, small refactors: update a single folder at a time and test by opening that `index.html` in a browser.
- When replacing implicit globals, run a quick smoke test: exercise each button on the page and check the outputs.

### Where to look next

- `13112025/index.html` — examples of repeated script inclusion and multiple small widgets on one page.
- `13112025/script.js` — arithmetic helpers and IMC computation (useful for examples of DOM→logic→DOM flow).
- `18112025/index.html` and `18112025/script.js` — minimal input capture pattern; supports quick onboarding edits.

If any section is unclear or you'd like more details (for example, I can add a short checklist for converting these files to module-based JS or add automated smoke tests), tell me which direction and I'll update this file.
