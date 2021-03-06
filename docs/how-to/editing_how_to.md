# How to make changes to Antenna FAQ

- Source files: <http://github.com/nevedwards101/Antenna-faq/>
- Published website:  <http://antenna-faq.netlify.com/>

##Getting started

Before you can make changes to the docs you will need an active GitHub account (sign up for free at github.com) and also be added as a contributor on the Antenna-faq github repo.

If you are not already added as a contributor on the Antenna-faq repo email <mailto:nedwards@antennainternational.com> with your github username so you can get added as a contributor.

Once you are setup as a contributor you'll be able to submit changes to the repo and see your updates reflected on the live site.

## How it works


The layout, navigation, header, footer etc for each page is auto generated by a static site generator called [mkDocs](www.mkdocs.org/). Using mkDocs allows us to focus just on editing the content and let mkDocs handle the generating of navigation and layout of the website.

The source files for the content for each page of the Antenna-FAQ site are written in markdown, saved as `.md` files.
These are stored in the `/docs` folder inside the `Antenna-faq` repo stored in github.

When changes are made to the `.md` source files and pushed to Github they will be auto-detected by [Netlify](https://www.netlify.com/) which then runs a task to re-generate the site using mkDocs and publish the updates to http://antenna-faq.netlify.com/.

See diagram below for a visual explanation of the build process.

![Antenna FAQ Overview](/images/antenna-faq-overview.svg)


## Making Updates

### Updating .md files directly using github website

It is possible to update the files using the github website alone.
This is probably the quickest way for small minor changes.

+ You need to be signed in in github
+ Navigate to the page you want to change in the `docs/` folder
+ Click the pencil icon to make edits
+ Make your changes to the file
+ Scroll to the bottom of the file where it says 'Commit changes'.
+ Enter a title for this commit (change) and a description of what the change is in the box below if you need to write more details.
+ Click commit changes,  selecting  'Commit directly to the master branch'.  See ** * ** below

When saving files, Commit title's should generally be short, and describe what the change will do. Something like "update the base app faq page" for example.
The descriptions can be more lengthy and go into more details.
This is to make the commit titles easier to browse if we ever need to roll-back to a point in history or find out when things changed.

#### ** video: making small changes using github **
<http://quick.as/1DJLUB8yO>

### Update using <http://prose.io> or <http://stackedit.io>

Longer text changes and additions can be more easily made using a markdown editor. This will help when making changes because you can preview how the markdown will render in html and also most tools have some kind of wysiwyg icons to bold text, add links, images etc.

#### ** Making changes with stackedit.io **

+ log into github and find the '.md' file you want to make changes to from the 'docs/' folder
+ copy the contents of that file into stackedit.io
+ make your updates
+ preview them in stackedit
+ copy the changes back into git
+ add a commit message and click save changes

#### ** Making changes with Prose.io **
Prose.io is also enabled on the Antenna-faq repo to allow you to make, preview and save changes using their web app.

+ Sign in to your github account
+ Go to: http://prose.io/#nevedwards101/Antenna-faq
+ click the green button (bottom right) to Authorise on Github, if you don't see green button you are already logged in
+ make any changes in the 'docs' folder
+ use the buttons on the right side to preview, and to save and commit your changes to github from within prose.io

**Note: When using prose.io**
Remember to log in to Github and make sure you have authenticated first, before making any changes.
This is done by signing in to github in another browser window and then visiting prose.io and clicking "authorise on Github" (green button bottom right).
This will prevent you losing any edits if you are already logged in before starting to make changes in the prose.io editor.

#### * Changes Made in the Master Branch in Git
Github allows you to have multiple copies or "branches" of the same set of source files. This can be used to test out developing new features or changes without affecting the master (stable) copy. Changes are then only merged in once they've been tested and approved.

Netlify is listening for any changes to the master branch in the antenna-faq repo. So you should make changes here if you want them to be automatically published through to the FAQs website.

Often you will not need to change branches for the Antenna-FAQ repo as most changes are likely to be minor text and content updates only and we are running everything from the master branch only. Although if you do want to make larger changes or test out something, it's possible to create a development branch in github to try out those changes, without it affecting the master branch.

Lots more info about github and branching here <https://changelog.com/git-resources-for-visual-learners/>


## Adding images

Images can be added to the docs by either linking to an image that is stored in cloud hosting or by adding the image to the `Antenna-faq/docs/images/` folder and then linking to it from the .md page using the example code below.

### Embed a file stored externally, in google drive, another site, cloud hosting etc
    ![enter image descriptionhere](https://lh3.googleusercontent.com/imageurlhere.png)

It is possible to enter any URL to an image and embed that into the docs. See code below.


The text inside the square brackets `[` is the alt text for the image and the url inside the curved brackets `(` is the url to the image filename. The text inside the speechmarks is the title of the image.

### Embed an image using the images/ folder inside the docs repo
    ![Antenna International logo](/images/Antenna-horizontal-All-aligned.jpg)
The text inside the square brackets `[` is the alt text for the image and the url inside the curved brackets is the url path to the image filename **relative to the current folder** of the .md file you want to add the image to.

## Adding new pages
### Video: how to add new pages
<http://quick.as/x2wytnglw>

<iframe name='quickcast' src='http://quick.as/embed/x2wytnglw' scrolling='no' frameborder='0' width='100%' allowfullscreen></iframe><script src='http://quick.as/embed/script/1.65'></script>
