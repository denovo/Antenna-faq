## Cloud Collections

Enter text in [Markdown](http://daringfireball.net/projects/markdown/). Use the toolbar above, or 

## Seting up a Cloud

The ID will set up or ammend BaseApp Cloud collections as needed for the particular project.
A brief guide to setting up a cloud collection can be found here:
[ES setup notes](http://support.eachscape.com/customer/en/portal/articles/1702110-sql-db-asset-as-local-file-or-on-the-internet-when-created-using-cloud-collection)

You can see the BaseApp cloud collection setup itself for a "standard" Antenna "Local file" setup.


If you need to setup a cloud collection to also have write access - ie to upload a "selfie" too please see [Write access](http://support.eachscape.com/customer/en/portal/articles/1430838-authorize-write-access-to-a-cloud-collection) and [Write from an app](http://support.eachscape.com/customer/en/portal/articles/1442667-write-from-an-app-into-a-cloud-collection)


## BaseApp Cloud

## Editing Columns

## Bulk Upload - Publish latest

## Adding rows and records

## Deleteing

## Sorting

## Common Errors

## When not to use cloud for assets

## Tips and Tricks

## Feature Requests

Cloud collection featrures request doc


## Data sheets for Cloud Collections, FTP links, URLs


Data sheets still exist, however, now in a Cloud Collection friendly format. This means they remain the same as classic data sheets, with only the columns that host assets (eg thumbnails, images, mp3s, videos) changing slightly, in order to correctly upload them to the CC. This will be explained below.

First, some important things to remember.

Column headers in CC, must match column headers exactly on the data sheets. eg both must read ‘titleline1’ or ‘thumbsubmenu’.

Example 1: Cloud Collection column titles that match the data sheets.




![Cloud](/images/example_1_CC_titles.jpg)

CC column order must also match that of the data sheet. When you bulk upload, it is looking to place the data within these specific columns, so you don’t want ‘stop’ data going into ‘language’, or ‘tourtype’ data going into ‘orientation’ etc. It is essential to get this order correct from the beginning. Columns can be added later if necessary, but it’s good practice to get this right from the outset.


To be CC friendly, asset URL paths (eg to thumbnails, slides, mp3s, videos etc) must be added in full, to the corresponding cells in the data sheet.


Unlike classic data sheets, which have the almost full URL path in the column header and the continuation of it (the asset title and format, eg thumnbail1.jpg) in the cells below, CC has the full URL path to the asset in the cell and only a simple column header title.
An example can be seen below of the column titled ‘thumbsubmenu’, which holds all the URL links to your sub menu thumbnails. It includes the full path to each individual asset, including your ftp login and password.



Example 2: CC friendly data sheet. Column G, with individual links to assets on the ftp. Note the URL begins with a user’s log in.


![Cloud](/images/example_2_cc_url.jpg)


You can copy the URL path to an asset, once logged on to the ftp. You should be able to right click on the asset and copy the URL (with ftp log in) and then paste it into the corresponding data sheet cell. See example below.

Example 3: Copying an asset URL path from the ftp (using fireftp client)

![Cloud](/images/example_3_ftp_w_login.jpg)


Alternatively, other ftp clients may display this information differently, but the goal is the same.


TW.


![addrecord](/images/addrecord.png)

test


<video width="1422" height="748" controls>
  <source src="/images/Cloud_collection_deleting.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>

test
