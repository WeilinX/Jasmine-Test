# Jasmine-Test
step to Start:
-install nodejs first
-In command ->goes to the directory of your folder
-type in npm init
-enter until to the end (then you will see a new json file in the folder)

Install Karma
- npm install karma --save-dev  (same command window)

Install Karma - Jasmine
- npm install karma-jasmine --save-dev

Install Which browser that you want to run for the unit test
for me.. i am install Chrome
- npm install karma-chrome-launcher --save-dev

Setup jasmine
-karma init
(by the end you will see the karam.cof.js in your folder)

Step to start jasmine with karma:
-karma start karma.conf.js

Step to install bower
-npm install bower -g

Step to install angular
-npm install angular
-npm install angular-mocks
-npm install angular-resource

Edit karma.conf.js
-add dependence inside file object
file:[
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'bower_components/angular-resource/angular-resource.js'
]

