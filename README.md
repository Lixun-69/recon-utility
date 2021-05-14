# recon-utility

A simple API to shorten code with a Discord.JS V12.

---

# 📝 Table of contents

-   [Installation](https://www.npmjs.com/package/reconlx#installation)
-   [Usages](https://www.npmjs.com/package/reconlx#-usages-click-on-it-for-more-info-on-how-to-use-it)
-   [Importing](https://www.npmjs.com/package/reconlx#-importing)
-   [Support](https://www.npmjs.com/package/reconlx#%E2%99%82%EF%B8%8F-support)
-   [License](https://apache.org/licenses/LICENSE-2.0.html)

---

## Installation

[NodeJS](https://nodejs.org/en/)
[Moment](https://www.npmjs.com/package/moment)

```sh
$ npm install recon-utility
```

## 🛠 Usages (Click on it for more info on how to use it)

-   [DaysAgo](https://www.npmjs.com/package/recon-utility#daysago) - check how many days ago was it using date format

## ✈ Importing

```javascript
// Using Node.js `require()`
const recon = require("recon-utility");

// Using ES6 imports
import recon from "recon-utility";
```
---

## 🔧 Usages

---

## DaysAgo

```javascript
// Example on checking how long the member's account was created.
// Import the package
const { daysAgo } = require('recon-utility');
// Destructure the package
const discord = require("discord.js");

const member = message.mentions.members.first()
const var = daysAgo(member, message)

message.channel.send(var)
```
