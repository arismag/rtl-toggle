# rtl-toggle
RTL toggle is chrome extension that detects and toggles language direction ('rtl'/'ltr') of the site.

When you are developing websites, apps, components etc. for languages that are written from right to left it's really helpful to visualize and toggle this in the browser independently from the actual language that is being used.

The extensions does two things: Detects and toggles the direction of the website's language.

Detection:
When a new tab is loaded a script is checking the 'dir' attribute of the <html> tag element. If the attribute is set to 'rtl', the extension's badge text is also set to "RTL" indicating that the current website uses a language that is written from right to left.

Toggling:
When the user clicks the extension's icon, a script toggles (or adds it if not set) the value of 'dir' attribute of the <html> tag to one of the two values 'rtl'/'ltr'.
