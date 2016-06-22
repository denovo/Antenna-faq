## Cloud Collections

Cloud Collection is an enterprise cloud CMS to power Mobile Apps.
 
You can create your own data structure and store all data types
Text
Images
Audio
Video 


Eachscapes official Cloud Collection support [Eachscape](http://support.eachscape.com/customer/en/portal/articles/1368259-eachscape-cloud-collection)
Please note anything below currently supercedes the help articles in the link above.

----

## Setting up a Cloud

The ID will set up or ammend BaseApp Cloud collections as needed for the particular project.
A brief guide to setting up a cloud collection can be found here:
[ES setup notes](http://support.eachscape.com/customer/en/portal/articles/1702110-sql-db-asset-as-local-file-or-on-the-internet-when-created-using-cloud-collection)

You can see the BaseApp cloud collection setup itself for a "standard" Antenna "Local file" setup.


If you need to setup a cloud collection to also have write access - ie to upload a "selfie" too please see [Write access](http://support.eachscape.com/customer/en/portal/articles/1430838-authorize-write-access-to-a-cloud-collection) and [Write from an app](http://support.eachscape.com/customer/en/portal/articles/1442667-write-from-an-app-into-a-cloud-collection)

-----------

## BaseApp Cloud

The BaseApp cloud datahseet templates are here: [Google Link](https://docs.google.com/spreadsheets/d/1mzh182UB0yWuHtARjlFvmEALS9k7iJhv_Vqz0cXw3X8/edit#gid=1921576986)

The sheets correspond to the columns used within the BaseApp Cloud Collections.
They are tabbed accordingly.

for further details see - Data sheets for Cloud Collections, FTP links, URLs section of FAQ

-----------

## Edit Collection


to be updated

-----

## Editing Columns

This will most likely be performed by ID's if the cloud collections need to be edited to be non standard or a column needs to be added. Editing a column's name requires recoding any references to that column in the app.

To do this navugate to the Cloud Collection that is to be changed and then choose "Edit Coumns" from the navigational menu. 

Once there you can edit coulmns as needed and change the prder in which columns appear (very slow process with large number of columns) by clicking on the arrow buttons on teh far right.

You can add values to enumerated fields and change visibility to users (for example you could hide a particular field from a clients view).

You can aslo delete columns and rename (proceed with caution).

When creating new columns you will be given the option of the "type" of column to create and wether that column always requires an entry.

If you choose an "Uploaded Image" file type you can also customize the subfileds that are available to view in the app - ie wether the automatically created thumbnail and medium sized asset are also available to select within the app - the default for this is now set to no.

Attachment location - for most apps will be set to in a local file - ie stored in the app itself.


----

## Adding rows and records

You can just enter directly into the cloud by typing or selecting from an enumerated field - you can also upload media in appropiate fields.

![adding rows](/images/manualadd.png)


Or you can use the add record option and then enter as appropiate.

![adding rows](/images/addrecord.png)




----
## Bulk Upload - Publish latest

You can bulk upload by using the !(images/Bulk_icon.png)


This enables you to copy and paste in data from an external source.

In our case this will most liekly be an Antenna formatted datasheet.

You simply select the fileds to be entered on the datasheet and copy and paste into the box (first deleting the existing headers).

For cloud collections the ftp/data links need to be inline for each item.

You can then hit submit and upload the data - the bulk upload will then proceed and give you visual feedback to the success. Turning a row green if all is ok or red if their is an upload error.

At the end of the procedure you can use Ctrl+C to cop any errros from the upload and paste them onto a document elsewhere. 
You then have to refresh the CloudCollection to see your updats and then hit Publish latest to send them to the app.

See the video below for a walkthrough:

> Don't forget to Publish Latest when finished!


<video width="800" height="600" controls>
  <source src="/images/BulkUpload_Cloud.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>



Common upload errors are refrenced in the section below.

----

## Deleting


Tick the box next to the item you want to delete.
Then hit the bin icon to delete - hit ok and then reload to see your changes.
Select the tick all box underneath to delete all or to speed up selction.
You can select all and then delete to bulk upload an entire new collection (dont forget to reload and publish latest after finishing).

You can not currently delete a single media item in a row. So you can replace with a dummy file or delete thw whole row and start again.



<video width="800" height="600" controls>
  <source src="/images/Cloud_collection_deleting.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>



----
## Sorting

The order in which items initially appear in the cloud collection are simply the order in which they data has been inputted. It does not nessacarily reflect the order in which the items will appear in the application. Below we will cover the two different types of sorting that can be done to the cloud collection, sorting for editing, and sorting for publishing to the application.

### Sorting for Editing

The Cloud Collection has the ability to sort by multiple columns/fields. In order to set the primary sort field click the header of the field you wish to sort by. As soon as you click it will automatically sort and update the view. When you click it you will see an 1 and an upward pointing arrow to indicate that's your primary sort field and it's sorted in assending order (lowest to hightest). If you click the field header again it will change it to desending order (highest to lowest). Clicking an additional header will set a secondary field to sort by, again you can click it to change it to desending. Clicking another field header will set a third field, and so on. 

If you want to remove the sorting options, simply click on the link to the same cloud collection, or refresh the page.Sorting options do not persist after you have left the page.

![sort for edit](/images/SortForEdit.jpg)

Helpful Hints
> When browsing data for a slideshow in the base_slides collection you will find it useful if you first click language, then subID, then InPoint. This will group your stops slideshow images in order that they will appear in the app.

[Eachscape documentation on sorting](http://support.eachscape.com/customer/en/portal/articles/1518174-sort-and-search-data-in-a-cloud-collection)

### Sorting for Publishing

One of the ways that you can change the order in which your data is sorted in the app is to click the 'Sort by' icon above your cloud collection. This will change the order in which the data is sorted when you hit Publish Latest. Note it does not effect the sort appearence in the editor. It is also possible that the sort order is overridden in the app. Please consult with your Interactive Designer if you are not seeing your sort changes reflected in the app.

Simular to the sorting for editing covered above, you can set multiple columns for sorting. From the list of columns available for Sorting click the first column you wish to sort by. You can add additional columns if required. Click Save. Click Publish Latest. Once your Collection has published you will be able to see the new order if you click 'Browse Latest'

![sort for publish](/images/SortForPublish.jpg)

Helpful Hints
> In most apps the content is filtered by language, so you don't have to worry about sorting by language.


----
## Common Bulk Upload Errors



<table>
  <tr>
    <td>Connection timed out</td>
    <td>try uploading again on a faster connection,clsoe other applications or simpply try again at anothet time as this can sometimes be the ftp being slow to respond.</td></tr>
    <tr>
    <td>media:550 File not Found</td>
    <td>Missing file - when bulk upload has finished press ctrl+c tto copy errors and then ctrl+v to paste into whatevre text programme you use. The missing files will be identified in that report.</td>
  </tr>
  <tr>
  <td>The headers do not match the number of fiels in this collection</td>
  <td>The headers on the datasheet youe are uploaidng do not match the column names defined in the cloud collection</td>
  </tr>
  <tr>
  <td>must be a value in the list</td>
  <td>The entered value is outside of the enumerated values allowed for that column - check spelling or check alter values allowed in column</td>
  </tr>
  </tr>
  <tr>
  <td>Row mismatch error</td>
  <td>tbc</td>
  </tr>



</table>


See also - Data sheets for Cloud Collections, FTP links, URLs


----

## Getting your Data back put of the CLoud Collection

CSV export


-----

## Tips and Tricks

1. You can use the alt/option key to select a column and then drag to resize this will resize all columns.

<video width="800" height="600" controls>
  <source src="/images/UsingAltKeyCloud.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>


2. Sorting or adding rows using a Sort Order Column

3. You can quickly fill a cloud ollection with "text" only items to save enterign large amounts of enteries over and over again and then simply upoad the required media.

4.You can use Bulk Upload tab to capture the hedears/columns from a Cloud Collection to setup a new datahseet - that way you can be sure they will match.



----

## Feature Requests

Cloud collection featrures request [doc](https://docs.google.com/spreadsheets/d/1o6uOJL_hNFhOUhbHca6fe3qAuL8WqQY9wdVlZFmIMmg/edit#gid=0)

----

## Data sheets for Cloud Collections, FTP links, URLs


Data sheets still exist, however, now in a Cloud Collection friendly format. This means they remain the same as classic data sheets, with only the columns that host assets (eg thumbnails, images, mp3s, videos) changing slightly, in order to correctly upload them to the CC. This will be explained below.

First, some important things to remember.

Column headers in CC, must match column headers exactly on the data sheets. eg both must read ‘titleline1’ or ‘thumbsubmenu’.

Example 1: Cloud Collection column titles that match the data sheets.




![Cloud](/images/example_1_CC_titles.jpg)

CC column order doesn't have to match that of the data sheet but it is good practice to keep the datasheet and the cloud collection aligned.<p style="text-decoration:line-through">When you bulk upload, it is looking to place the data within these specific columns, so you don’t want ‘stop’ data going into ‘language’, or ‘tourtype’ data going into ‘orientation’ etc. It is essential to get this order correct from the beginning. Columns can be added later if necessary, but it’s good practice to get this right from the outset.<p/>


To be CC friendly, asset URL paths (eg to thumbnails, slides, mp3s, videos etc) must be added in full, to the corresponding cells in the data sheet.


Unlike classic data sheets, which have the almost full URL path in the column header and the continuation of it (the asset title and format, eg thumnbail1.jpg) in the cells below, CC has the full URL path to the asset in the cell and only a simple column header title.
An example can be seen below of the column titled ‘thumbsubmenu’, which holds all the URL links to your sub menu thumbnails. It includes the full path to each individual asset, including your ftp login and password.



Example 2: CC friendly data sheet. Column G, with individual links to assets on the ftp. Note the URL begins with a user’s log in.


![Cloud](/images/example_2_cc_url.jpg)


You can copy the URL path to an asset, once logged on to the ftp. You should be able to right click on the asset and copy the URL (with ftp log in) and then paste it into the corresponding data sheet cell. See example below.

Example 3: Copying an asset URL path from the ftp (using fireftp client)

![Cloud](/images/example_3_ftp_w_login.jpg)


Alternatively, other ftp clients may display this information differently, but the goal is the same.

----

## When not to use Cloud Collections for assets


Samsung 2.3 cases tbc

----
