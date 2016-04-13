##Emulators and SDK tools


>iOS

To manually install to the simulator:
 xcrun simctl install booted <location of .app file>

And to clear simulator builds 

xcrun simctl erase all


##Scrum based QA

Sprint implementations of QA:

By implementing Agile methodologies we adhere to test driven development principles.
Releasing in pre defined sprints we are then able to iterate and collaborate with key stakeholders to ensure a working model and user satisfaction.

Our backlog for a project is tracked and organised in Jira.

Usability testing:

Automated Unit Testing:

Accessibility testing:

##Jira Issue Tracking


Issues/bugs are entered into the Jira projects Backlog, where they are prioritised and expedited.

These issues then pass through our internal stages of development and checking before they are agreed as done by the Project Manager or defined Stakeholders.

To Do Blocked In Progress Resolved QA Done

Items are moved into resolved normally after “brief” smoke testing by ID/CD, most items will then need proper QA testing but either stage can move to Done depending on the size/seriousness of the issue. If there is an issue with the fix, the issue is defined/commented and moved back into In Progress and reassigned.

Critical, Major, Minor, Trivial


Beta Testing / UAT:  We supply user scripted scenarios, that represent user journey(s) through the application to facilitate clear and defined beta testing. That feedback can then be sent back into our Jira system via automated emails. (autodesk) At this stage the Project manager would work with the key Stakeholders to perform test result analysis to define what should be assigned fixed or rejected/deferred. 

Critical, Major, Minor, Trivial

 Announcing: Cloud Test Lab
The Cloud Test Lab will test your app on a wide range of popular physical Android phones and tablets. Sign up below for early access to the Cloud Test Lab service! 

https://developers.google.com/cloud-test-lab/?hl=en


ASK ES whats in droid manifest ?

-> What do we put in place for downloadable apps QA?
Do you mean as in different devices ? In theory expansion packs should work on both
Yes, I mean set up a QA process for downloadable apps: make sure the app is compatible with a predefined set of screen sizes / OS etc. - what we discussed last week. 

This specific feature also needs testing across both platforms

This is going to be an ongoing task, but at a basic level much of this does already exist –I’ve also checked in with Sam again, as I;m sure he once produced a document for this. 
For iOS this is fairly simple as the store will only support from iOS7 to 9 an din terms of devices it’s basically iPhone5 and 6. We don’t really fully support the 6s, but as per another conversation I’ve had with Giles recently ideally for iOS we need to provide the two sets of graphical assets or allow as is the case now our iPhone5 assets to be stretched.

When it comes to Android it’s far more fragmented in terms of screen sizes – so basically at the moment we offer support for hdpi to xxhdpi screens– using scaling. However because screen ratios are different this becomes far more complicated to give a concrete answer on. The current baseapp is built to be as adaptable as possible (not responsive), but it will essentially resize to fit, so you may still have devices where the design won’t look perfect. Lager Screens xxxhdpi are really beyond how far you can stretch xhdpi graphics, which is what we normally use as standard.

ES doesn’t have in place as yet support for xxxhdpi screens.

Opera – I don’t know how it was built, but I’m assuming it would currently be scaling it’s assets – so the questions is slightly how far do you want to go with that before it looks unacceptable. In terms of Android compatibility suggestion is to publish for 4>

In terms of compatibility with actual real world Android devices, I was under the impression it actually works on an exclusion based filter on Googles end, plus with any explicit filters you set when putting the app to store - i.e.:  When determining whether to display your app, Google Play checks the device's hardware and software requirement, as well as it's carrier, location, and other characteristics. It then compares those against the restrictions and dependencies expressed by the application's manifest file and publishing details.

There’s a whole other book to be written on how we can actually go about testing this, but fundamentally at the moment its about getting it on as many devices as we can access and in as many emulators as we can in the time and qa phase allowance.


UAT sign off >?

