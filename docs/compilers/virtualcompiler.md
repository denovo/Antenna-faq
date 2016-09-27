## Virtual Compiler

Virtual XPC Compiling




•	Insert Compiler drive and open Parallels Desktop

•	Make sure to open Microsoft Excel (Excel MUST be opened in order for the compiler to import spreadsheets)

•	Create ‘1’ & ‘2’ folders and place on the C drive


•	Open Compiler: xppmc icon on desktop.

![vcompielrlogo](/images/vcompiler_1.png)

•	Import Spreadsheet: File New/File/Import/Find Spreadsheet



•	Project Details: 
o	Change Audio Reference Number to 0001
o	Update your Title 1 & Title 2 as appropriate to Exhibition Title
o	Target Memory: usually 256MB (change to suit project size)
o	Output path: direct to number ‘1’ folder you created earlier
o	Hit ‘Apply’


![vcompielrlogo](/images/vcompiler_2.png)


•	Link up Mp3s:
o	Default directory (click the small box with 3 dots)
o	Browse
o	Locate folder with the MP3’s for each language
o	‘OK’

![vcompielrlogo](/images/vcompiler_3.png)


•	Save Compile: File/Save As/Project code & title.xpp 
•	Run Compile: File/Compile/Close
•	Cut & paste your 1 & 2 folders to the root of the E drive.
•	Open Command Prompt:
o	Cd\ <enter>
o	xpcopy <space> E:\1\ <space> E:\2\ <enter>
o	Enter ‘y’ for yes 
o	Once files have processed enter ‘exit’ & close.
o	Cut & paste 1 & 2 folders back into your project folder
•	Your number 2 folder now contains your image file





----------

## Troubleshooting


99% of Compiling issues are down to human error


When compiling, the best indicator as to whether your compile has been successful is the dialogue box that shows up when compiling.

If all the text is in BLUE this means the project has been successfully compiled (see example below)



![vcompielrlogo](/images/vcompiler_4.png)






















If any of the text is RED or Yellow, this indicates that there is a problem with
the compile. Below is an example of some problems that has occurred during 
a compile.


![vcompielrlogo](/images/vcompiler_5.png)



In this example we can see two problems.

Firstly, the text in red and yellow indicates that the mp3 file related to the stop can’t be found. 

This could be 1 of 2 things

1.	The Mp3 file is missing from the folder that you have linked to the stop.
2.	The Mp3 file name doesn't match the file name in the compiler.

In the example above you can see the MP3 file in the compiler is named VIP_ .mp3

This came up as an error as the actual mp3 file is name VI_ .mp3

(the actual file name and the name in the compiler must match exactly)


The second issue shown in the example above is flagged up in the Error Log window.

These Stops have green button links. But the field “Next Item” has not been filled in. this means the compiler knows that it needs to play the green button stop but it hasn't been told which stop to play next.

To solve this problem simply type in the stop number of the next stop that is meant to play when the green button is pressed.
