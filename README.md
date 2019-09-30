# shareApp
Technology -
1) NodeJS
2) MongoDB
3) Angular
4) Express

Email Verification Node Mailer with SENDGRID(API)
Notification on Events Such as Friend request, Authentication success, Session expired(auth fail)

Role:User
Features :
Multiple File Upload 6 at a time
View Uploads
Friend Request
Accept Friend Request
View Friendlist
View Uploads


Admin:
Block User Accesss
Update terms and conditions


To run :

RUN "npm i"   in Frontend and Backend folders

For file uploads

RUN FileServer located in Backend/src/UserServices/Fileserver.js





REQUIREMENTS:


Share App - Application is about sharing photos/files among friends
========================================================================
=
1) There will be two types of user.
a) End User - Type of user who can add friend, share files among friends.
b) Admin - Admin would be overall all controller of a platform
2) There will be following module at End User Side
a) User Module -
i) User can register and login.
ii) User cannot access system until and unless his email address is not verified
b) Friend Module -
i) User can see his friend list (Name and Image).
ii) User can search his friend on the platform based on name and email only
iii)User can add friends in their friend list.
iv) User should notify whenever he receive any friend requests
c) Share file Module -
ii) Platform should support uploading of Video, Photo and pdf.
ii) Platform should support multiple file uploading with preview options.
iii) user can share multiple files with multiple users at once.
iv) User can see his all uploaded files with pagination, Pagination should be like
infinite scroll.
v) There should be a separate page to see the file that has been shared with him by
other user like google drive.
vi) When ever user share files with other users then the other user should get
notification regarding same along with
3) There will be following module at Admin Side
a) Dashboard - Admin dashboard would be interactive and should contain reports and
analytics of system
i) It should show the Total Number of users in system
ii) It should show the number of registration over a time period. It may be
monthly/Yearly
iii) Number of users active on a platform at the moment
b) Static content
i) All the content of the system will be managed by admin only like about us, terms
and conditions etc..
c) User Management
i) Show list of users in system with sorting searching and pagination
ii) Admin and block/unlock any user
Note -
1) For authentication - Use JWT
2) Profile picture should be uploaded in database only.
3) Use material design or any other theme which you would like to use
4) Code should be modularized.
5) Integrating testing package and writing a test case would be addon benefits.
6) API documentation would be also addon benefits.
Technology -
1) NodeJS
2) MongoDB
3) Angular/React
