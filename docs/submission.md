
<h1>Submitting Apps to stores</h1>

When you have a commercial build(s).
See the Base App tab for more info on generating builds and certificates for downloadables.

----
>##iOS iTunes Store

All apps submitted to Apple have to go tthrough a review process.
This can take between 1-10 days please allow this in your schedules.
You can check current reviw time trends here:
[Current App review times](http://appreviewtimes.com/)

The app size limit is currently 2GB but do bear in mind users download connections.
An iOS App binary files can be as large as 2 GB, but the executable file (app_name.app/app_name) cannot exceed 60 MB.

The iTunes Store also accepts expansion files besides the app executable itself.
Antenna doenst support expansion files fo iTunes at this point.

For an app to be downloaded over a cell network and not wifi it needs to be under 100MB - this is an Apple applied cap.

Any resubmission can effectively restart this process.

You will need to have the following to submit:

 - A correctly certificated and pacakaged app
 - Access to iTunes Connect
 - AppLoader Application
 - All assets at required resolutions
 - App MetaData

Contact [Jenya Abakumov](mailto:jabakumov@antennainternational.com) to be added to these accounts.

This is a link of all the assets and metadata descriptions that you will need for iTunes Connect.

This link contains all relevant asset size and screenshot information (updated april 2017).
You will need to provide screenshots for all the devices your app supports:

[iTunes Connect submission list](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/Properties.html)
[Screenshots guide](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/Properties.html#//apple_ref/doc/uid/TP40011225-CH26-SW2)
Here is a useful checklist for submissions you can run through:

[Checklist](https://quip.com/FtjnAWlMMnJS)

For Kids apps you will need to select a sub section for age and will also need a privacy policy to be able to submit.
If your kids app includes web links or social media links and is in teh kids category you will also need to include a parental gate:
[Parental Gate Guide](https://developer.apple.com/app-store/parental-gates/)

To upload your app file to iTunesConnect you can use X-code > Open Developer Tool Menu >App Loader or currently we suggest using the stand alone AppLoader version (whilst this is still supported).

AppLoader can be found here:
[Apploader Download](https://itunesconnect.apple.com/apploader/ApplicationLoader_3.0.dmg)
AppLoader documentation here:
[AppLoader documentation](http://help.apple.com/itc/apploader/)

Simply open it and select your app from the dropdown and then select the .ipa commercial build of your app for upload.
When finished go back to iTunesConnect and select the uploaded build under the "prepare for submission" tab.
When your happy with all the details subt your app for review.


UPDATE 10/08/16: "it’s easier than ever to deliver your screenshots and app preview using iTunes Connect. Just submit one set of screenshots and one optional app preview for the largest device size within a device family, and they will be used across all localizations and display sizes.

If your app’s UI or behavior changes based on device size, or if you would like to include localized screenshots, you can use the new Media Manager to add custom screenshots". [Learn more](https://developer.apple.com/videos/play/wwdc2016/305/?time=1700)



Overview video:
[Video walk through](https://drive.google.com/file/d/0B-4IrW_F-LIRM1V6UjcwdnpTOE0/view?usp=sharing)

This link will provide you with an overview and helpful links.

[Apple Developer Guidelines](https://developer.apple.com/appstore/guidelines.html)


----

>##Google Play Store

Google Play Store doesn't currently have a review lead time but it is sensible to allow at least 3 days for submission, though they are often substantially quicker.

Google Play currently requires that your APK file be no more than 50MB.
Uou have the option to add an expansion files to the APK. The file can be up to 2GB.

You will need to have the following to submit:

- A correctly certificated and pacakaged app
- Access to the Google Play Developer area
- All assets at required resolutions
- App MetaData
- An app expansion file

Contact [Jenya Abakumov](mailto:jabakumov@antennainternational.com) to be added to these accounts.

Log in the Antenna Google Developer account [here](https://play.google.com/apps/publish/?dev_acc=00174053486469932631#AppListPlace)

**Expansion files upload process**

When submitting to the play store, you need to upload your expansion files after uploading the apk. Currently Google Play doesn't allow submitting an expansion file with the first versino of your app. When submitting a new app with expansion files, you must submit an app with build version 1 without an expansion file and then another one with build version 2 along with the expansion file.

[Brief Video Overview of how to upload Expansion files]( https://drive.google.com/file/d/0B-4IrW_F-LIRWjBCckhlQ2ROUGs/view?usp=sharing)

[Google Play Expansion file uploading](https://support.google.com/googleplay/android-developer/answer/2481797?hl=en-GB)

[Google Play Asset Sizes](https://support.google.com/googleplay/android-developer/answer/1078870)
[Google Play Guidelines](http://developer.android.com/distribute/googleplay/publish/preparing.html)
[Google Play Lauch Checklist](http://developer.android.com/distribute/googleplay/publish/preparing.html)
