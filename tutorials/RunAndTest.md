This tutorial will help you to run and test the application.
## Deployed project
This project is already deployed and available via: https://sleeplessglory.github.io/weather-api
## Repository
You may want to check out the repository of the project in order to go through this tutorial: https://github.com/sleeplessglory/weather-api
# Run the project
## On your PC
If you want to download and run the application on your own, follow these steps:
1. Select a folder where you want to download it to.
2. Clone my project repository:
```bash
git clone <URL_TO_MY_REPOSITORY> <PATH_TO_YOUR_FOLDER>
```
3. Open the terminal in the root folder of the project.
4. Run the project locally:
```shell
npm run dev
```
5. You'll get the application address in the terminal with the port specified.
6. Copy and paste that address into your browser.
## On your mobile device
1. Additionally run:
```shell
ipconfig
```
2. Find your IPv4 address.
3. Open your browser on a mobile device.
4. Type the IPv4 address and also specify the port that the application runs on PC.
# Test the project
In order to test my application with Cypress, it has to be up. So, first follow the steps above to run it on PC.
1. Open the 2nd terminal in the root folder of the project (since the application server still has to be up).
2. Run this command to execute Cypress:
```shell
npx cypress open
```
3. The Cypress window will be opened.
4. Choose either E2E or Component testing type.
5. Choose the browser you want to run tests on.
6. Hit the "start" green button.
7. Choose one of the specs, if needed.
8. You can always switch the testing types and specs.