# Ionic + Filepicker.io example

======================
### Example ionic project using [Filepicker - AngularJS library](https://github.com/filepicker/filepicker-angular) for file uploading.
* "Filepicker is a simple plugin for web and mobile uploads." Filepicker JS [docs](https://developers.filepicker.io/docs/web/javascript_api/ "docs")
* "Ionic is the beautiful, open source front-end SDK for developing hybrid mobile apps with web technologies."

### [DEMO](http://krystiangw.github.io/filepicker-ionic-example/www/)

Project is based on [tabs starter ionic app](http://ionicframework.com/docs/cli/start.html)
and require ionic client for development.
It uses [Filepicker - AngularJS library](https://github.com/filepicker/filepicker-angular) for local and cloud files upload.

Also check [filepicker docs](https://www.filepicker.com/documentation/file-ingestion/javascript-api/pick-and-store?v=v2)

## Requirements

###  1. You need Node.js
```
brew install node
```

### 2. Ionic
```
npm install -g ionic
```

###  3. Clone repository
```
git clone git@github.com:krystiangw/angular-filepicker-example.git
```

### 4. In the repository install cordova plugins: 
[inappbrowser](http://ngcordova.com/docs/plugins/inAppBrowser/) 
[cordova-camera](http://learn.ionicframework.com/formulas/cordova-camera/)

```
cordova plugin add cordova-plugin-inappbrowser
cordova plugin add org.apache.cordova.camera
```

## Run
Use ionic to serve locally
```
ionic serve
```
