This is a repo to demonstrate a bug we're having with the Logrocket SDK and Banocontact webviews.

## Setup

- You'll need you're react native setup along see their website for details on setup: https://reactnative.dev/docs/set-up-your-environment?platform=ios
- Install dependencies with `yarn` and `cd ios && pod install && cd ../`
- Replace the `enter slug` in `App.js` with Perfect draft logrocket production slug. If you don't have this it's available upon request.

## Steps to reproduce bug

There is a video of the bug in root directory of this project.

- Run the app on iOS with `yarn ios`
- Tap on `Navigate to webview`
- Select the country `Belgium(en)`
- You'll then to have to log in (on the webview) or create an account. It is free to create an account. 
- Click on the hamburger menu and select Kegs
- Add a keg to your basket. 
- Select checkout. 
- Select secure checkout. 
- Enter a first name, last name, a phone number and an address then continue to payment
- Select banocontact
- Notice the spinner either flickers or disappears. Also the banocontact may not load without being interacted with. 

## Notes 

- Notice the bug doesn't happen if you comment out the log rocket innit code in `App.js`.
- Also if you change to the log rocket slug to the staging environment it doesn't happen.