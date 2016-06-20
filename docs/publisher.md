<h1>Eachscape Publisher</h1>

[Eachscape Support Site](https://eachscape.com/support-center/?nabe=5006181924864000:0&_ga=1.228133341.1969783910.1425394149&utm_referrer=http%3A%2F%2Fsupport.eachscape.com%2Fcustomer%2Fen%2Fportal%2Farticles%2F1292883-target-platforms)

-----

##Naming of folders and apps within Publisher

Apps should be built within the Regional Project Folders  
Within that folder apps should be named as follows:
>ENG17900 ExampleApp Name IRIS2

Please make sure when updating a permanent collection app to update and change the name of the project folder and app.
If necessary make an export of the existing app to be updated with a new project code.
Details of "clone" feature.
 : to be discussed on the 23rd march.

##Generating Builds

**See also Generating Builds on the Baseapp Tab**

When generating new builds you should use the NOTES field in Publisher to update the build with relevant information. If this is a final commercial or onsite build it is mandatory that you put that information into the NOTES field.
It can also be used to input relevant testing information - for example "testing Button change" or "new content fix" - common sense notes for each build.

Notes are entered here:

![enter image description here](https://lh3.googleusercontent.com/Q4gmsnX6ZjU1AA1cZpnqWntAg1dojTQ64tbUeWf9YhjkQtzh0XKY8pMzQWob6x0d9i3O=s800 "Screen Shot 2016-03-21 at 22.02.43.png")



The notes show up under the build history here:

![enter image description here](https://lh3.googleusercontent.com/8ePDB-Eem8ogjF-_lNDYkjy3wZN8zGRI5GYkOxQfNZd9MRxKwIGUSpVwgyK1DKVbc0Wg=s800 "Screen Shot 2016-03-21 at 22.02.13.png")


It would also maybe be a good point to put obb filename in NOTES field.
Though the hope is to that we can now rule that out by using the Samsung Batch tool.



testing links
How should we generate apps for iPods 3, 4, 5, 6?
-> which OS, Pixel perfect, Scaled? Why?
-> Release candidate or not?
-> Quick update or not quick update?
-> What about Alternate Provisioning Organization?
-> When do we need commercial builds? (on site / DL)
-> Could commercial provisioning be added by ID when creating the app
-> Which devices do we use ES to build to and which settings should they be set to when generating app builds  (eg Samsung, IRIS, XP-Iris, Ipod, iPad etc.)
How can I made an export of the content of my cloud collection, to duplicate it or transfer it to a cloud collection in another space, whilst preserving special characters.?
Why does my Enterprise commercial build fail? Answer, you need to make sure you are not using a wild card provisioning file. If one doesn't already exist, create an app ID on the developer portal and create a provisioning file using that app ID. Download the provisioning file then upload to your apps workspace. Edit app and set the provisioning as Adhoc and Commercial. Regenerate a release candidate then create a Commercial build from that.
Play Audio in Background - http://support.eachscape.com/customer/portal/articles/1563905



> Themes

Changes here will not Quick Update



  </tr>
  <tr>
    <td>14 Infoview-TitlebarBackgroundImage</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>


<h1>Useful Tips and Tricks in Publisher</h1>



- HTML/CSS/JS tips
- Specific Publisher Usage examples
- Miscellaneous Tips
- Useful References and Resources

This document’s

purpose is to provide a brief overview of HTML/CSS commands and common usage within Publisher HTML blocks.
The useful links are provided to help you find additional commands and syntax as well as providing some useful tools that may help you with your implementation.

>##Useful References and Resources

w3  - home of the World Wide Web consortium who define the standards
w3 schools -  for learning and a vast array of sources and examples of code
w3 - Validator - to test your makup
w3 html reference
online convertor of Word to HTML - please note does not clean up whitespace
html optimizer - online tool that cleans and removes whitespace
Online Tools for converting to html - includes plain text and Word
Online WYSIWYG editor - for html
Text Wrangler - free MAC tool for writing html (alternative to text edit etc)
Notepad ++ - great free PC tool for writing html etc
 

 is equivalent to 1 device pixel. On Retina Displays, a raster image’s 1 bitmap pixel is equivalent to 4 device pixels. In order to accommodate for the change, Retina display multiplies one bitmap pixel by four. Even though the image is displayed in the same size, it is actually being stretched which causes the image to look blurry

##>Specific Publisher Examples

**Inline Text styling for text block**

{{font Centrale Sans 13 Italic #ffffff}}Qanun{{font Centrale Sans 13 Normal #ffffff}} (The Canon [in Medicine]), volume 5, by Ibn Sina (d. 1037)


{{br}} will work in a datasheet entry into a text block to create a line break without the need for an html block. It will also work directly in the text block.

Further formatters are available via the Publisher formatting option:





**Linking to Publisher Scripts:**

```
<script>
window.onload = function(){
window.location.href = "script:bounce?inkeypad=true";
}
</script>

<a href="script:Infopart2"><div id="empty">[[ds:/GC_Info/item/info_data]]</div></a>
```

**Simple image map to scripts:**

```
<!doctype html>

<HTML>

<img usemap="#mymap" id="mappy" src="home-640-960.jpg" />

<map name="mymap">
<area shape="poly" coords="38,261,212,183,214,221,189,228,213,281,245,278,308,370,263,387,146,356,91,327,88,214,127,213"   id="poi1" onclick="runScript(2)">

<area shape="poly"  coords="48,216,158,180,100,117,4,149," id="poi2" onclick="runScript(1)">
</map>

</html>

<script>

function runScript(number){

window.location.assign("script:addHomeMapLayer?building_id=" + number);
}
</script>

<style>
*{
padding:0px;
margin:0px;
-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-touch-callout: none;

}

#mappy{
width:320px;
height:480px;
}

```



**Simple image map adding a variable:**

```
<!doctype html>

<HTML>
<img usemap="#mymap" src="map_home_test.jpg" width="960" height="1440"/>

<map name="mymap">
<area shape="polyg" coords="652,542,117,792,792,1174,948,1111,"   id="poi1" onclick="runScript(1)">

<area shape="rect"  coords="13,355,440,617" id="poi2" onclick="runScript(2)">
</map>

</html>

<script>

function runScript(number){
alert(number);
window.location.assign("script:addLayer3?building_id=" + number);
}
</script>

```

Removing all tap highlights using css:

```
 *{
-webkit-tap-highlight-color: rgba(0,0,0,0)
}
```


and removing all tap long hold events
```
 *{
-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-user-select: none;
}
```

**Inline styling with html**

<p style="font-family:Verdana"><listyle="color:orange"><strong>Orange</strong></li></p>

```
<p style="font-family:Verdana"><listyle="color:orange"><strong>Orange</strong></li></p>
```







**Stop the displaying of telephone numbers in html**

```
<meta name="format-detection" content="telephone=no">
```
```
<style type="text/css">
@font-face {
	font-family:'Tate';
	src: url('fonts/TATEB___.TTF');
}
*{
padding:0;
margin:0;
}

h2{
background-color:white;
font-family:Tate;
font-style: normal;
  line-height: normal;
  font-weight: normal;
  font-variant: normal;
font-size:26px;
font-color:#b066ff;

}

</style>

<meta name="format-detection" content="telephone=no" />

<style type="text/css">


@font-face {
    font-family: "Helvetica Neue";
    src: url('fonts/HelveticaNeueLTW1G-Roman.ttf');
}
```

**Launching an App on Android/returning to Settings**

EVENT - launch an App - com.android.settings/.Settings

As an example would launch the devices settings page.




##**Miscellaneous Tips**


You may already know or do this or us multiple browsers etc but :

Incognito mode in chrome – allows you to open multiple multiple instances of Publisher

set  a property
app
audioCurrentTime
0

Will mean that your progress bar will start at 0 - set it in your medial got to script






use | to seperate two variables that you want to match on a conditional (when) statement



It just looks for string so you dont actually need: etc


**Iterating Html list and img assets**

thumbnail rotate=none download=original prefix=ftp://will.robinson:4jLalQ7Jced@ftp.antenna.cc/IAA_MMG/images/thumbs/    access
intro_object_image.png    file:///android_asset/intro_object_image.png
01_object_image.png    file:///android_asset/01_object_image.png


Add ing file:///android_asset/assetname.jpg as a reference column on data sheet and then adding the thumbs to the media folder means they are picked up by an iterating html block.


------

## Samsung 2.3 invalid blocks list



Below are the button blocks that need to be removed or replaced in order to get a successful Android 2.3 build

Button(v4.15)
Button (v4.14)
Button (v4.13)


