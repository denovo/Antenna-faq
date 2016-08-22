# Inspecting webviews inside ES apps

Use the web browser developer tools and inspector to examine
the contents of any webview that is running in an adhoc ES app. This can be useful to
debug error messages and to see how the html is being rendered once the app is
running.

## Open a WebView in Chrome DevTools

The **chrome://inspect** page displays a list of debug-enabled WebViews on your device.

To start debugging, click **inspect** below the WebView you want to debug. Use DevTools as you would for a remote browser tab.

![Inspecting elements in a WebView](https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/imgs/webview-debugging.png)

The gray graphics listed with the WebView represent its size and position relative to the device’s screen. If your WebViews have titles set, the titles are listed as well.

### Troubleshooting

Can’t see your WebViews on the **chrome://inspect page**?

*   Verify that WebView debugging is enabled for your app.
*   On your device, open the app with the WebView you want to debug. Then, refresh the **chrome://inspect** page.

More info: https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/webviews?hl=en


## Using the Safari Web Inspector

### With the iOS Simulator

The easiest way to use the Safari Web Inspector is with the iOS Simulator, where debugging is enabled by default. Open your ES app in the iOS Simulator by creating a simulator build in ES and loading that up in the simulator. *..link to notes on using simulator here*

### With a Physical Device

Alternatively, you can use an adhoc iOS app and inspect that when it is connected with USB. You need to enable Web Inspector for Safari on your **iOS device**. Go to _Settings_ > _Safari_ > _Advanced_ and enable the _Web Inspector_ option. Then, connect your device to your computer with a cable.

### Enabling the Safari Develop Menu

**Note:** your desktop Safari must be version 6.1 or later. You'll need to restart your computer after updating Safari for the Web Inspector to work.

Next, enable Safari's developer tools. Open Safari's preferences by selecting _Safari_ > _Preferences_ from the top menu, go to the _Advanced_ tab and check the _Show Developer_ menu checkbox.

Now, you should see a _Develop_ menu item in Safari's top menu bar. Open the _Develop_ > _iPhone Simulator_ (or your iOS device's name) menu, and you should see a list of WebViews currently open in your app.

If you cannot see any WebViews in your Safari Develop menu, make sure you are viewing a view on your app that has a webview inside of it. If that fails, restarting your computer might help.

### Inspecting a WebView

Select a WebView in your app. You now have direct Web Inspector access to it. You can edit the DOM and use the JavaScript console. The console also displays errors and `console.log` output.

If you type in `window.location.reload();` or press **CMD + R**, the WebView reloads itself, which allows you to see network requests and possible console errors that happen when the WebView loads.

You can even debug JavaScript by inserting breakpoints: open a `.js` file in the Safari Web Inspector (e.g. from the _Resource_ tab) and click on the line numbers to insert break points. Then, reload the WebView. JavaScript execution will pause at the breakpoints, and the _Debug_ tab shows the current call stack.
