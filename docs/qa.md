

##BaseApp QA

Testology QA results and sign off to be included here: Eamon Kerrigan

##What does Antenna Support

In Summary:

Android
OS: 4.4-6.0
Screen sizes: 480x800, 540x960, 720x1280, 1080x1920, 1440x2560

iOS
OS: 9.0-9.2
Devices: iPhone 5, iPhone 5S, iPhone 6, iPhone 6S, iPod Touch 5, and iPod Touch 6

Fixes for new updates are to be charged to the client, and we cannot guarantee to be able to continue to maintain an app over 3 years old without having to rebuild completely.

In Detail:


A. Custom Application Support for Android. Antenna shall support and maintain the Custom Application on Android OS versions 4.4 to 6.0. Should the Client desire to have Antenna update, support or maintain the Custom Application on any other version of Android OS, now existing or created at a future point in time, the parties may mutually agree in a signed writing to have Antenna provide these services for an additional cost. All services offered by Antenna under this Clause [X.A] shall cease within three (3) years of the Effective Date of this Agreement and Client acknowledges that the Custom Application's shelf-life may expire at three (3) years of its creation, at which time it may need rebuilding. 

B. Android Equipment. Client acknowledges that the Android OS version of the Custom Application will only  be guaranteed to  work on Android devices that have the following screen resolution: 480x800, 540x960, 720x1280, 1080x1920, 1440x2560. For the avoidance of doubt, Antenna’s sole obligation to the Client in regards to supporting and maintaining the Android Custom Application is set out in Clause [X.A] above. However, should the Client desire to have the Android Custom Application transferred onto any new Android devices that utilize different screen resolutions, the parties may mutually agree in a signed writing to have Antenna complete the transfer for an additional cost.

C. Custom Application Support for Apple. Antenna shall support and maintain the Custom Application on iOS versions 9.0-9.2. Should the Client desire to have Antenna update, support or maintain the Custom Application on any other versions of iOS, now existing or created at a future point in time, the parties may mutually agree in a signed writing to have Antenna provide these services for an additional cost. All services offered by Antenna under this Clause [X.C] shall cease within three (3) years of the Effective Date of this Agreement and Client acknowledges that the Custom Application's shelf-life may expire at three (3) years of its creation, at which time it may need rebuilding. 

D. Apple Equipment. Client acknowledges that the iOS version of the Custom Application will only be guaranteed to work on the following devices: iPhone 5, iPhone 5S, iPhone 6, iPhone 6S, iPod Touch 5, and iPod Touch 6. For the avoidance of doubt, Antenna’s sole obligation to the Client in regards to supporting and maintaining the Apple iOS Custom Application is set out in Clause [X.C] above. However, should the Client desire to have the Apple iOS Custom Application transferred onto any new generations of hardware devices created by Apple, Inc. at a later time, the parties may mutually agree in a signed writing to have Antenna complete the transfer for an additional cost. 


##Scrum based QA

Sprint implementations of QA:

By implementing Agile methodologies we adhere to test driven development principles.
Releasing in pre defined sprints we are then able to iterate and collaborate with key stakeholders to ensure a working model and user satisfaction.

Our backlog for a project is tracked and organised in Jira.

Every sprint cycle should have a review period defined in which items are either marked as done or added back to the backlog for future sprints.

QA should be an ongoing iterative part of this process.


##Jira Issue Tracking

Issues should be bug tracked through Jira - this allows multiple people to pick up an issue and allows for the correct tracking of work and resolution control. It also acts as a repository of knowledge for future issues.


Issue/Bug Tracking:

Issues/bugs are entered into the Jira projects backlog, where they are prioritised and expedited and moved to current or future sprints as required.

>Critical, Major, Minor, Trivial

Issues are assigned a severity level based on their impact to the project and their need for resolution.

All issues then pass through our internal stages of development and checking before they are agreed as done by the Project Manager or defined Stakeholders.

>To Do	 Blocked	 In Progress	 QA		 Done

Items are moved into QA normally after “brief” smoke testing by ID/CD, issuess will then need proper QA testing but either stage can move to Done depending on the size/seriousness of the issue. If there is an issue with the fix, the issue is defined/commented and moved back into In Progress and reassigned.

To aid with visualisation and management a Kanban Board can be made of the projects issues.


##Details needed for creating a ticket

It's very importnat when creating a ticket to supplyas much information as possible.
It's also important to realise that the person working on that issue may not be as aware of the apps features/functions and navigation as you, so please put how to "recreate" instructions in every ticket.

These are suggested topic headings to use in a ticket:



APP NAME AND PROJECT CODE:


BRIEF DESCRIPTION OF ISSUE:


IMPACT/SEVERITY OF ISSUE:


REPRODUCTION RATE:


STEPS TO REPRODUCE/HOW TO NAVIGATE:

RESULT:


EXPECTED RESULT:


ADDITIONAL INFORMATION:
This issue is known to occur on the following devices and firmwares:

Build number:

Please also add any screenshots/videos to help explain the issue:

TIME CONSTRAINTS:

any additional time based information

See also the Jira Section of this FAQ

-----


##User Accepted Testing and Sign Off

Being defined with JR/TG et al as of 4/7/2016

---

##Handover procedure to Tech of an image build

Being defined with JR/TG et al as of 4/7/2016

----


##Automated Unit Testing:


---

##Accessibility testing:


----


##Emulators and SDK tools


**Eachscape Inspector

[Inspector](http://support.eachscape.com/customer/portal/articles/513429-the-inspector)

----


**iOS

iOS Builds can be tested by making a simulator build from within Publisher.
This can then be downlaoded and run in the iOS Simulator.
The simulator is part of the XCode download:

[xcode](https://developer.apple.com/xcode/)

Once you have the simulator and a simulator ready version of the app for testing you can manually install the app by using the following command in terminal:

To manually install to the simulator:
 xcrun simctl install booted <location of .app file>

After a while you may get a lot of simulator builds installed and this can take up a lot of space on your hard drive - to celar them - open terminal and:

xcrun simctl erase all


----

**Android

Announcing: Cloud Test Lab
The Cloud Test Lab will test your app on a wide range of popular physical Android phones and tablets. Sign up below for early access to the Cloud Test Lab service! 

https://developers.google.com/cloud-test-lab/?hl=en  https://firebase.google.com/



----

**Android SDK tools


-----
