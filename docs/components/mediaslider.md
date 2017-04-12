# HTML MediaSlider Install Notes

A working example of the mediaSlider installed is installed at :   
```
Workspace: Antenna International (https://publisher.antenna.cc/manage/organizations/94/pretend)
  URL: https://publisher.antenna.cc/apps/31796/views/286516
  App: Antenna App Accessibility
```

## Media Library Assets

*Files to be added to media library and referenced at the top of the html block containing the rest of the html/js for the slider*

**remember to check 'access by name' in media folder**

**[esjsapi.js](/scripts/progressbar/esjsapi.js)** : an API written by ES and given to us to allow calling custom scripts from HTML blocks. This is used in the mediaSlider HTML block to call custom scripts below when a new audio position is selected, send that value to ES to update the play position.   (this may no longer be needed now that ES have bundled this in to all apps!?)

**[progressbar.js](/scripts/progressbar/progressbar.js)**  :  a bundled JS file containing the core nouslider js library which the slider is based on. More info: [http://refreshless.com/nouislider/](http://refreshless.com/nouislider/)

The file also contains the apollo.js library.
[https://github.com/toddmotto/apollo](https://github.com/toddmotto/apollo)
(used for adding and removing classes easily)


**[progresbar_defaults.css](/scripts/progressbar/progressbar_defaults.css)** : base styles needed for the progressbar to render, but unlikely to need changing for general themeing.

----------------------

## ES Custom Scripts

There are two ES scripts that need to be added to an app for the media slider to work.

### 1. goMediaSlider   

Initialises the slider if not already started, and updates the position of the slider to match with the current audio or video time from ES. This script should be conditionally called on the timer expiry event from any views that have an audio or video player if v_playing is set to true.

![goMediaSlider custom script](/images/SliderEsScript_goMediaSlider.png)

Actions:

* call a JS Function (updateCurrentTimeOnSlider). Passes either audio or video current time and duration as arguments.



Depending on whether a slider is already initialised when the script is called, the function will either start a new progressbar instance with the current time and duration values passed to the function or update an existing progressbar with those values.



---------------------------
### 2. setMediaCurrentTime

Called from the 08 mediasliderHTML block this updates either the audio or video time based on the value passed in when the user drags or clicks the slider. There is a conditional inside the script which checks the **mediatype** variable, to know if to set either video or audio current time.

![setMediaCurrentTime custom script](/images/SliderEsScript_SetMediaCurrentTime.png)


-----------------------------------


## HTML BLOCK SETTINGS

remember to check 'disable bounce' in the HTML block settings



------------------------------------

## ES sizing of the HTML block

If you have selected to "show-tooltips" in the settings in the base_themes CC you need to make sure that the html block is tall enough so that there is some space available above the progressbar for the tooltips to show.

An example size for the htmlblock for the mediaSlider which will show tooltips would be:

* width: [[sys:deviceAvailableViewWidth]]
* height: 145 (in ES sizing)



--------------------------------------


## Styling & Theming

Inside the base_themes CC columns should be added to allow customising the appearance of the slider.

These columns are added into the themes cloud collection:

* ProgressBarColor    
* ProgressBarHandleColor
* ProgressBarHandleType
* ProgressBarBackgroundColor
* ProgressBarShowTooltips
* ProgressBarTimeLabelsColor

### ProgressBarColor  
This is the the progress part or time passed.
Entered as HTML colour value. eg. #FFFFFF;

### ProgressBarHandleColor  
The draggable circular handle for the slider.
Entered as HTML colour value. eg. #FFFFFF;

### ProgressBarBackgroundColor  
The colour of the background of the progressbar.
Entered as HTML colour value. eg. #FFFFFF;

### ProgressBarTimeLabelsColor
The colour for the current time, and duration text labels that appear to the left and right of the slider.
Entered as HTML colour value. eg. #FFFFFF;

### ProgressBarHandleType   
Enumerated type, allows you to choose the shape of the slider handle. Valid options are: 'circle-handle', 'square-handle' or 'no-handle'

### ProgressBarShowTooltips
Enumerated type, allows you to choose 'show-tooltips' or 'no-tooltips'.
This is the popup that appears when dragging the slider to indicate what position you are dragging to.


## Potential CSS pitfall

You need to make sure that the themes CC is referenced correctly inside the style tags inside the 08 mediaSliderHTML block.
If your app has a different name for the base_themes table you will need to update the CSS inside the style tags to match with your app name.

For example, if your cloud collection is called `"base_themes (01)"`
then all of the lines in the CSS that link to that collection must also point to that exact name to make sure the values are added into the html block correctly.

CC name: base_themes (1)
example CSS:

```
background-color: [[ds:/base_themes (1) (Local Collection)  (2)/record/progressbarbackgroundcolor]];
```



## Samsung Compatibility / Support

The html mediaSlider is not currently supported on Samsung players.

## Editing Tips

This will wrap the tooltips progress bar: 

    .progress-bar-wrap.show-tooltips {
      height:10px;
      top:0px;
    }


Edit the below to change handle and on handle size - the top calc must always be half of the width/height:

    .visible-progress-bar-handle {
      width: 12px;
      height: 12px;
      position: absolute;
      top: calc(50% - 6px);
    }
    
    .on .visible-progress-bar-handle {
      width: 24px;
      height: 24px;
      left: 0px;
      top: calc(50% - 12px);
    }
