# rtl-toggle

**RTL toggle** is chrome extension that detects and toggles language direction ('rtl'/'ltr') of the site.

When you are developing websites, apps, components etc. for languages that are written from right to left it's really helpful to visualize and toggle the direction in the browser independently from the actual language that is being used.

## HOW IT WORKS

The extensions does two things: **Detects** and **toggles** the direction of the website's language.

### Detection:

When a new tab is loaded a script is checking the 'dir' attribute of the <html> tag element. If the attribute is set to 'rtl', the extension's badge text is also set to "RTL" indicating that the current website uses a language that is written from right to left.

### Toggling:

When the user clicks the extension's icon, a script toggles (or adds it if not set) the value of 'dir' attribute of the <html> tag to one of the two values 'rtl'/'ltr'.

## HOW TO INSTALL EXTENSION

1. Download the extension and store it locally.

2. Open chrome://extensions/ in your Chrome browser.

3. Check developer mode.

4. Click load unpacked extension.

5. Select the directory of the extension.
  
## SCREENSHOTS

|Toggled on/Detection|Toggled off|
|---|---|
|![Selection_927](https://user-images.githubusercontent.com/10897246/173201404-d1bde1ce-4bbc-4bc4-be9a-b26333fc5df2.png) | ![Selection_926](https://user-images.githubusercontent.com/10897246/173201406-8fce908c-312f-4644-9765-26a29f390bd7.png) |
 |![Selection_925](https://user-images.githubusercontent.com/10897246/173201407-4b5363ab-1f71-41d1-a629-ed6e0f680f3e.png) | |
