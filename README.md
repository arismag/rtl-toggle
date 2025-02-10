# rtl-toggle

A **chrome extension** that detects and toggles the **language direction ('rtl'/'ltr')** of a site.

When you are developing for websites and applications that support languages that are written from right to left it's really helpful to visualize and toggle the language direction in the browser independently from the actual language that is being used.

## HOW IT WORKS

The extensions does two things: **Detects** and **toggles** the direction of the website's language.

### Detection:

When a new tab is loaded a script is checking the `dir` attribute of the `<html>` tag element. If the attribute is set to 'rtl', the extension's badge text is also set to "RTL" indicating that the current website uses a language that is written from right to left.

### Toggling:

When the user clicks the extension's icon, a script toggles (or adds it if not set) the value of `dir` attribute of the `<html>` tag to one of the two values 'rtl'/'ltr'.

### Icon states

|LTR|RTL|
|---|---|
|![Selection_933](https://user-images.githubusercontent.com/10897246/173202405-8787c67e-1a09-4fc0-ac12-5fe229fcdbac.png)|![Selection_932](https://user-images.githubusercontent.com/10897246/173202403-8400dc5f-1f77-41a4-8270-4e743f8a6430.png)|

## HOW TO INSTALL EXTENSION

The extension can be installed via chrome webstore or locally.

### Chrome webstore

1. Install via [chrome webstore](https://chrome.google.com/webstore/detail/rtl-toggle/diimdfmlegodnjbcgajllidffehegdbc).

### Local installation

1. Download the extension and store it locally.
2. Open chrome://extensions/ in your Chrome browser.
3. Check developer mode.
4. Click load unpacked extension.
5. Select the directory of the extension.
6. Enable and pin **rtl-toggle** as you would do with any other extension.

## HOW TO USE

1. Make sure the extension is enabled and pinned.
2. Just click on the extension's icon ;).
  
## SCREENSHOTS

|Toggled on/Detection|Toggled off|
|---|---|
|![Selection_927](https://user-images.githubusercontent.com/10897246/173201404-d1bde1ce-4bbc-4bc4-be9a-b26333fc5df2.png) | ![Selection_926](https://user-images.githubusercontent.com/10897246/173201406-8fce908c-312f-4644-9765-26a29f390bd7.png) |
 |![Selection_925](https://user-images.githubusercontent.com/10897246/173201407-4b5363ab-1f71-41d1-a629-ed6e0f680f3e.png) | |
 
 ## TODO
 
 - Some sites set the `dir` attribute on the `<body>` tag, so a condition should also be added for this case.

# SUPPORT

If you enjoy my work and want to support what I do, feel free to buy me a coffee! Every cup fuels my passion for crafting seamless web experiences and exploring new musical frontiers. ☕🎵
👉 Buy Me a Coffee at https://buymeacoffee.com/arismag
