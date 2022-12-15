# KRealEstate App 
A modern real estate React and Next.js application with rental homes and for sale properties advanced property filtering property details page with an image carousel and much more. I have learned advanced React JS knowledge, folder and file structure and hooks, Next.JS, static generation and server side rendering. I have also learned a lot on user interface creation using Chakra UI, and most importantly, I have learned techniques of fetching data from unlimited sources using Rapid API and the endpoints to get different properties, filtering to get property details.
## ***[Copyright and Commercial Use Disclaimer](https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/README.md#please-carefully-read-licensemd-about-the-open-source-restrictions-and-the-personal-use-policy-of-this-project-under-gpl-30-license-any-commericial-uses-on-this-project-by-other-than-the-owner-krystalzhang612-or-the-authorized-users-and-organizations-will-be-subjected-to-copyright-violation-with-sebsequent-potential-legal-concerns)***

⏬

### ***Please carefully read [LICENSE.md](https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/LICENSE) about the Open Source restrictions and the personal use policy of this project under [GPL-3.0 license](https://www.gnu.org/licenses/gpl-3.0.en.html), any commericial uses on this project by other than the owner [@KrystalZhang612](https://github.com/KrystalZhang612) or the authorized users and organizations will be subjected to copyright violation with sebsequent potential legal concerns.***
## KRealEstate App Overview:
<p align = "center">
  <img src = "https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/testing-result-k-real-estate-app/KRealEstateApp%20Overview-1.PNG">&nbsp; 
  <img src = "https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/testing-result-k-real-estate-app/KRealEstateApp%20Overview-2.PNG">&nbsp; 
  <img src = "https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/testing-result-k-real-estate-app/KRealEstateApp%20Overview-3.PNG">&nbsp;
  <img src = "https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/testing-result-k-real-estate-app/KRealEstateApp%20Overview-4.PNG">&nbsp; 
  <img src = "https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/testing-result-k-real-estate-app/KRealEstateApp%20Overview-5.PNG">&nbsp; 
  <img src = "https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/testing-result-k-real-estate-app/KRealEstateApp%20Overview-6.PNG">&nbsp; 
  <img src = "https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/testing-result-k-real-estate-app/KRealEstateApp%20Overview-7.PNG">&nbsp; 
  <img src = "https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/testing-result-k-real-estate-app/KRealEstateApp%20Overview-8.PNG">&nbsp;
  <img src = "https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/testing-result-k-real-estate-app/KRealEstateApp%20Overview-9.PNG">&nbsp; 
</p>


# Build
[Method to Run & Test the Project Locally](https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/README.md#method-to-run--test-the-project-locally)<br/> 
[Prerequisites & Setups](https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/README.md#prerequisites--setups)<br/> 
[Debugging&Troubleshooting]()<br/> 
[Synchronous Developing Notes]()<br/> 
[Testing Result]()<br/> 
[Tags and Topics]()<br/> 
# Contribution
[Author]()
# Compatiability 
| Version           | Supported          |
| -------           | ------------------ |
| git 2.13.1+       | :white_check_mark: |
| node js 16.15.1+  | ✅                 |
| npm 5.6.1+        | :white_check_mark: |
| yarn 3.0.0+       | ✅                 |
# Method to Run & Test the Project Locally
### Download `git version 2.13.1 or higher`. Download git at https://git-scm.com/downloads
### To check your version of git, run: `git --version`
### Download `yarn 3.0. 0 or higher`.
### Download `node 16.15.1 or higher.` Download node at https://nodejs.org/en/download/
### To check your version of node, run: `node --version`
### Download `npm version 5.6.1 or higher` after installing node.
### To check your version of npm, run: `npm --version`
### Download the entire project folder and open it with any IDE.
### Obtain a free Bayut API at https://rapidapi.com/apidojo/api/bayut
### Replace `YOUR OWN BAYUT API` in fetchApi.js with your obtained API. 
### Start the webserver to test KRealREstate App by running: `npm run dev` or `yarn dev` at localhost:3000
### Terminate the server by CONTROL+C
### Have fun browsing, filtering, renting, and selecting various of different properties! 
# 🛠️ Developing Languages, Tools, and Techniques Needed
[Vscode 1.74](https://code.visualstudio.com/updates/v1_74)<br/> 
[JavaScript](https://www.javascript.com/)<br/> 
[Next.JS](https://nextjs.org/)<br/> 
[Chakra UI](https://chakra-ui.com/)<br/> 
[RapidAPI Bayut API](https://rapidapi.com/apidojo/api/bayut)<br/>
<div>
  <img src = "https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg" title ="VSCODE" width ="60" height="60"/>&nbsp; 
  <img src = "https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title ="JAVASCRIPT" width ="60" height="60"/>&nbsp; 
  <img src = "https://github.com/KrystalZhang612/images-attachments-collection/blob/main/rapidapi%20logo.png" title ="RAPIDAPI" width ="60" height="60"/>&nbsp; 
  <img src = "https://github.com/devicons/devicon/blob/master/icons/yarn/yarn-original.svg" title ="YARN" width ="60" height="60"/>&nbsp; 
</div>


# Prerequisites & Setups
Initialize Next.js in Vscode terminal without using TypeScript or ESLint:
```bash
npx create-next-app@latest ./
```
Create [.babelrc](https://github.com/KrystalZhang612/K-RealEstate-App/blob/main/.babelrc) file and input:
```babelrc
 { "presets": ["next/babel"],
  "plugins": [] }
```
Start the web server running at localhost:3000:
```bash 
npm run dev
```
Install needed dependencies:
```bash 
npm install @chakra-ui/react @emotion/react @emotion/styled axios framer-motion millify nprogress react-horizontal-scrolling-menu react-icons
```



















