==The Use of this page==

This page is designed to contain useful information, tips, tricks, workarounds and solutions to problems experienced with the AA compiling software in all its forms.

==XP+ & XP Classic Compiler==

===Creating a Project from Scratch (XP+ and XP Classic)===

====Creating a your mp3s====
Before you compress your wavs you're going to want to find out how much memory your player has. This will determine the bitrate you compress your files at. Contact the Tech Department for this. Below is a table showing the general guidelines for storage size and bit rates. (Please note this table is actually for XP Classic. Because of firmware the actual space remaining on the player for the program is less than the size of the onboard memory. 256Mb=222Mb actual, 512=461Mb and 1Gb=929Mb)
 
{| border="1"
|+ 
! Bit Rate !! 256Mb Player !! 512Mb Player !! 1Gb Player
|-
! 64kbps
| 444mins or 7hrs 24mins
| 922mins or 15hrs 21mins
| 1858mins or 30hrs 57mins
|-
! 96kbps
| 296mins or 4hrs 56mins
| 614mins or 10hrs 14mins
| 1238mins or 20hrs 38mins
|-
! 112kbps
| 253mins or 4hrs 12mins
| 526mins or 8hrs 46mins
| 1061mins or 17hrs 41mins
|-
! 128kbps
| 222mins or 3hrs 42mins
| 461mins or 7hrs 40mins
| 929mins or 15hrs 29mins
|}

To calculate length of time based on storage size and bit rate, use this calculation:

(Size in MB x 1024) / (Bit rate in kbps x 8) = length in minutes

If you know storage size and length, use this to calculate bit rate:

(Size in MB x 1024) / (Length in mins x 8) = approximate bit rate

(use what ever bit rate is closest beneath your calculation)

If you know bit rate and length, use this to calculate storage:

(Minutes x bitrate in kbps) / 128 = size in MB

=====Adobe Audition=====

Now we have determined what bitrate our mp3s are going to be we are going to use Adobe Audition to compress our wavs.
Open up Audition. Go to FILE>BATCH PROCESSING.
This will pop up a window with several tabs.

Go to Tab 1. Add Files.

Simply click the add files button and navigate to your folder containing the wavs. Select them all and add.

Tab 2. Run script.

If you are compiling the project for XP+ you will want to leave this blank. However if you are compiling for an XP Classic you will want to select the script .7s @ start. This will add .7s silence to the start of all the mp3s. We do this because the XP Classic has a habit of not playing from the very start of the track.

Tab 3. Ignore this.

Tab 4. New Format.

Here you will have to set the format for the Wavs. Note if you have stereo and mono wavs you will have to set the compression for both. Select Mp3PRO(Fhg)(*.mp3). Leave the default boxes checked, which should be CBR and Mp3. When selecting the rate you will see several options for that rate. Here you want to select the highest frequency poss. For example 96kbps ('''44,100hz'''). Note '''avoid using 24,4000hz''' as the XP has had problems playing this frequency.

Tip : One thing I like to do to save space on players is to bounce tracks without music or sfx as mono then the tracks with as stereo. I'll compress the stereo tracks at say 96kbps (44,100hz) and the mono tracks at 48kbps '''mono''' (44,100hz). There should be hardly any difference in audible quality of these files.

Tab 5.

Select the destination for your compressed files. There's a few checkboxes here that are pretty self-explanatory.

====Compiling====

'''Step 1'''

Create a folder inside the Projects folder on C: (Note in the US there are currently two compilers. Compiler 1 is for projects starting A-L. Compiler 2 is M-Z. Inside that folder, create 2 folders: ENG and COMPILED.

In the Audio Tools folder, click on the XP+ Compiler icon. This will open up the first window of the compiler. 

EDIT OPTIONS. A new menu will come up with a BROWSE option. Direct it to find your COMPILED folder.This tells the compiler where to put your finished files.

Go to FILE>NEW>XP+ PROJECT/XP-Classic Project

There are two slightly different ways to start this. 

'''Step 2 with a speadsheet'''
If you don't have a spreadsheet see Step 2 without a speadsheet.

A spreedsheet which would usually be provided by the Producer (previously known as CM). This process tends to happen more in the UK than the US. Here is a link to the template [http://www.antennaaudio.net/login/mediawiki/images/c/c4/XP%2BSPREADSHEET.xls Compile template] Simply click export to xls to save it. If you have to input the data yourself here is a guide on how to do it.

Okay, open your spreadsheet. Ignore the Serial, Language (unless you are doing anything other than English, which I’m going to assume you are not) and Default Directory columns at the top. Under Disk Title, type the Museum Name or the Tour Name over the old tour name. It can only be 11 characters long, so abbreviate. 

Next, fill out the Gallery Guide numbers (stop no) in the GG# column. Put the Stop Titles in the next column.Stop titles can be 13 characters long- note the numbers at the top as a guide. 

Next, fill out the REF column with as many numbers as you have GG#s. It’s there to keep track of how many stops you actually have. Once you’ve figured that out, put that number at the top under ‘Number of Tracks’. The computer will fill out the TRK number, which I think is the same. Also, make sure you have the column at the end with ENG in it filled out for every stop you have. 

Finally, If you have any second levels, you must put a capital ‘X’ in both the ‘strt’ and ‘pse’ columns. ‘Start’ tells it to go to the track; ‘Pause’ tells it to go into pause and wait for the listener to press the ‘Play’ button. Then put the GG# of the second level in the ‘nxt’ column. 

Now save this into a folder with your PROJECT NAME into the PROJECTS folder on drive C:.

If this is the first or only compile of this spreadsheet, you can import your spreadsheet we talked about above by going to FILE>IMPORT. 
This is going to open up Excel and import the information from the spreadsheet.

You will now see a list of the stops on your tour. If you have multiple languages you can change the list you are viewing by clicking on the different language in the top portion of the screen. After checking all the information is correct you can now go to Step 3.

!(images/XPClassicCompile.JPG)
This is a screenshot of the XP Classic compiler

'''Step 2 without a speadsheet'''

If you don't have a spreadsheet to import you are going to have to enter all the stop data manually.

In the top section you'll need to select the system language first. Above we just have one language, that being English. Leave the next box at codepage 850. This means you can use certain special characters with accents etc. if you wish. Next is the language code. For this project it is ENG, our abbreviation of English. This should match the first 3 characters of our audio files. Next is the Production Title. This will show on the top of the screen on the player when it's not playing any messages. This is usually filled with the site name or exhibition name. The next column is automatically filled in by the compiler. It's a count of the number of tracks on the selected language. Default directory should be clicked and pointed towards the relevant folder containing your mp3s. 


In the bottom section you will see a list of the stops for the selected language.
The first column is the Stop no. This is the number the visitor will enter into their player to hear the message. The next two columns are used for the text that will display on two lines when the stop is playing. Both of these lines hold a max of 13 characters each and use Codepage 450. The next box shows the filename. This will be blank to start, so you need to click on the dots to the right and point towards the desired mp3. The next box is used if we want to link the current stop to another stop. For example we want to link to 1022 when the visitor gets to the end of stop 102. The box after this is Start Tour. This is always clicked whenever we want to link two tracks. Pause on Tour is optional for links. Checking the box means when the visitor has listened to stop 102 the player will load stop 1022 and pause. Pressing play will play 1022. When we use this link we usually accompany it with an audio prompt at the end of the stop saying for example 'If you want to hear more press play'. If we leave this box unchecked, at the end of stop 102 it will automatically start playing 1022. The next box is No Return. We primarily use this for XP Classic programs with links. Click the box where ever you have links to second levels. If this isn't checked the player will automatically loop back to the track if the playing was interrupted by keying in another number. For simplicity we shall ignore the other columns.

'''Step 3'''

Go to the button at the top labeled CHANGE under the Project Details label. Click it, and you’ll get one of these screens (depending on which compiler): 
!(images/Plus options.JPG)
!(images/Classic options.JPG)

Okay, there’s a few of these we’re going to ignore right now. The ones that need filling in are: 

AUDIO PID (XP+ only): This number is a record of each consecutive XP+ tour. We’re starting at 2001. Look at the list on the bulletin board to get your number and write it on the list. Make sure you click relax PID check so you can change the PID value.<BR>
AUDIO REF: Can be anything. <BR>
CODE PAGE: IGNORE<BR>
TITLE #1:Typically we put the site name here<BR>
TITLE #2:Put the date of the compile here<BR>
(Title 1&2 Show on screen when the machine is rebooted or taken out of the rack. It is useful to put the date on here so when the program is updated the tech can determine which image the player has loaded)<BR>
Min and Max display times: IGNORE<BR>
FIRMWARE COMM FILE: IGNORE<BR> 
FIRMWARE PLAY FILE: IGNORE<BR>
TARGET MEMORY: Select target memory that corresponds to the card memory capacity in the player.
OUTPUT PATH: The default setting should already be set to output. The compiler will automatically create this folder in your project folder .<BR> 
BITMAP FILE: IGNORE

When you’ve got this all filled in, hit APPLY and then OKAY.

Go to FILE>SAVE and save your program as an .xpp file. This file is VERY IMPORTANT and needs to be kept in the folder with the spreadsheet. 

Now go to FILE> COMPILE! It’ll do it’s thing and chew all of your files up. If it had trouble finding any files, it will tell you. It also, which is a nice touch, will tell you if you have any duplicate numbers in your spreadsheet. When this is done, take a quick look in your COMPILE folder. You should see files that look like this:

!(images/XPplus_compiled.jpg)

Now all you have to do now is go to the FILE menu and select COPY TO MEDIA. When it’s done doing its thing, check your COMPILED folder. It should look like this:

!(images/XPplus_Compiled2.jpg)

'''XP+''' 

The final step is to insert a compact flash card into your reader.  It’ll appear on your computer just like an external hard drive. Make sure you remove any of the old files on the card first. Then drag all those files onto the card, and you’re done! That card can be popped into a player and is ready to go. ALMOST.

Remember that PID number you input earlier? 2000-something? You’re going to need that. 

When trying to play the program on a XP+ for the first time, you must first: 
press 07, volume +, #, then enter the PID# and press the play button.

'''XP Classic'''

The final step for the classic is to take the Classic USB cable, plug the USB end into the computer and plug the 35mm jack into the right hand jack on the bottom of the player. Copy the contents of the compiled folder to the player which will show up as an external drive. 

The XP Classic will automatically detect the PID and load the program.


And you’re done!

===Updating previous Projects===

There's several different ways to do this depending on a what player the tour is on and if the tour is large and being updated on-site. 

====XP+ updated on-site (client's site)====

Some of our clients like the Metropolitan Museum of Art and The Getty have large perms on XP+ players. Because of the size of the program and the length of time it would take to upload 1000s of players with that much data we are going to compile in such a way that the tech can simply plug a CF card into a rack to update the program. There are some things we need to do in order to make this work effectively:
<BR>One of these is to make sure that the ''Output'' folder is kept intact. This is the folder where the compiler keeps all the information on the current compile. If this folder gets deleted when it comes to doing the final step of the compile all the stops will be marked as new stops. This will result in the rack re-uploading all of the audio on the program meaning the tech will possibly have to spend days doing the upload, rather than an hour or two.
<BR>The other thing to do is to make sure that if you are replacing the audio for an existing stop that you give that mp3 a unique name, different to the existing name. The way I like to do this with the Getty is to add the year and batch title to each filename. Eg. eng_2_fy09b3.mp3 This also enables us to keep track of the stops should the Museum decide they want to reinstate a stop after removing it.

Now adding new stops to this existing tour is simple. Simply add them to the list at the bottom of the compile and point the compiler to each audio file. If you are updating an existing stop simply find where the old stop is and point the compiler to the new (differently named) audio file.

Make sure to go into the project details (button near the top right of the window) and change the date on Title #2. Some on-site Techs like us to add/remove a * on the Production Title on the main page so they can differentiate between the old program and the updated program.

When you've added all the stops you need you are ready to click File>Compile. Once this is done you want to make sure you have a clean compiled directory. You can rename the old one if you wish to keep an archive of it, then just create a new folder called Compiled. Now go to File>Copy to Media. This will pop up a box. You want to make sure that the target path is pointing towards the folder you just cleaned out or created. Then click copy to media. Once this is done copy the contents of the compiled folder to a CF card.

Note: One thing I like to do for the Getty is to simulate the upload that will happen on-site. For this we need a player with the version of the tour that is currently on-site. You can take the contents of the Compile folder you just backed up, put it on a card and put it in a player. Now take the CF card containing the new compile and go to an XP+ rack in tech. Remove all the players from the rack and place your XP+ (containing the old tour) in to the rack. On the keypad on the right of the rack press 1 and then play. This will search for players in the rack. Hopefully it should pick up the one player you just put in. If it doesn't, jump up and down, throw a fit and throw the player at the nearest tech whilst cursing about crappy Antenna equipment. However if it does pick up the player, place the CF card in to the slot near the keypad. If you use the rack near Tony you're in for some more cursing. It likes to reset whenever you put a card in or press the keypad. Once you have the card in and it can see the player all you need to do is press 3 then play on the rack keypad. This is going to upload just the new content to the player. If you have time to burn you can sit there and watch the progress. Once it's finish hand it off to a producer to check!

====XP+/XP-Classic Uploaded by tech at Antenna====

When we don't need to worry about just uploading the latest files things get a bit simpler for compiling. There are two ways you can update an existing compile.
<BR>One is to export the current compile to a spreadsheet. Go to File>Export and give it a name and save. This will dump the information from the compile into a spreadsheet. From here you can simply add your extra tracks on the the end of the spreadsheet. And follow the instructions on importing and compiling [http://www.antennaaudio.net/login/mediawiki/index.php/Compiler_Troubleshooting_and_Tips#Compiling here]

If you don't wish to use the spreadsheet method you can simply add new stops to this existing tour once you have opened up the last version of the compile. Go to File>Open and find the project folder and open the last xpp file.

Simply add the additional stops you want to the list at the bottom of the compile and point the compiler to each audio file. If you are updating an existing stop simply find where the old stop is and point the compiler to the new audio file. Old tracks can be deleted by right clicking the row at the left of the compiler and clicking delete.

Make sure to go into the project details (button near the top right of the window) and change the date on Title #2. Some on-site Techs like us to add/remove a * on the Production Title on the main page so they can differentiate between the old program and the updated program.

When you've added all the stops you need you are ready to click File>Compile. Once this is done you want to make sure you have a clean compiled directory. You can rename the old one if you wish to keep an archive of it, then just create a new folder called Compiled. Now go to File>Copy to Media. This will pop up a box. You want to make sure that the target path is pointing towards the folder you just cleaned out or created. Then click copy to media. Once this is done copy the contents of the compiled folder to a CF card and pop it in a player for checking.

===What the various non-audio files are===

====Manifest File====
The '''manifest file''' is the one with the '''.XPM''' extension in the CONTROL or output folders.  The name of this file is the same as the PID number assigned during compiling.  So if you want to know the PID for a project, look at the manifest file in its control folder!  
This file is overwritten each time you make a change to a project in the compiler.  It's the file which compares the content on a CF card and the content on the players, tells the rack which files to upload.  If you open it in wordpad, it contains a complete list of all the MP3 files in a production (after they have been renamed to the XP+ file names). --[[User:Pford|Pford]] 07:54, 22 November 2006 (PST)
====XPC File====
The '''XPC''' file is the one in the CONTROL folder with the .XPC extension.  Duh.  This contains information about which languages (Shows) are assigned which codes, and is important for troubleshooting if things go really, really wrong.  If you open it in wordpad it will tell you what languages are present in a production and give you a vital clue to cracking the XP+ code - the languages start at zero, and the fourth character of every MP3 file name corresponds to its language code.

'''For instance, if French is the second language on a player, it will be called 1, and all the French tracks will have 1 as their fourth character.'''  No other language will have 1 as its fourth character.  And so on.  --[[User:Pford|Pford]] 07:58, 22 November 2006 (PST)

====Show Files====
The '''Show Files''' are the ones beginning '''SHW''' in the control folder.  The fourth digit denotes the language for each one (see XPC file), and the 5th digit denotes the number of revisions the file has had.  '''Everything in the compiler starts from zero''', so the first time you do a compile, all the MP3s will end in zero, and all the show files will have zero as their 5th digit (aswell as the first language on a player starting from zero, as above).

So if French is the second language, and you've compiled the project twice, the show file for French will be called '''SHW11***'''.

Unlike the Manifest file, the compiler does not overwrite or delete previous show files.  Every time you compile a project it creates a new one for each language or tour.

These are very useful files, as for each language they contain a complete list of the display text (extracted from the spreadsheet) with stop numbers and the resulting file name the audio is converted to on compiling.  So if you're looking for a particular file with nothing else to go on but the media folders or the output folder, the Show files will tell you what you want to know!  Just open it in wordpad. --[[User:Pford|Pford]] 08:20, 22 November 2006 (PST)


===Xporter Show Codes===

This one baffled us for a while, but has now been explained!  Thanks Eric!

If anyone in Tech asks you for  a Show Code to help them set up Xporter (the not-often-sold Datalogging part of the Xplorer universe), this is '''not the same''' as anything else above!  For some reason - I have no idea what - these codes start at '''48''' and are sequential.  So for Xporter purposes, the first language on a player is 48, the second 49, and so on.  Glad that little mystery's solved. --[[User:Pford|Pford]] 09:24, 22 November 2006 (PST)

==XPclassic Issues==

===Known Issues===
===="No Return" flags====
The first major issue with the Classic is easily fixed.  If you have any tracks which need to link to other tracks, either automatically or sending the player into the "pause" state, you need to make sure you also tick the '''no return''' flags for these tracks in the compiler.  This is a good habit to get into for the XP+ compiler also, in case projects switch equipment at short notice.

If these flags are not ticked, what you will experience is as follows:  if you are listening to one track and then key in another number before the track has finished, when you are finished listening to the track you keyed in the player will jump back to the point at which you left the first track.  This is intentional and is not a firmware problem - the XP+ and V1 were apparently suppposed to work in this way but have never worked properly, so please do this going forward for all XP+ and Classic projects!--[[User:Pford|Pford]] 05:51, 22 November 2006 (PST)

====Latency Problem====
With larger Classic projects, there is an increasing problem with latency - i.e. a delay before stops begin playing.  This is currently being worked on but is not fixed at the moment (Dec 2006).  Unfortunately, the bigger the production, the longer the delay - sometimes up to 15 seconds - and there have been reports of some stops not playing at all.  This is due to the differing way in which the Classic works from the XP+.  The XP+ is non-linear, whereas the Classic arranges files on a playlist according to the order of the Excel spreadsheet.  Tracks in the first language on the xls should play almost instantly, but tracks in the last language can experience long delays while the player scans its list for the files.  Oh dear.--[[User:Pford|Pford]] 03:22, 19 December 2006 (PST)

The best thing to do when you have a large number of stops on a player is to make sure that the stops which are likely to be heard close to each other, are close to each other in the compile. For example : We have a show that is in a museum with 5 floors. The numbers range from the 100s (1st floor) to 500s (5th floor). When we compile this we want to make sure that 100s are at the start of the compile, then the 200s, 300s and so on. What this will mean is that when the user changes from Stop 101 to Stop 104 on their player there will be a minimal delay. Changing from 101 to 501 however would be a much greater delay. So just think about how the tracks will be listened to in the Galley. Try and put second levels to tracks right after the 1st level in the compile. 

There is also quite a substantial delay when changing languages on a player with a lot of stops.

==XPv1 Compiler==

===Smart uploading===
Ah, the good old V1.  How we love thee.  Waiting hours for an upload to finish because watching progress bars is our hobby.

Well, no more.  At least, you can cut the time down if the circumstances are right.

If you're adding languages / tours to a previously existing production, you can avoid re-uploading the whole thing.  Because the uploader works sector-by-sector for V1 uploading, you simply find out at what sector your current production ends and the added languages begin.

To do this, first compile your new image.  Don't change the order of tracks in the old languages.  

Open the compiler, and then click File > Open and choose the image file.  You'll have to change the file type in the window at the bottom.

Select the first of the new languages in the top window.

Scroll across and look for the boxes saying Start Sector on the first track for this language.

That's the point you want to upload from.

When you open WINHOST and select PROGRAM XPLORER, you can enter the sector to start from, and away you go!  You'll also need to go back and re-upload sector zero on its own too, to make sure it's updated.  --[[User:Pford|Pford]] 08:56, 22 November 2006 (PST)

The second thing that is quite useful to know are text only changes. If only the top-line, bottom-line, track number to key-in or any other thing for any track in any language is changed BUT NO AUDIO AT ALL, you can suffice by re-compiling and only uploading the FIRST sector of the image file. All this info is stored in the first sector, called the Table of Content (TOC). Massive time saver!! Again, make sure you don't alter any order in tracks or languages. Just keep the same order and re-edit current lines.
