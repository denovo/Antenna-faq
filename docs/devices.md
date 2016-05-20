
## How should files be provided

Download links should be provided as a hyperlink, they should also include the short code url if the device is to be directly installed onto a device via web browser. They may also include the QR code if requested to ease with instalation.

Android files will be provided at the relevant OS as an .apk file they may also include a link to a content ditribution (expansion) file to be loaded .

iOS files will be provided at the relevant OS as an .ipa file /or a .zip which will contain both an .ipa and provisioning file.

Links expire after 10 days

----

## Uploading and Installing

Delete any previous version of an app before installing a new one  
> iOS  

You can use iTunes to upload your app.
You can transfer the ipa into your iTunes library and then install to your device.

You can install via either a long link url: As an example:https://d3099jutct8dja.cloudfront.net/builds/113545/adhoc?Expires=1464530546&Signature=Aa8jPq-ayQyaOgnRGBWi0kvJpBh64kn3wHYNFvRcaakn~rLR3jMdIHPwUrJRnbwA~me1odT3GWjeiWAXYNhfdBpvIrMy-dji-bVU4zFqslfOeUcvWoUUFRROFptkK2jkqOT7GnF8Rn0r4zTuVZCUJ3jW7~vZW8WTSX9VBNtQrWk_&Key-Pair-Id=APKAI42DDOB6K67Z7GBA

This will downlaod to your hard drive and  can then be transffered to your device.

On the device you can use either the QR code or you can navigate on the device using it's browser and input the short link:
example: 
j.mp/1sivnbk
Code: 465


>Android


You can install via either a long link url: As an example:https://d3099jutct8dja.cloudfront.net/builds/113545/adhoc?Expires=1464530546&Signature=Aa8jPq-ayQyaOgnRGBWi0kvJpBh64kn3wHYNFvRcaakn~rLR3jMdIHPwUrJRnbwA~me1odT3GWjeiWAXYNhfdBpvIrMy-dji-bVU4zFqslfOeUcvWoUUFRROFptkK2jkqOT7GnF8Rn0r4zTuVZCUJ3jW7~vZW8WTSX9VBNtQrWk_&Key-Pair-Id=APKAI42DDOB6K67Z7GBA

This will downlaod to your hard drive and  can then be transffered to your device.


Connect your device and then drag your app to a folder on the device.
You may need to enable USB debugging or developer options on your device for it to show up on your computer.

Once the app is on your device, navigate to it and install.


Also for general file transfers for Android devices on a Mac you can use [AndroidFileTransfer](https://www.android.com/filetransfer/)

On the device you can use either the QR code or you can navigate on the device itself using it's browser and input the short link:
example: 
j.mp/1sivnbk
Code: 465

![QRcode](/images/chart.png)


>IRIS2

Use Antenna Batch 
The latest version is available [here](http://54.84.36.118/)

Run it by launching the antennaBatch.command file

Always delete existing copies of the app before installing a new one.
Use the advanced Tab and select the delete option and then the desired app.

To install use the APP Install Data - large option
You will need to rename the downloaded apk (app) file so that it has no space characters in it's filename before uploading.


Upon installing the device must be restarted. 
On restart you will be prompted to set the default launcher action. This can be set to your app if you select always then select your app. 
Restart the device once more. Now whenever the device is restarted, the app is quit, or the app crashes it will relaunch the application automatically.

For more assistance with Antenna Batch - contact the [Product Owner](mailto:ekerrigan@antennainternational.com)

>Samsung 4.2 (2.3 android)

Use Samsung Connect - tbc

Manual Install non expansion file:

Connect your device and then drag your app to a folder on the device.
You will need to enable USB debugging or developer options on your device for it to show up on your computer.
Once the app is on your device, disconnect and turn off USB connection and then navigate to it and install.

Manual Install with expansion files:

- Install the .apk file on the android device
- Launch the apk and when it asks if you want to download the expansion, exit the app and unmount the USB.
- This will have created a folder in the android/obb with the correct structure for your expasnion file
- Locate the expansion file on your computer (the large .zip file)
- Rename the .obb file to match the filename format below:
- IF a commercial build: 
  Go to edit app in ES, copy the android package name eg (main.com.antenna.beatles), 
  Copy the build number of the app `eg 112657` this will be at the end of the page url when you are on the ES build     history page for the build version you want to install. 
- Combine the two, so the filename of the .obb file reads something like :  ```main.112662.com.antenna.beatles.obb```
- IF an adhoc build: 
   Adhoc Installs: ```main.113274.com.eachscape.app29310.obb``` (**113274**: build number  **29310**: app number)
   
- Make sure that the file extension has definitely changed from .zip to .obb. On a Mac you can use the GetInfo option   to check. On a PC you can right click and check properties. If you can't see a file type on PC - goto folder         options and remove the tick from "hide known type file extension"s in foplder options on Windows systems so you can   rename the .zip
  **IMPORTANT** Make sure that when you rename the expansion file you are overwriting the .zip file extension. This     is the cause in 90% of installation failures.


- Mount your device and go to the folder Android/obb
- Copy the .obb file  (eg main.48946.com.bm.pompeii.obb) into this folder, in this case it would be ```Android/obb/com.antenna.beatles/main.112662.com.antenna.beatles.obb``` to install the commercial build.
- Unmount and launch the app.... 

----

## Screenshots

>iOS

[Apple Support Guide for Screenshots](https://support.apple.com/en-gb/HT200289)

Press and hold the Sleep/Wake button on the top or side of your iPhone, iPad, or iPod touch, then immediately press and release the Home button.

>Android

Vast majority of Android devices: press the power button and Volume down key at the same time.
Many Samsung device press the power and home buttons.

Android 2.3 you will need to use a screenshot capturing app for the device or connected computer and the Android SDK (See the Emulator section in QA tab)

>IRIS2

Use Antenna Batch tool or the Android SDK tools.

The latest version is available [here](http://54.84.36.118/)

In Antenna Batch select the advanced ooption and then navigate to the take screenhsot option.
Antenna batch also has a screencasting option.

----


## IRIS2 Timeout settings  

The ability to modify the screen time out has been overridden at an android level and is managed by the widget. Should you need to change this you can do the following:

*        Open Antenna batch
*         Plug in the device
*         In the drop down select <Set properties>
*         In the window below Set file type <persist.chargetype 0>

Should you wish to prolong the time out to a set time, you can enter:

<persist.timeout 60000>

The time value is measured in miliseconds therefore 60000= 1minute.

## Trusting Certs on Apple Devices  

How does my client rust the enterprise setting to test an app:[Trusting an Enterprise Cert](https://support.apple.com/en-gb/HT204460)
