Iris 2 Base App 1.1 Technical Manual

Authors: J.Morgan, N.Edwards, G.Pooley, S.Fallis,T.Wilson, E.Claverie, J.Levey, 

**Contents:**

**Introduction**

**Default Settings/Reset codes**

**Font Themes**

**Cloud collection/ Batch Upload**

**Data analytics**

**Known issues/bugs**

**Issues/maintenance**

**Useful Contacts**

**Sales sheet, costings and lead times.**

**Naming conventions:**

    Naming conventions

    Global resources: Variables

    Font themes

    Custom Scripts

**Views:**

[00 DS Initialise](https://publisher.antenna.cc/apps/15851/views/159474#159474)

[01 Client Services Battery](https://publisher.antenna.cc/apps/15851/views/159474#170347)

[02 Language Screen](https://publisher.antenna.cc/apps/15851/views/159474#169746)

[02a language Confirmation](https://publisher.antenna.cc/apps/15851/views/159474#189465)

[03 Tour Screen](https://publisher.antenna.cc/apps/15851/views/159474#169745)

[04 Tour Start](https://publisher.antenna.cc/apps/15851/views/159474#173653)

[05 Splash Screen (static image1)](https://publisher.antenna.cc/apps/15851/views/159474#177594)

[05b Splash Screen (static image2)](https://publisher.antenna.cc/apps/15851/views/159474#177596)

[05c Splash Screen (fullscreen video)](https://publisher.antenna.cc/apps/15851/views/159474#177620)

[06 Main Menu Grid](https://publisher.antenna.cc/apps/15851/views/159474#169741)

[06 Main Menu List](https://publisher.antenna.cc/apps/15851/views/159474#169748)

[07 SubMenu](https://publisher.antenna.cc/apps/15851/views/159474#169740)

[08p Audio Portrait](https://publisher.antenna.cc/apps/15851/views/159474#169730)

[09l Video Landscape](https://publisher.antenna.cc/apps/15851/views/159474#169772)

[10 Keypad](https://publisher.antenna.cc/apps/15851/views/159474#189464)

[11 Next Stop P](https://publisher.antenna.cc/apps/15851/views/159474#173878)

[13 Text List Menu](https://publisher.antenna.cc/apps/15851/views/159474#180774)

[14 InfoView](https://publisher.antenna.cc/apps/15851/views/159474#181938)

**Introduction**

The Iris 2 Base app is an internally developed tool that encapsulates all the baseline functionality that is required in many of our day to day project builds. The framework of the application has been built out using the Eachscape platform, whom we have an on-going partnership with. 

**Default Settings/Reset codes**

* 999: Client service Battery Screen

* 987: Reboots the app.

* Charger reset settings: Set as 00 Charge remove View

* The Base app’s default theme setting is dark. To switch to light or custom, copy the Base app into a new workspace, delete the unneeded theme and change the base font’s in Theme’s and individual background colours on the top level canvas of each view.

* AI Player Type - Select the player type here. This will affect whether or not the app overrides the power settings of the device. In the case of Samsung the power settings, such as screen timeout and dimming will be defined by the app. In the case of the Iris 2 the power settings will be taken from the system, which is set by the Antenna Widget.

* AI Device>Iris Home Button View	- Set as 00 DS Initialize

* AI Device>Charge Remove View - Set as 00 Charge remove View

* Events>AI Device> On charge - trigger event ‘shutdown app’; This will clear the memory that the app is taking up. End Session - Ends the current data analytics session

**Installation of an Iris 2 Base app**

Install using Antenna Batch. Documentation can be found on base camp. 

Upon installing the device must be restarted. On restart you will be prompted to set the default launcher action. This should be set to your app, select always then select your app. Restart the device once more. Now whenever the device is restarted, the app is quit, or the app crashes it will relaunch the application automatically.

**Font Themes**

The standard font theme is Open Sans. This is all run through the "theme" section of the base app which is limited to having 5 fonts running through the whole app. Other fonts can be added and used, but you must make sure these are either cleared for use by our internal licensing department or the client owns the font and is solely responsible for the use of it in the app.

You must load and reference separate font weights as different files into the app.You will need to modify the font file for the additional weights beyond normal. Shaun F has been doing the modifications to the font files. Once loaded into the Publisher, take OpenSans for example, this will show the font name as Open Sans Bold and you should select the weight as bold also.

**Cloud Collection / Batch upload**

The base app currently runs from individually uploaded cloud collection assets. The batch upload will be introduced to the base apps in Q1 2015.

**Known issues/bugs**

* Double tap launches two audio tracks - a work around is in place at the moment by turning a variable on and off. ES will fix this in January. - Work around in place

Explanation of Double Tap workarounds in the IRIS2 Base App:

At launch or reset the v_tap_double is set to equal on

When any script is launched as an event the v_tap_double variable is set to equal on.

When that script is then run the v_tap_double variable is set to off, so that the script can not be launched twice (ie double tap).

After the script has executed the v_tap_double is then set back to on - on the preceding view/action so that the v_tap_double variable is reset.

Note the keypad view also now uses  this variable to stop the timer and the play button from launching, again it uses effectively the same method of on and off as well as cancelling the timer if needed.

You will need to add v_double_tap to extra views that you build within the base app as of 24/06/15 the ES double tpa fix still does not work on IRIS2.

![image alt text](image_0.png)

![image alt text](image_1.png)

**IRIS 2 reset codes and procedure**

Due to insecurities with the current IRIS2 reset procedure, and after trialing this new procedure at HRP Scotland - the following new procedure has been added to the IRIS2 base app.

The reset is activated from the keypad by typing 9317 and then hitting Iris2 play button.

This will navigate the user to the 01 Client Services Battery Screen.

Once here the user needs to type in 8432 and then hit the IRIS2 play button to exit the app to the settings page.

If this is entered incorrectly the app will need to be restarted by hitting the next button and beginning again the 9317 reset method.

The 01 Client Services Battery Screen contains an IRIS input text block that is hidden off view where there key press 8432 will be registered.

The battery tap to Exit has been removed only at the ES script level and remains in the battery html code itself - so if you need to reinstate the tap action method you will just need to add the appropriate actions into the "battery" script by adding the launch 00 Battery Exit App Layer.

**Issues/maintenance**

All base app issues should be logged and reported through Jira.

**Powerblock features**

Additional features have been built out as powerblocks. 

A PowerBlock is used to speed up app development. It is a reusable the part of an app, an app experience which remains identical in nature yet is used across multiple apps. For example Favorite, or a Navigation Bar.

These are 'part of an app' which are common to many apps.

PowerBlocks are made of Blocks and Layout, they come on one or multiple views.

PowerBlocks are shared across workspaces, app developer drop them into their app to speed up app development.

PowerBlocks are extremely useful to speed up app development

Another key benefit of PowerBlock is that they are configurable.

When a PowerBlock is dropped into an app, it can ask the app developer for specific values like what data source it will use, what image or what text will be used to instantiate the PowerBlocks.

**Survey Powerblock**

**Powerblock - 60 Survey**

Features: Introduction page with text and image. Privacy Policy (Optional. Button will not show if no content is entered into datasource). Question with Answers that itterate using the pattern layout block. Selected Answer state with Next button. Built in reporting logs event type as Survey_[[var:v_survey_question]] and value as [[var:v_survey_answer]]. Upon completion survey goes to thank you text (html) screen.

Pre-prepared datasources can be had by exporting and importing the app ‘60 Survey Datasources’ from the root of the Antenna Workspace.

Current issues: Unable to use html block over button block, so there’s no highlight state on the buttons currently. 

**Quiz Powerblock**

**Image Gallery Powerblock**

**Powerblock - 27 Image Gallery**

James to update

Iris view rotate doesn’t work. remove from view actions

**Interactive Timeline Powerblock (iOS Only)**

Eze to update

**Keypad for Samsung Powerblock**

**Powerblock - 10 Base Keypad for Samsung**

If you import 10 Keypad datasources into your space it will bring with it the graphics for the keys along with the colour settings for the edges of the buttons. Make sure you remove the other themes that you don’t need.

You’ll need to add the base_keypad collection to your initialize screen otherwise the elements won’t display correctly.

If you have issues with load times on any of the graphical assets then you can download the 640 versions and load them to the media folder then reference them directly. 

Swop out the script Keypad Active button to reference the goMainMedia script.

There are light and dark lines drawn on the edges of each key using 2 empty blocks. The fill color from those is taken from the datasource. If you need to turn these off you can either remove the value from the datasource or you can remove the fill from both of the two empty blocks.

Background image for the key rows. Theres one image that gets repeated behind each of the 4 rows. This is an image of a slight gradient.

**Interactive Map/Content Hotspots (not Android 2.3)**

**Powerblock - 58 Content Hotspots Powerblock**

This is built in html/javascript. It will work across any screen size.

A full detailed documentation of the block can be found in /FTP_Cloud/GUIDELINES_DOCUMENTS/Baseapps_2015/PowerBlocks/ContentHotspotsLincolnDeliverables.zip

Here’s a basic rundown of the powerblock

Set up your datasources. You can bring in the ContentHotspots config collection and the ContentHotspots Data collection if you wish from the app 58 Content Hotspots Datasources, which is in the root. Or alternatively you can add the columns needed that are in the Data collection to your main or sub collection. You should delete the dummy data.

Add the powerblock to your app, and set up the datasources.

The powerblock comes with 2 views set up, you can use one or both.

If you have multiple content hotspot segments then before the app goes to the view you will want to filter both the config collection and the data collection by stop number.

Currently the tap event for a hotspot fires the script goHotspot and the variable v_hotspot_id will contain the id of the hotspot tapped. There’s a show alert popup currently in this script,  you change this to trigger your content.

ContentHotspots Config Collection:

Notes - This is a text field used for alt text/voice over 

Img Orientation -  You can use this to determine which view your app should go to.

MainImage - The main image 

StopNo - field for filtering by

MetaMaxScale - the maximum zoom amount. 1 for no zoom. 

ContentHotspots Data Collection

StopNo - field for filtering by

HotspotID - The unique ID of your hotspot

XCoord - The position of the hotspot relative to the top left of your image

YCoord - The position of the hotspot relative to the top left of your image

HotspotImg Up - The regular state of the hotspot button

HotspotImg Down - The pressed state of the hotspot button

HotspotImg Inactive - The inactive state of the hotspot button

HotspotImg Visited - The visit state of the hotspot button

HotspotImg Width - The width of the hotspot image	

HotspotImg Height - The height of the hotspto image

Text Label - The text that appears next to the hotspot. Leave blank for none. Formatting and position can be adjusted in the css file.

Additional settings such as font control, background color can be changed in mapscript.css

Default hotspot images will be loaded if none are supplied. 

A full detailed documentation of the block can be found in /FTP_Cloud/GUIDELINES_DOCUMENTS/Baseapps_2015/PowerBlocks/ContentHotspotsLincolnDeliverables.zip

**Useful Contacts:**

(All can be found in the Antenna address book in outlook)

Sam Billington, Global ID Manager - Base App Product Owner.

TBC - Publisher and Data Product Owner.

Eamon Kerrigan - Iris 2 Product Owner.

Giles Pooley - Experience Designer EMEA.

Neville Edwards - Senior Interactive Designer EMEA

James Morgan - Senior Interactive Designer Americas

**Data Reporting - Overview**

Data Reporting is possible in all AI Base app builds. So see the most up to reporting offerings and documentation on proceses, please refer to the Data Reporting Documents on basecamp [https://antennaaudioltd.basecamphq.com/projects/12892673-data-reporting/log](https://antennaaudioltd.basecamphq.com/projects/12892673-data-reporting/log)

Below is an example of a standard report the client would get.

1. *Number of visitors per tour and per language*

2. *Number of visitors per stop and per language*

3. *Number of visitors by language*

4. *Number of visitors by tour*

5. *Top 10 most listened stops*

6. *Top 10 least listened stops*

7. *Number of visitors per tour over time (i.e. a timeline view)*

8. *Number of stops/commentaries that have been repeated*

9. *Detailed activity per tour, i.e. completed stops and cancelled stops*

10. *Number of devices used at any point in time*

11. *Average listening time per stop and per language*

12. *Number of operational instructions activated per language*

**Data Reporting - In App Setup**

To turn reporting on in the app go to Edit Application. Under 3rd Party>Antenna Reporting you will need to edit/confirm the following settings:

<table>
  <tr>
    <td>Field</td>
    <td>Value</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Antenna International Reporting</td>
    <td>Yes (default is No)</td>
    <td></td>
  </tr>
  <tr>
    <td>Use analytics</td>
    <td>Yes (default is No)</td>
    <td></td>
  </tr>
  <tr>
    <td>Reporting domain</td>
    <td>Blank or extdrive depending on device and on-site setup</td>
    <td>Blank will cause the reporting data to be sent over wifi to the Eachscape servers. Entering extdrive in here will cause the reports to be stored locally on the device.  Iris 2 this should be set to extdrive. The data is then harvested from the devices via the data chargers. For Samsung you can use either, but you should confirm which one to use with Eamon, Patrick and the account manager, as it is dependent on either there being wifi on-site or Data Chargers. For iOS devices you should leave this value as blank, as it is not possible to harvest data from the devices using a rack. </td>
  </tr>
  <tr>
    <td>Max reporting log size</td>
    <td>blank</td>
    <td>Leave as blank unless told otherwise. </td>
  </tr>
  <tr>
    <td>Reporting level</td>
    <td>Limited (Standard is default)</td>
    <td>This will limit the number of events captured. </td>
  </tr>
</table>


**Data Reporting - Block Configuration**

(as of July 16th) The Base app is already configured with the below setup. But should you need to modify an existing app you can use this guide. Audio and Video blocks are pre-coded to log information such as audio duration when a stop was cancelled. All you need to do is configure the blocks to report the ID of the stop, details below.

[[var:v_media_ID]] - Use this variable to store the unique stop/sub ID for your content. Set this on launching your content. The reason we use a different variable to do this is sometimes the stop or sub variable is set to be cleared on the done action of the audio/video block and will fire before the block has had a chance to report the data for the ending of the track. Resulting in the end action being reported without the contents unique ID.

Edit Application>Events>Basic

Set a variable v_tour_type = Adult - This is to set the default tour as Adult. It will get overwritten if there’s a tour selection page, but ensure there’s a value in the variable if there’s no tour selection page.

Audio and Video Blocks>Advanced>Reporting Value

[[var:v_tour_type]]_[[var:v_media_ID]] - Setting this will ensure each media event is logged with the tour type and stop number.

**Start New Session**

This action should sit on the language confirm button. It’s required for reporting. Both versions of the Base app have this coded as of Oct 13th 2015.

Dimension 1 should be filled in with: [[var:v_language]]

**End Session**

For non-iOS builds this action can be added to Iris Charger Connected under edit app.

For both types of builds you should also add it to the Reset script, which would be triggered by entering the reset code in the keypad.

**Data Reporting - Session Start and Session End**

In order to give us the flexibility to have Apps where the visitor can change tours we will be capturing the Start of the visitor’s Session on the Language Confirmation page. This means if needs be the visitor can be routed back to the Select Tour page without resetting their reporting session.

02a Confirm Btn Layout - Start New Session. D1=[[var:v_language]]

End Session is programmed in to Edit Application>Events>AI Device>Iris Charger Connected and also the reset code on the Keypad. The latter is the only valid option for iOS.

**Reporting - Lookup tables**

In order to correlate the data between the app and Splunk we need to provide Patrick with a lookup table of stops in the app. This will be in the form of a Excel sheet or CSV.

The easiest way to do this is to download your Cloud Collection as a CSV file. Open this CSV in something other than Excel, such as Open office. Excel does not open CSV files with the proper text encoding and you will lose your special characters. I recommend pasting this in to an Excel doc now. You’ll need to clean up your columns and merge two of them so you have the following:

 

Language – This is the 3 digit language code that should match the value that’s getting reported in Session Start in the D1 key

 

StopNo – Here we’re going to merge the tour column with the stop number separated by an underscore. To do this in Excel or Open office create a new column. In the first cell of that column enter = then on the same row click the cell of the Tour column then type &"_”& then click the cell of the Stop number column. The formula should now look something like =B1&”_”& Hit Enter and you should see it populate with the proper value, for example Adult_100. You now need to drag the bottom right of that cell down so it expands to fill the rest of the cells below that you have content for. Highlight these newly created cells and click copy. Now with the same cells highlighted you want to paste-special and select values only. What this will do is replace the formula with the values that it created. The contents of the cells will look the same.

 

Title – Here it might make sense to use the AV title of your items, especially if Titleline1 has really long titles.

 

TourType – This should reference the tour type and is the column you should have used for the merge above.

 

Duration – The duration in seconds of the media file. This column exists from the Cloud Collection import. If you are using old data sheets you can get these numbers easily by dropping your audio files in to iTunes on a playlist. You can then select all your tracks and copy paste the info out.

 

Type – audio or video

Here’s an example of a completed lookup table [https://docs.google.com/spreadsheets/d/11aofwZ_2lHmopdDPKnS6y-h4flEzl4w0pKhXxSwX56Q/edit?usp=sharing](https://docs.google.com/spreadsheets/d/11aofwZ_2lHmopdDPKnS6y-h4flEzl4w0pKhXxSwX56Q/edit?usp=sharing)

**Reporting - Splunk**

Splunk is a third party provider that takes the data from the app, via the Eachscape servers and produces reports and data visualizations. [https://da.antenna.cc/en-US/app/demo_analytics/analytics_demo?form.language=*&form.time.earliest=%40w0&form.time.latest=now&earliest=0&latest=](https://da.antenna.cc/en-US/app/demo_analytics/analytics_demo?form.language=*&form.time.earliest=%40w0&form.time.latest=now&earliest=0&latest=)

If the client has been sold a level of reporting that gives them access to the reports via Splunk then they must have a publisher account in order to access Splunk. The ID should set up this account and notify Patrick Shirkey <pshirkey@antennainternational.com> when it is done. 

To set up a new account: 

You must have the rights to Modify Users and Grant User Permissions (Shaun, Nev, Sam)

Navigate to the workspace Splunk Accounts. 

Create a new sub-workspace with the Institution's name. 

Go to the Manage Tab and add the user’s credentials.

Click create. 

Once you have added the user you should immediately edit the user’s account and remove the three permissions it automatically assigns them, so they are left with no permissions. 

As soon as the users account is created they will be sent an email from publisher.antenna.cc asking them go through the process to set up a password for the account. 

**Reporting QA**

** **

Once all the application has been set up for reporting you’re going to want to start looking at the data coming in. If you are on a Samsung or Iris 2 you’re going to want to switch the app to transmit the reporting data over wifi. Do this by going to Exit Application>3rd Party>Antenna Reporting and deleting the value extdrive from the Reporting domain field. Rebuild the app and give it to your QA person making sure they connect to an internet connected wifi network. As the app is used you should start to see data coming in Splunk right away.

 

Login to Publisher. Go to[ https://da.antenna.cc/en-US/app/launcher/home](https://da.antenna.cc/en-US/app/launcher/home)

 

Near the top you will be presented with a search field. This where you’ll be entering in search criteria to filter the raw data coming in.

 

Find and take note of your application ID, when have your application selected in Publisher it's the first 5 digit code in the URL

 

The first search criteria you’ll want to enter is: appl_id=15390 replace the 5 digit code here with your application ID.

 

This is going to show you all of the raw data coming in from any players that are connected to the internet and running the version of your app that has reporting turned on.

 

Each event will be tagged with an event_id. Here are the following events that we’re interested in with a breakdown of what different elements ‘keys’ represent:

<table>
  <tr>
    <td>event_id="_session_start_" obj_type="" value="" device_time="2015-06-18 15:02:25" source="1" d1="eng" d2="" sstime=1434639745 type="event" appl_id="19308" platform="iphone" unique_id="87D986B4-A69D-4652-98AC-A3F7EDA5D6A6" utc_offset="" version="0.0.102"</td>
  </tr>
</table>


*event_id* - this identifies the event as the ‘Start New Session’ action that we place on the langage confirm button.

device_time - the local time on the device when the event was logged.

*d1* - This should always contain the 3 digit language code. If it does not, then it’s likely either the correct variable is being used in the d1 field in the Start New Session action or the Start New Session action is happening before the language has been set.

sstime

*d2* - We’d previously used this to store the tour_id. However we’re no longer doing this, so make sure d2 is blank in your event. If it’s not, remove it from the D2 field in the Start New Session action in your app.

*sstime* - This is the time in Unix epoch format that the current Session started

*appl_id* - This is the application ID. We’ve used this in the search string above.

*unique_id*="87D986B4-A69D-4652-98AC-A3F7EDA5D6A6" - This is the unique ID of the device. *version *= the version or build number of your app. 

<table>
  <tr>
    <td>event_id="_audiostart_" obj_type="" value={} device_time="2015-06-18 15:27:15" source="4" d1="eng" d2=" sstime=1434639745 type="event" audio_name="Adult_704" audio_url="file://localhost/var/mobile/Applications/78A639B0-F22E-41A4-82E7-A1D6CFC7BD3F/298C43BC-4044-47F9-B353-DC79F843AF7D-230-0000004B9D12C5D9.app/app/local_data_68611/resource_000_451_391_1426278468_original.mp3" appl_id="19308" platform="iphone" unique_id="87D986B4-A69D-4652-98AC-A3F7EDA5D6A6" utc_offset="" version="0.0.102"</td>
  </tr>
</table>


*event_id *- This identifies the event as audiostart. This the logged when the audio block loads. 

*audo_name* - This will be the value that we’ve defined in the audio block’s reporting value* [[var:v_tour_type]]_[[var:v_media_ID]]*

*audio_url *- This is the path to the locally stored audio file that was played.

<table>
  <tr>
    <td>event_id="_audioend_" obj_type="" value={} device_time="2015-06-18 15:49:23" source="5" d1="eng" d2=" sstime=1434639745 type="event" audio_name="Adult_800" audio_url="file://localhost/var/mobile/Applications/78A639B0-F22E-41A4-82E7-A1D6CFC7BD3F/298C43BC-4044-47F9-B353-DC79F843AF7D-230-0000004B9D12C5D9.app/app/local_data_68611/resource_000_514_711_1428766189_original.mp3" audio_duration="13" audio_reason="cancel" appl_id="19308" platform="iphone" unique_id="87D986B4-A69D-4652-98AC-A3F7EDA5D6A6" utc_offset="" version="0.0.102"</td>
  </tr>
</table>


*event_id* - This identifies the event as audioend. This the logged when the playing of audio is cancelled or completed. 

*audio_duration* - The point in seconds at which the audio was cancelled or completed.

*audio_reason* - This will either show *cancel* or* complete. *

<table>
  <tr>
    <td>event_id="_videostart_" obj_type="" value={} device_time="2015-06-18 16:27:53" source="5" d1="main" d2="eng" sstime=1434643348 type="event" video_name="Info_HOW TO USE THIS GUIDE" video_url="local_data_71094/resource_000_346_368_1428703579_original.mp4" appl_id="19308" platform="iphone" unique_id="4E911FB3-493C-44B5-BB45-1EDF059CFDB8" utc_offset="" version="0.0.102"</td>
  </tr>
</table>


*event_id *- This identifies the event as videostart. This the logged when the video block loads. 

*audo_name* - This will be the value that we’ve defined in the video block’s reporting value field *[[var:v_tour_type]]_[[var:v_media_ID]]*

*video_url *- This is the path to the locally stored video file that was played.

<table>
  <tr>
    <td>event_id="_videoend_" obj_type="" value={} device_time="2015-06-18 16:32:32" source="1" d1="main" d2="eng" sstime=1434640920 type="event" video_name="Access_543" video_url="local_data_68611/resource_000_514_345_1429040544_original.mp4" video_duration="148" video_reason="completion" appl_id="19308" platform="iphone" unique_id="009D2B11-2635-4E42-B31A-236C10F9DAD5" utc_offset="" version="0.0.102"</td>
  </tr>
</table>


*event_id* - This identifies the event as videoend. This the logged when the playing of video is cancelled or completed. 

*video_duration* - The point in seconds at which the audio was cancelled or completed.

*video_reason* - This will either show *cancel* or* complete. *

Additional Search Criteria

Another very useful search string is version. We can use this to filter out specific versions or older versions of your app. You might want to do this if you’ve made a change to the reporting code and you don’t want the old bad reporting data contaminating your search results. You can use regular search terms here, so such = < > >= <=

An example of a search string that filters out versions older than 0.0.10 would be: apple_id=15390 version<=0.0.10

 

unique_id - You can filter your results by this, which is useful when you are trying to isolate test data from your device, or a colleagues device. For example: 

apple_id=15390 version<=0.0.10 unique_id ="87D986B4-A69D-4652-98AC-A3F7EDA5D6A6" 

**Checking the Data**

You’ll want to have someone, like the content designer run through the latest version of your app, in multiple languages, all the tours and hitting all the different types of content from the different access points, such as keypad, list etc. to make sure you have a good cross section of data to check against.

First we want to check that the Session Start event is properly capturing the selected Language. 

Enter the following search criteria replacing the app ID with your app’s ID. appl_id=15390 event_id="_session_start_"

Give Splunk time to parse the data. How long this takes will depending on the amount of data that’s been captured.

Remember, if you need to you can filter out specific versions of your app.

Now you have a list of all of the session starts, you want to make sure that if you have a multi-language app, that the d1 field in contains the 3 digit language code for every one of these events. If it doesn’t you’ll want to:

Check for duplicate Start New Session actions. In the publisher, with your app selected you can click the document button, and search your app for ‘Start New Session’. 

Make sure that there the language variable has been defined *before* the Start New Session action

Double check you are using the correct variable for the language code.

Audio and video events have the name fields are all filled in and not reporting any blank values.

Enter the following search criteria appl_id=15390 event_id="_audioend_"

This will give us a list of audio end events. We want to make sure that there are no cases where the id of the media is now being captured. Do check this we can refine our search as follows appl_id=15390 event_id="_audioend_" audio_name=""

This gives us a list of all of the instances where the audio block has reported a file being played and logged no media_id. If there are any items in this list you can see the audio_url, which is the audio file to try and deduce where and why this problem is occurring. Say the audio file is resource_000_514_317_1428693251_original.mp3, if you look at the XML for your cloud collection that contains the audio, you can search for the last number ‘1428693251’ to find the corresponding stop.

Possible problems:

An new audio player block is being used without being configured with the following value [[var:v_tour_type]]_[[var:v_media_ID]]

These variables have been deleted before the audio end event gets a chance to report.

These variables have not been defined before the content is launched.

Next you’ll want to do exactly the same for your videos, if you have any. Repeat the above replacing audio with video.

Any further info required please contact Namrata Sarmah <[nsarmah@antennainternational.com](mailto:nsarmah@antennainternational.com)> and James Morgan <jmorgan@antennainternational.com>

**Customising the iOS/Android Baseapp for Download or changing the keypad reset number**

To remove the 9317 reset script - select "10 Keypad Image Play Inactive Canvas" from Published blocks > events and remove the associated 9317 actions

**To reset type 9317 and then hit the inactive play button**

**Sales sheet, costings and lead times.**

**Naming conventions**

<table>
  <tr>
    <td>NAMING CONVENTIONS</td>
    <td></td>
  </tr>
  <tr>
    <td>Base App Name</td>
    <td>Located in: Antenna Root Directory.
Prefix: Base_</td>
  </tr>
  <tr>
    <td>Variable</td>
    <td>Prefix: v_
Has underscore between each name.
Name do not have capital letters unless it's an abreviation.</td>
  </tr>
  <tr>
    <td>Custom Scripts</td>
    <td>Prefix: cs_
Identical convention as Variable</td>
  </tr>
  <tr>
    <td>Cloud Collection</td>
    <td>Starts with: base_
Column: stick with template names for the time being. Can rename later
One central datasource for assets.
Asset columns: prefix with view number
Themes/devices are added a individual records</td>
  </tr>
</table>


**Global resources**

<table>
  <tr>
    <td>Variables</td>
    <td></td>
  </tr>
  <tr>
    <td>v_media_ID</td>
    <td>Unique id that is used in the audio and video reporting field block to identify the content</td>
  </tr>
  <tr>
    <td>v_tour_type</td>
    <td>Tour type filter value</td>
  </tr>
  <tr>
    <td>v_language</td>
    <td>Language filter value</td>
  </tr>
  <tr>
    <td>v_stop_title</td>
    <td>This is the title that appears on the titlebar of the audio, video, title, or gallery etc</td>
  </tr>
  <tr>
    <td>v_captions</td>
    <td>on/off the value that turns the captions on and off on the audio screen.</td>
  </tr>
  <tr>
    <td>v_gallerycaptions</td>
    <td>on/off the value that turns the gallery captions on and off on the image gallery</td>
  </tr>
  <tr>
    <td>v_closedcaptions</td>
    <td>on/off the value that turns the closed captions on and off on video screen. This value will be retained after the video has ended, so the choice of whether closed captions are on or off will be remembered</td>
  </tr>
  <tr>
    <td>v_media_file</td>
    <td>the audio or video file stored as a variable for use in the audio and video block</td>
  </tr>
  <tr>
    <td>v_Orientation</td>
    <td>The orientation of the content portrait or landscape</td>
  </tr>
  <tr>
    <td>v_playing</td>
    <td>shows if the audio is playing or not. This is used to prevent the controls from being removed from screen if the audio is not playing (so if FFW is being pressed the user doesn’t lose the progress bar)</td>
  </tr>
  <tr>
    <td>timer_count</td>
    <td>a counter that is used to determine if the audio controls need to be removed</td>
  </tr>
  <tr>
    <td>timer_count_b</td>
    <td>a counter that is used to switch the audio/video controls from their initial non-changing state (workaround for an issue where by the progress bar and time initially inherit the position of the previous track)</td>
  </tr>
  <tr>
    <td>v_submenu_title</td>
    <td></td>
  </tr>
  <tr>
    <td>v_keypad_value</td>
    <td>value for Iris Keypad input block</td>
  </tr>
  <tr>
    <td>v_stop_id</td>
    <td></td>
  </tr>
  <tr>
    <td>v_mediatype</td>
    <td>From Menu/Sub Menu/Keypad - define media type</td>
  </tr>
  <tr>
    <td>v_nextstop</td>
    <td></td>
  </tr>
  <tr>
    <td>v_keypad_active</td>
    <td>when set to true pressing a key will go to the keypad view. Usually true after the Start Tour Screen</td>
  </tr>
  <tr>
    <td>v_image_type</td>
    <td>Defines the image type. If slideshow or zoomable</td>
  </tr>
  <tr>
    <td>v_lastimage</td>
    <td>Stores the last image in a variable to be used on the next stop screen</td>
  </tr>
  <tr>
    <td>v_nextLevelSub</td>
    <td>A variable returned TRUE on audio playback successful if v_nextstop can be found on sub datasource</td>
  </tr>
  <tr>
    <td>v_nextLevelMain</td>
    <td>A variable returned TRUE on audio playback successful if v_nextstop can be found on mainmenu datasource</td>
  </tr>
  <tr>
    <td>v_nav</td>
    <td>drives the nav bar. values : menu/keypad/info</td>
  </tr>
  <tr>
    <td>v_welcome</td>
    <td>A variable used to determine whether or not the back button is show on 08 Audio Controls. This is set as true in the script goWelcome, then the variable is cleared on completion of the audio message</td>
  </tr>
</table>


**Assets naming conventions**** & sizing**

<table>
  <tr>
    <td>Asset </td>
    <td>Dark Theme</td>
    <td>Light Theme </td>
    <td>Custom Theme</td>
    <td>Asset Size</td>
  </tr>
  <tr>
    <td>Titlebar Background</td>
    <td>Title_bar_background_dark.png</td>
    <td>Title_bar_background_light.png</td>
    <td>Title_bar_background_custom.png</td>
    <td>480w x 74h</td>
  </tr>
  <tr>
    <td>BackButton</td>
    <td>back_button_off_dark.png</td>
    <td>back_button_off_light.png</td>
    <td>back_button_off_custom.png</td>
    <td>74w x 74h</td>
  </tr>
  <tr>
    <td>BackButtonOn</td>
    <td> back_button_on_dark.png</td>
    <td>back_button_on_light.png</td>
    <td>back_button_on_custom.png</td>
    <td>74w x 74h</td>
  </tr>
  <tr>
    <td>Background</td>
    <td> background_dark.png</td>
    <td>background_light.png</td>
    <td>background_custom.png</td>
    <td>480w x 800h</td>
  </tr>
  <tr>
    <td>DisclosureAudio</td>
    <td> disclosure_audio_dark.png</td>
    <td>disclosure_audio_light.png</td>
    <td>disclosure_audio_custom.png</td>
    <td>32w x 20h</td>
  </tr>
  <tr>
    <td>DisclosureVideo</td>
    <td> DisclosureVideo_dark.png</td>
    <td>DisclosureVideo_light.png</td>
    <td>DisclosureVideo_custom.png</td>
    <td>30w x 30h</td>
  </tr>
  <tr>
    <td>DisclosureSub</td>
    <td> DisclosureSub_dark.png</td>
    <td>DisclosureSub_light.png</td>
    <td>DisclosureSub_custom.png</td>
    <td>30w x 30h</td>
  </tr>
  <tr>
    <td>DisclosureGallery</td>
    <td>DisclosureGallery_dark.png</td>
    <td>DisclosureGallery_light.png</td>
    <td>DisclosureGallery_custom.png</td>
    <td>30w x 30h</td>
  </tr>
  <tr>
    <td>DisclosureTimeline</td>
    <td>DisclosureTimeline_dark.png</td>
    <td>DisclosureTimeline_light.png</td>
    <td>DisclosureTimeline_custom.png</td>
    <td>30w x 30h</td>
  </tr>
  <tr>
    <td>DisclosureGame</td>
    <td>DisclosureGame_dark.png</td>
    <td>DisclosureGame_light.png</td>
    <td>DisclosureGame_custom.png</td>
    <td>30w x 30h</td>
  </tr>
  <tr>
    <td>DisclosureText</td>
    <td>DisclosureText_dark.png</td>
    <td>DisclosureText_light.png</td>
    <td>DisclosureText_custom.png</td>
    <td>30w x 30h</td>
  </tr>
  <tr>
    <td>DisclosureOther</td>
    <td>DisclosureOther_dark.png</td>
    <td>DisclosureOther_light.png</td>
    <td>DisclosureOther_custom.png</td>
    <td>30w x 30h</td>
  </tr>
  <tr>
    <td>CSNextOff</td>
    <td>CSNextOff_dark.png</td>
    <td>CSNextOff_light.png</td>
    <td>CSNextOff_custom.png</td>
    <td>300w x 150h</td>
  </tr>
  <tr>
    <td>CSNextOn</td>
    <td>CSNextOn_dark.png</td>
    <td>CSNextOn_light.png</td>
    <td>CSNextOn_custom.png</td>
    <td>300w x 150h</td>
  </tr>
  <tr>
    <td>NextStopReturnBtnOff</td>
    <td>next_stop_return_btn_off_dark.png</td>
    <td>next_stop_return_btn_off_light.png</td>
    <td>next_stop_return_btn_off_custom.png</td>
    <td>480w x 156h</td>
  </tr>
  <tr>
    <td>NextStopReturnBtnOn</td>
    <td>next_stop_return_btn_on_dark.png</td>
    <td>next_stop_return_btn_on_light.png</td>
    <td>next_stop_return_btn_on_custom.png</td>
    <td>480w x 156h</td>
  </tr>
  <tr>
    <td>NextStopContinueBtnOff</td>
    <td>next_stop_continue_btn_off_dark.png</td>
    <td>next_stop_continue_btn_off_light.png</td>
    <td>next_stop_continue_btn_off_custom.png</td>
    <td>480w x 156h</td>
  </tr>
  <tr>
    <td>NextStopContinueBtnOn</td>
    <td>NextStopContinueBtnOn_dark.png</td>
    <td>NextStopContinueBtnOn_light.png</td>
    <td>NextStopContinueBtnOn_custom.png</td>
    <td>480w x 156h</td>
  </tr>
  <tr>
    <td>CaptionsOff</td>
    <td>captions_off_dark.png</td>
    <td>captions_off_light.png</td>
    <td>captions_off_custom.png</td>
    <td>96w x 74h</td>
  </tr>
  <tr>
    <td>CaptionsOn</td>
    <td>captions_on_dark.png</td>
    <td>captions_on_light.png</td>
    <td>captions_on_custom.png</td>
    <td>96w x 74h</td>
  </tr>
  <tr>
    <td>HighlightHex</td>
    <td>#aaaaaa</td>
    <td>#aaaaaa</td>
    <td>#aaaaaa</td>
    <td>#aaaaaa</td>
  </tr>
  <tr>
    <td>KeypadBackButtonOn</td>
    <td>keypad_back_button_on_dark.png</td>
    <td>keypad_back_button_on_light.png</td>
    <td>keypad_back_button_on_custom.png</td>
    <td>70w x 48h</td>
  </tr>
  <tr>
    <td>KeypadBackButtonOff</td>
    <td>keypad_back_button_off_dark.png
.png</td>
    <td>keypad_back_button_off_light.png</td>
    <td>keypad_back_button_off_custom.png</td>
    <td>70w x 48h</td>
  </tr>
  <tr>
    <td>KeypadCancelButton</td>
    <td>KeypadCancelButton_dark.png
</td>
    <td>KeypadCancelButton_light.png
</td>
    <td>KeypadCancelButton_custom.png
</td>
    <td>70w x 48h</td>
  </tr>
  <tr>
    <td>TourStartImage</td>
    <td>tour_start_image_dark.png</td>
    <td>tour_start_image_light.png</td>
    <td>tour_start_image_custom.png</td>
    <td></td>
  </tr>
  <tr>
    <td>ListRowImage</td>
    <td>list_row_image_dark.png</td>
    <td>list_row_image_light.png</td>
    <td>list_row_image_custom.png</td>
    <td></td>
  </tr>
  <tr>
    <td>SplashImage1</td>
    <td>splash_image1_dark.jpg</td>
    <td>splash_image1_light.jpg</td>
    <td>splash_image1_custom.jpg</td>
    <td>480w x 800h</td>
  </tr>
  <tr>
    <td>SplashImage2</td>
    <td>splash_image2_dark.jpg</td>
    <td>splash_image2_light.jpg</td>
    <td>splash_image2_custom.jpg</td>
    <td>480w x 800h</td>
  </tr>
  <tr>
    <td>SplashVideo</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>480w x 800h</td>
  </tr>
  <tr>
    <td>NavMenuOff</td>
    <td>nav_menu_off_dark.png</td>
    <td>nav_menu_off_light.png</td>
    <td>nav_menu_off_custom.png</td>
    <td>480/<number of icons>w x 74</td>
  </tr>
  <tr>
    <td>NavMenuOn</td>
    <td>nav_menu_on_dark.png</td>
    <td>nav_menu_on_light.png</td>
    <td>nav_menu_on_custom.png</td>
    <td>480/<number of icons>w x 74</td>
  </tr>
  <tr>
    <td>NavKeypadOff</td>
    <td>nav_keypad_off_dark.png</td>
    <td>nav_keypad_off_light.png</td>
    <td>nav_keypad_off_custom.png</td>
    <td>480/<number of icons>w x 74</td>
  </tr>
  <tr>
    <td>NavKeypadOn</td>
    <td>nav_keypad_on_dark.png</td>
    <td>nav_keypad_on_light.png</td>
    <td>nav_keypad_on_custom.png</td>
    <td>480/<number of icons>w x 74</td>
  </tr>
  <tr>
    <td>NavInfoOff</td>
    <td>nav_info_off_dark.png</td>
    <td>nav_info_off_light.png</td>
    <td>nav_info_off_custom.png</td>
    <td>480/<number of icons>w x 74</td>
  </tr>
  <tr>
    <td>NavInfoOn</td>
    <td>nav_info_on_dark.png</td>
    <td>nav_info_on_light.png</td>
    <td>nav_info_on_custom.png</td>
    <td>480/<number of icons>w x 74</td>
  </tr>
  <tr>
    <td>CCButtonOff</td>
    <td>cc_button_off_dark.png</td>
    <td>cc_button_off_light.png</td>
    <td>cc_button_off_custom.png</td>
    <td></td>
  </tr>
  <tr>
    <td>CCButtonOn</td>
    <td>cc_button_on_dark.png</td>
    <td>cc_button_on_light.png</td>
    <td>cc_button_on_custom.png</td>
    <td></td>
  </tr>
</table>


### Custom Scripts

### Below is a glossary of custom scripts used within the base app. Giving the definition of their purpose.

<table>
  <tr>
    <td>Scripts</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>addAudioControls</td>
    <td>08p Audio Portrait handler</td>
  </tr>
  <tr>
    <td>addVideoControls</td>
    <td>09l Video Lanscape handler</td>
  </tr>
  <tr>
    <td>battery</td>
    <td>go to Battery Exit App Layer</td>
  </tr>
  <tr>
    <td>DoubleTapforSub</td>
    <td>go to SubMenu using tap action</td>
  </tr>
  <tr>
    <td>goKeypad</td>
    <td>10 Keypad handler</td>
  </tr>
  <tr>
    <td>goMainMedia</td>
    <td>Appends Multimedia from the associated data collections, sets variables, titles and timers. Launches media one of  2 types of views: 09l Video Landscape view | or| 08p Audio Portrait view</td>
  </tr>
  <tr>
    <td>goNextMain</td>
    <td>Launches 2nd level content (07: SubMenu: 08p Audio Portrait: 09l Video Landscape). Appends the next record of Multimedia from the associated data collections, sets variables, titles and timers. </td>
  </tr>
  <tr>
    <td>goNextStopSub</td>
    <td>Appends Multimedia data e.g, Slides and Images from the data collections (08p Audio Portrait: 09l Video Landscape)</td>
  </tr>
  <tr>
    <td>goSubMenu</td>
    <td>Sets multimedia attributes  of the selected item on the submenu (e.g stop-id, media_file, captions) and then Launches the app to (08p Audio Portrait |or| 09l Video Landscape) view based on the media type. Appends Multimedia from the associated data sources, a timer is also initialized.</td>
  </tr>
  <tr>
    <td>goTourStart</td>
    <td>Tour starter and Splash Screen enabler
05 Splash Screen (static Image) - Timer</td>
  </tr>
  <tr>
    <td>refreshKeypad</td>
    <td>Clears keypad entry </td>
  </tr>
  <tr>
    <td>refreshNav</td>
    <td>Clears Keypad entry and switches to views 06 Main Menu List / 10 Keypad / 14 Infoview</td>
  </tr>
  <tr>
    <td>removeAudioControls</td>
    <td>Sets the containers on the audio view to display spacer/empty blocks thus removing the titlebar and controls</td>
  </tr>
  <tr>
    <td>removeAudioControlsGate</td>
    <td>A gate for the script below to only remove controls when the audio is playing</td>
  </tr>
  <tr>
    <td>removeVideoControls</td>
    <td>Sets the video control functionality (e.g. Tap Actions and Fullscreen Mode)</td>
  </tr>
  <tr>
    <td>reset</td>
    <td>Resets commonly used variables and datasources back to the default, then then app launches back to the 01 Client Services Battery View.</td>
  </tr>
  <tr>
    <td>setLanguageFilters</td>
    <td>Confirms the users input for Language preference, does the required data source filtering based upon the "language" selected, and then launches the app to the 02a Language Confirmation View</td>
  </tr>
  <tr>
    <td>setTourFilters</td>
    <td>Confirms the users input for Tour preference, does the required data source filtering based on the “tour” selected, and  launches the app to the 04 Tour Start View</td>
  </tr>
  <tr>
    <td>goNextSub</td>
    <td>A script fired from view 11 Next Stop P that launches 2nd level content</td>
  </tr>
  <tr>
    <td>goNav</td>
    <td>Script fired when a nav bar item is tapped. Refreshes the selector blocks and changes view</td>
  </tr>
</table>


**Views:**

**[00 DS Initialis**e](https://publisher.antenna.cc/apps/15851/views/159474#159474)**:**

**Purpose: Runs through data sheets and makes sure that all data is initialised. **

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>Other Dependencies</td>
    <td>[[ds:/base_languages (Local Collection)/record/_index]]</td>
  </tr>
  <tr>
    <td></td>
    <td>[[ds:/base_mainmenu (Local Collection)/record/_index]]</td>
  </tr>
  <tr>
    <td></td>
    <td>[[ds:/base_slides (Local Collection)/record/_index]]</td>
  </tr>
  <tr>
    <td></td>
    <td>[[ds:/base_submenu (Local Collection)/record/_index]]</td>
  </tr>
  <tr>
    <td></td>
    <td>[[ds:/base_themes (Local Collection)/record/_index]]</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>N/A</td>
    <td>Switch to Another View</td>
    <td></td>
  </tr>
</table>


**01 Client Services Battery**

**Purpose: To allow operational staff to check the battery and general status of the player.**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>Button Up image</td>
    <td>[[ds:/base_themes (Local Collection)/record/csnextoff_original]]</td>
  </tr>
  <tr>
    <td>Button Down Image</td>
    <td>[[ds:/base_themes (Local Collection)/record/csnextoff_original]]</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts/Events used</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>01 Version Text</td>
    <td>n/a</td>
    <td>Displays the operating system and version</td>
  </tr>
  <tr>
    <td>01 Battery status</td>
    <td>n/a</td>
    <td>Displays the current battery level</td>
  </tr>
  <tr>
    <td>01 CS Next Button</td>
    <td>Switch to another view</td>
    <td>Switches to 02 Language screen</td>
  </tr>
  <tr>
    <td>01 Wifi Status prompt</td>
    <td>n/a</td>
    <td>Indicates the Wifi connection status.</td>
  </tr>
  <tr>
    <td>01 Disconnected</td>
    <td>n/a</td>
    <td></td>
  </tr>
  <tr>
    <td>o1 Connected</td>
    <td>n/a</td>
    <td></td>
  </tr>
  <tr>
    <td>01 Status Selector</td>
    <td>n/a</td>
    <td>Displays the network status</td>
  </tr>
  <tr>
    <td>Spacer 3</td>
    <td>n/a</td>
    <td></td>
  </tr>
</table>


**02 Language Screen**

**Purpose: To allow the operational team or user/visitor to choose a language.**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>02 Langauge Titlebar Background Image</td>
    <td>[[ds:/base_themes (Local Collection)/record/titlebarbackground_original]]</td>
  </tr>
  <tr>
    <td>02 Language title bar</td>
    <td>[[ds:/base_languages (Local Collection)/record/languagetitletext]]</td>
  </tr>
  <tr>
    <td>02 Langague List Text 1
</td>
    <td>[[ds:/base_languages (Local Collection)/record/languagetitle]]</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>02 Langauge Titlebar Background Image</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02 Language List Pattern</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02 Language List item Group</td>
    <td>setLanguageFilters</td>
    <td>Defines the data source filters depending on the language selected and prompts the app the switch to the 02a language Confirmation view</td>
  </tr>
</table>


**02a language Confirmation**

**Purpose: To allow the operational team or user/visitor to cancel/reselect or confirm/proceed the language they have selected.**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>02a Title Image</td>
    <td>[[ds:/base_themes (Local Collection)/record/titlebarbackground_original]]</td>
  </tr>
  <tr>
    <td>02a Confirm Btn Background</td>
    <td>[[ds:/base_themes (Local Collection)/record/listrowimage_original]]</td>
  </tr>
  <tr>
    <td>02a Confirm Btn Image</td>
    <td>[[ds:/base_languages (Local Collection)/record/confirmstartimg_original]]</td>
  </tr>
  <tr>
    <td>02a Cancel Background</td>
    <td>[[ds:/base_themes (Local Collection)/record/listrowimage_original]]</td>
  </tr>
  <tr>
    <td>02a Cancel Image</td>
    <td>[[ds:/base_languages (Local Collection)/record/confirmreselectimg_original]]</td>
  </tr>
  <tr>
    <td>02a Title Text</td>
    <td>[[ds:/base_languages (Local Collection)/record/languagetitle]]</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>02a Selected Language Text</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02a Language Confirm Text</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02a Title Layout</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02a Title Image</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02a Title Text</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02a Confirm Btn Layout</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02a Confirm Btn Background</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02a Confirm Btn Text </td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02a Confirm Btn Image</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02a Cancel Btn layout</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02a Cancel Btn Text</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02a Cancel Background</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>02a Cancel Image</td>
    <td></td>
    <td></td>
  </tr>
</table>


**03 Tour Screen**

**Purpose: To allow the operational team or user/visitor to choose which tour/trail they would like to take for example: Adult/Family/VIP**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>03 Tour Button</td>
    <td>[[ds:/base_tour_selection (Local Collection)/record/icon_medium]]</td>
  </tr>
  <tr>
    <td>03 Tour Button Text </td>
    <td>[[ds:/base_tour_selection (Local Collection)/record/tourtext]]</td>
  </tr>
  <tr>
    <td>03 Tour Button Text 2</td>
    <td>[[ds:/base_tour_selection (Local Collection)/record/tourtext]]</td>
  </tr>
  <tr>
    <td>03 Tour Button 2</td>
    <td>[[ds:/base_tour_selection (Local Collection)/record/icon_medium]]</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>03 Tour Screen Title Bar</td>
    <td>n/a</td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>03 Tour Titlebar Background Image</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
  <tr>
    <td>03 Tour Button Pattern</td>
    <td></td>
    <td>Pattern </td>
    <td></td>
  </tr>
  <tr>
    <td>03 Tour Button Group</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>03 Tour Button Text</td>
    <td></td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>03 Tour Button</td>
    <td>setTourFilters</td>
    <td>Button </td>
    <td>Defines the data source filters depending on the Tour selected and prompts the app the switch to the 04 Start tour view</td>
  </tr>
  <tr>
    <td>03 Tour Button Group 2</td>
    <td>setTourFilters</td>
    <td>Canvas </td>
    <td></td>
  </tr>
</table>


**04 Tour Start**

**Purpose: To allow the operational team or user/visitor to have a starting place to start the tour/experience.**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>04 Tour Start Image</td>
    <td>[[ds:/base_languages (Local Collection)/record/starttourimage_original]]</td>
  </tr>
  <tr>
    <td>04 Tour Start Background Image</td>
    <td>[[ds:/base_themes (Local Collection)/record/tourstartimage_original]]</td>
  </tr>
  <tr>
    <td>Canvas</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>04 Tour Start Image</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
  <tr>
    <td>04 Tour Start Background Image</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
  <tr>
    <td>Canvas (4.11)</td>
    <td>goTourStart</td>
    <td>Canvas</td>
    <td>Activates the keypad functionality, invokes a 3 second timer and then prompts the app the switch to the 05 Splash Screen (static image 1) view</td>
  </tr>
</table>


**05 Splash Screen (static image1)**

**Purpose: To allow clients/Antenna to have a branded splash screen at the start of the tour/experience (purpose applies to 05b and 05c)**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>05 Splash I</td>
    <td>[[ds:/base_themes (Local Collection)/record/splashimage1_original]]</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>05 Splash I</td>
    <td>Switch to Another View</td>
    <td>Image </td>
    <td></td>
  </tr>
</table>


**05b Splash Screen (static image2)**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>05b Splash Image</td>
    <td>[[ds:/base_themes (Local Collection)/record/splashimage2_original]]</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>05b Splash Screen (static image2)</td>
    <td>Switch to Another View</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Canvas 39</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>05b Splash Image</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
</table>


**05c Splash Screen (fullscreen video)**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>05c Splash video fullscreen</td>
    <td>[[ds:/base_themes (Local Collection)/record/splashvideo_original]]</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>05c Splash video fullscreen</td>
    <td></td>
    <td>Full Screen Video</td>
    <td></td>
  </tr>
  <tr>
    <td>05c Video Skip Button</td>
    <td>Switch to Another View</td>
    <td>Button </td>
    <td>Prompts the app the switch to the 06 Main Menu List view</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


**06 Main Menu Grid**

**Purpose: To allow the visitor to choose different types of content. A standard Main menu Grid/List allows visitors to choose a range of content tailored to the sites needs, for example: and audio stop, a video, a sub menu.**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>06 Main Menu Grid Background Image</td>
    <td>Image source not set</td>
  </tr>
  <tr>
    <td>06 Main Menu Grid Text</td>
    <td>[[ds:/base_languages (Local Collection)/record/menutitle]]</td>
  </tr>
  <tr>
    <td>06 Main Menu Grid Title 2</td>
    <td>[[ds:/base_mainmenu (Local Collection)/record/titleline2]]</td>
  </tr>
  <tr>
    <td>Main Menu Grid Text 5</td>
    <td>[[ds:/base_mainmenu (Local Collection)/record/titleline1]]</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>06 Main Menu Grid Title Bar</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu Grid Titlebar</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu Grid Background Image</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu Grid Back Button</td>
    <td>Switch to Another View</td>
    <td>Button </td>
    <td>Prompts the app to step back to the previous view</td>
  </tr>
  <tr>
    <td>06 Main Menu Grid Pattern</td>
    <td></td>
    <td>Pattern </td>
    <td></td>
  </tr>
  <tr>
    <td>06 Thumbnail Group</td>
    <td>Switch to Another View</td>
    <td>Canvas </td>
    <td>Prompts the app to switch to the 08p Audio Portrait view</td>
  </tr>
  <tr>
    <td>06 Main Menu Group</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>06Main Menu Grid Disclosure Icon</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu Grid Thumb Title Stack</td>
    <td></td>
    <td>Stack</td>
    <td></td>
  </tr>
  <tr>
    <td>Spacer 3</td>
    <td></td>
    <td>Empty Space</td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Stack</td>
    <td></td>
    <td>Stack </td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Keypad Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
  <tr>
    <td>Nav Menu Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Info Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
</table>


**06 Main Menu List**

**Purpose: To allow the visitor to choose different types of content. A standard Main menu Grid/List allows visitors to choose a range of content tailored to the sites needs, for example: and audio stop, a video, a sub menu.**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>06 Main Menu List Titlebar Background Image</td>
    <td>Image not set</td>
  </tr>
  <tr>
    <td>06 Main Menu List Thumbnail</td>
    <td>[[ds:/base_mainmenu (Local Collection)/record/thumbmainmenu_original]]</td>
  </tr>
  <tr>
    <td>06 Main Menu List Titlebar Text</td>
    <td>[[ds:/base_languages (Local Collection)/record/menutitle]]</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>06 Main Menu List Titlebar Canvas</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu List Titlebar Background Image</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu List Titlebar Text</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu List - Pattern</td>
    <td></td>
    <td>Pattern</td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu List Canvas</td>
    <td></td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu List Thumbnail</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
  <tr>
    <td>Selector 3</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu List Text Canvas</td>
    <td></td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu List Text Stack</td>
    <td></td>
    <td>Stack</td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu List Text Line 2</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu List Text Line 3</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>06 Main Menu List Text Line 1</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Stack</td>
    <td></td>
    <td>Stack </td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Keypad Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Info Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Menu Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
</table>


**07 SubMenu**

**Purpose: Much like the Main list view a SubMenu allows the visitor to choose different types of layer content, for example: and audio stop, a video, a sub menu.**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>07 Sub Image Hero - Image</td>
    <td>[[ds:/base_mainmenu (Local Collection)/record/imagesubmenu_original]]</td>
  </tr>
  <tr>
    <td>07 Sub Menu Disclosure - Selector</td>
    <td>[[ds:/base_submenu (Local Collection)/record/mediatype]]</td>
  </tr>
  <tr>
    <td>07 Sub Menu - Thumbnail</td>
    <td>[[ds:/base_submenu (Local Collection)/record/thumbsubmenu_original]]</td>
  </tr>
  <tr>
    <td>07 Sub Menu Title Line 3</td>
    <td>[[ds:/base_submenu (Local Collection)/record/titleline3]]</td>
  </tr>
  <tr>
    <td>07 Sub Menu Title Line 2</td>
    <td>[[ds:/base_submenu (Local Collection)/record/titleline2]]</td>
  </tr>
  <tr>
    <td>07 Sub Menu Title Line 1</td>
    <td>[[ds:/base_submenu (Local Collection)/record/titleline1]]</td>
  </tr>
  <tr>
    <td>07 Sub Menu Disclosure - Selector</td>
    <td>[[ds:/base_submenu (Local Collection)/record/mediatype]]</td>
  </tr>
  <tr>
    <td>Image 11_1</td>
    <td>[ds:/base_themes (Local Collection)/record/titlebarbackground_original]]</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>07 Sub Image Hero - Canvas</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>07 Sub Image Hero - Image</td>
    <td></td>
    <td>Image</td>
    <td></td>
  </tr>
  <tr>
    <td>07 Sub Menu List - Pattern</td>
    <td></td>
    <td>Pattern </td>
    <td></td>
  </tr>
  <tr>
    <td>07 Sub Menu List - Canvas</td>
    <td>goSubMenu</td>
    <td>Canvas </td>
    <td>Sets multimedia attributes  of the selected item on the submenu (e.g stop-id, media_file, captions) and then Launches the app to (08p Audio Portrait |or| 09l Video Landscape).</td>
  </tr>
  <tr>
    <td>07 Sub Menu - Thumbnail</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
  <tr>
    <td>07 Sub Menu Text - canvas</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>07 Sub Menu Text Stack</td>
    <td></td>
    <td>Stack </td>
    <td></td>
  </tr>
  <tr>
    <td>07 Sub Menu Title Line 3</td>
    <td></td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>07 Sub Menu Title Line 1</td>
    <td></td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>07 Sub Menu Title Line 2</td>
    <td></td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>07 Sub Menu Title Line 2</td>
    <td></td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>07 Sub Menu Disclosure - Selector</td>
    <td></td>
    <td>Selector </td>
    <td>Displays the disclosure Icon e.g. Audio, Video or Sub</td>
  </tr>
  <tr>
    <td>07 Sub Menu List - TitlebarCanvas</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>Image 11_1</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
  <tr>
    <td>07 SubMenu Back Button</td>
    <td>refreshKeypad</td>
    <td>Button </td>
    <td>Steps back to the previous view</td>
  </tr>
  <tr>
    <td>07 Sub Menu Titlebar Text</td>
    <td></td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Stack</td>
    <td></td>
    <td>Stack </td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Info Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Keypad Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Menu Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
</table>


**08p Audio Portrait**

**Purpose: To play audio tracks, portrait images and textual information including captions and titles related to the onsite content.**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>09l Titlebar Background:

</td>
    <td>[[ds:/base_themes (Local Collection)/record/titlebarbackground_original]]</td>
  </tr>
  <tr>
    <td>08 Controls Layout</td>
    <td>[[ds:/base_themes (Local Collection)/record/titlebarbackground_original]]</td>
  </tr>
  <tr>
    <td>08 Audio Back Btn</td>
    <td>[[ds:/base_themes (Local Collection)/record/backbutton_original]]</td>
  </tr>
  <tr>
    <td>09l Titlebar Background</td>
    <td>[[ds:/base_themes (Local Collection)/record/titlebarbackground_original]]</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>08 Audio Canvas</td>
    <td>Switch to Another View</td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>08p Image Type Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Audio Player</td>
    <td>refreshKeypad</td>
    <td>Audio Player</td>
    <td></td>
  </tr>
  <tr>
    <td>08 Titlebar Container</td>
    <td></td>
    <td>Container </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Audio Titlebar Group</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>09l Titlebar Background</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Audio Title</td>
    <td></td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Audio Back Btn</td>
    <td></td>
    <td>Button </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Fullscreen Container</td>
    <td></td>
    <td>Container </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Empty</td>
    <td></td>
    <td>Empty Space</td>
    <td></td>
  </tr>
  <tr>
    <td>08 Controls Captions Container</td>
    <td></td>
    <td>Container </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Captions HTML Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Controls Container</td>
    <td></td>
    <td>Container </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Controls Layout</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Caption Selector</td>
    <td>[[var:v_captions]]</td>
    <td>Selector </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Audio Progress Layout</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Audio Start Time Text</td>
    <td>[[prop:app/audioCurrentTime]]</td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>08 Audio End Time Text</td>
    <td>[[prop:app/audioDuration]]</td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>08p Audio Progress Bar HTML 2</td>
    <td></td>
    <td>HTML </td>
    <td></td>
  </tr>
  <tr>
    <td>08p Audio Progress Bar HTML</td>
    <td></td>
    <td>HTML </td>
    <td></td>
  </tr>
</table>


**09I Video Landscape**

**Purpose: To play compressed Video files in landscape orientation and textual information including captions and titles related to the onsite content.**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td> Video Player</td>
    <td></td>
  </tr>
  <tr>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>08 Audio Back Btn</td>
    <td>[[ds:/base_themes (Local Collection)/record/backbutton_original]]
</td>
  </tr>
  <tr>
    <td>Titlebar Background</td>
    <td>[[ds:/base_themes (Local Collection)/record/titlebarbackground_original]]</td>
  </tr>
  <tr>
    <td>09L Controls Background</td>
    <td>[[ds:/base_themes (Local Collection)/record/titlebarbackground_original]]</td>
  </tr>
  <tr>
    <td>09L End Time</td>
    <td></td>
  </tr>
  <tr>
    <td>09L Current Time</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>09l Video Player</td>
    <td>Switch to Another View</td>
    <td>Video</td>
    <td>Rolls back to the previous view</td>
  </tr>
  <tr>
    <td>09 Fullscreen container</td>
    <td></td>
    <td>Container</td>
    <td></td>
  </tr>
  <tr>
    <td>09 Controls On Tap</td>
    <td>removeVideoControls</td>
    <td>Empty Space</td>
    <td>clear video controls layer</td>
  </tr>
  <tr>
    <td>09 Video Title Container</td>
    <td></td>
    <td>Container</td>
    <td></td>
  </tr>
  <tr>
    <td>09l Video Title layout</td>
    <td></td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>08 Audio Back Btn</td>
    <td>refreshKeypad</td>
    <td>Button </td>
    <td></td>
  </tr>
  <tr>
    <td>09l Video Player Title Text</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>09l Titlebar Background</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
  <tr>
    <td>09l Video Player Title Text</td>
    <td></td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>09l Video Controls Container</td>
    <td></td>
    <td>Container </td>
    <td></td>
  </tr>
  <tr>
    <td>09L Controls Layout</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>09L Controls Background</td>
    <td></td>
    <td>Image </td>
    <td></td>
  </tr>
  <tr>
    <td>09 CC Content Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
  <tr>
    <td>09L Progress Layout</td>
    <td></td>
    <td>Canvas </td>
    <td></td>
  </tr>
  <tr>
    <td>09L Current Time</td>
    <td></td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>09L Video Progress 2</td>
    <td></td>
    <td>HTML </td>
    <td></td>
  </tr>
  <tr>
    <td>09L Video Progress 1</td>
    <td></td>
    <td>HTML </td>
    <td></td>
  </tr>
  <tr>
    <td>09L End Time</td>
    <td></td>
    <td>Text </td>
    <td></td>
  </tr>
  <tr>
    <td>09 CC Button Content Selector</td>
    <td></td>
    <td>Selector </td>
    <td></td>
  </tr>
</table>


**10 Keypad**

**Purpose: The keypad allows visitors to select or cancel and reselect content based on numerical entries. The Keypad has a 3 second autolaunch functionality.**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>Text </td>
    <td>[[ds:/base_languages (Local Collection)/record/keypadenternumbertext]]</td>
  </tr>
  <tr>
    <td>Text Input</td>
    <td>[[var:v_keypad_value]]</td>
  </tr>
  <tr>
    <td>Image </td>
    <td>[[ds:/base_themes (Local Collection)/record/keypadbackbuttonoff_original]]</td>
  </tr>
  <tr>
    <td>Selector [Keypad]</td>
    <td>[[var:v_match]]</td>
  </tr>
  <tr>
    <td>Selector [Nav]</td>
    <td>[[var:v_nav]]</td>
  </tr>
  <tr>
    <td>Keypad Delete Off</td>
    <td>[[ds:/base_themes (Local Collection)/record/keypadbackbuttonoff_original]]</td>
  </tr>
  <tr>
    <td>Enter Number Title</td>
    <td>[[ds:/base_languages (Local Collection)/record/keypadenternumbertext]]</td>
  </tr>
  <tr>
    <td> Keypad Invalid Text Selector</td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>Canvas</td>
    <td></td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>10 Text Enter Number Title</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>10 Canvas Text Input - Iris Keypad</td>
    <td></td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>10 Text Input Iris Keypad 1</td>
    <td>goMainMedia</td>
    <td>Text Input</td>
    <td>Launches media assigned to a keypad entry in 2 types of views: 09l Video Landscape view | or| 08p Audio Portrait view</td>
  </tr>
  <tr>
    <td>10 Keypad Delete Container</td>
    <td></td>
    <td>Container</td>
    <td></td>
  </tr>
  <tr>
    <td>10 Keypad Delete Off</td>
    <td></td>
    <td>Image</td>
    <td></td>
  </tr>
  <tr>
    <td>10 Keypad Invalid Text Selector</td>
    <td></td>
    <td>Selector</td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Stack</td>
    <td></td>
    <td>Stack</td>
    <td></td>
  </tr>
  <tr>
    <td>00 NavKeypad Selector</td>
    <td></td>
    <td>Selector</td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Menu Selector</td>
    <td></td>
    <td>Selector</td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Info Selector</td>
    <td></td>
    <td>Selector</td>
    <td></td>
  </tr>
</table>


**11 Next Stop P**

**Purpose: Allows users to select related layered content to the previously listened or viewed track.**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>Canvas 35:
Background Image</td>
    <td>[[var:v_lastimage]]</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>Canvas 35</td>
    <td>-</td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>11 Next Stop Overlay</td>
    <td></td>
    <td>Image</td>
    <td></td>
  </tr>
  <tr>
    <td>11 Next Stop Prompt</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>11 Continue Group</td>
    <td></td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>11 Continue Text</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>11 Next Stop Cancel</td>
    <td></td>
    <td>Button</td>
    <td></td>
  </tr>
  <tr>
    <td>11 Cancel Group</td>
    <td></td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>11 Cancel Text</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>11 Next Stop Cancel</td>
    <td></td>
    <td>Button</td>
    <td></td>
  </tr>
</table>


**13 Text List Menu**

**Purpose: Allows visitors to select information about the site for example: Opening times, credits, membership details via a texted based list view.**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>Text 59</td>
    <td>[[ds:/base_mainmenu (Local Collection)/record/titleline1]]</td>
  </tr>
  <tr>
    <td>Text 60</td>
    <td>[[ds:/base_mainmenu (Local Collection)/record/titleline2]]</td>
  </tr>
  <tr>
    <td>Text 61</td>
    <td>[[ds:/base_mainmenu (Local Collection)/record/titleline3]]</td>
  </tr>
  <tr>
    <td>Selector 19</td>
    <td>[[ds:/base_mainmenu (Local Collection)/record/mediatype]]</td>
  </tr>
  <tr>
    <td>13 Text List Menu Title Text</td>
    <td>[[ds:/base_languages (Local Collection)/record/menutitle]]</td>
  </tr>
  <tr>
    <td>Image 53</td>
    <td>Image not set</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>Canvas (4.11)</td>
    <td>n/a</td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>13 Text List Menu Pattern Pattern</td>
    <td></td>
    <td>Pattern</td>
    <td></td>
  </tr>
  <tr>
    <td>Canvas 22</td>
    <td></td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>13 Text List Menu Title Text</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>Image 53</td>
    <td></td>
    <td>Image</td>
    <td></td>
  </tr>
  <tr>
    <td>13 Text List Menu  Title</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>13 Text List Menu Pattern</td>
    <td></td>
    <td>Pattern</td>
    <td></td>
  </tr>
  <tr>
    <td>13 Text List Canvas </td>
    <td></td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>13 Selector 19</td>
    <td></td>
    <td>Selector</td>
    <td></td>
  </tr>
  <tr>
    <td>Canvas 46</td>
    <td></td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>Stack 10</td>
    <td></td>
    <td>Stack</td>
    <td></td>
  </tr>
  <tr>
    <td>Text 61</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>Text 60</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
  <tr>
    <td>Text 59</td>
    <td></td>
    <td>Text</td>
    <td></td>
  </tr>
</table>


**14 InfoView:**

**Purpose: Allows the visitor to view a text only screen containing information about the site**

<table>
  <tr>
    <td>Associated Image /Asset</td>
    <td>Location</td>
  </tr>
  <tr>
    <td>14InfoView-Titlebar-BackgroundImage</td>
    <td>[[ds:/base_themes (Local Collection)/record/titlebarbackground_original]]</td>
  </tr>
  <tr>
    <td>14InfoView-TitlebarText</td>
    <td>[[ds:/base_languages (Local Collection)/record/infotitle]]</td>
  </tr>
</table>


<table>
  <tr>
    <td>Associated Custom (MyBlocks):</td>
    <td>Custom scripts used</td>
    <td>Block Type</td>
    <td>Custom script/Event purpose</td>
  </tr>
  <tr>
    <td>14 Infoview</td>
    <td>n/a</td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>Canvas 48</td>
    <td></td>
    <td>Canvas</td>
    <td></td>
  </tr>
  <tr>
    <td>30 TextScreen HTML</td>
    <td></td>
    <td>HTML</td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Stack</td>
    <td></td>
    <td>Stack</td>
    <td></td>
  </tr>
  <tr>
    <td>00 Nav Kepad Selector</td>
    <td></td>
    <td>Selector</td>
    <td>Navigation</td>
  </tr>
  <tr>
    <td>00 Nav Menu Selector</td>
    <td></td>
    <td>Selector</td>
    <td>Navigation</td>
  </tr>
  <tr>
    <td>00 Nav Info Selector</td>
    <td></td>
    <td>Selector</td>
    <td>Navigation</td>
  </tr>
  <tr>
    <td>14 Infoview-TitlebarCanvas</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>14 Infoview-TitlebarText</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>14 Infoview-TitlebarBackgroundImage</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


