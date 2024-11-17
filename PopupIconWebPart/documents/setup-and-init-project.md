# SPFx Environment Setup and Project Initialization

This guide walks you through setting up the SharePoint Framework (SPFx) development environment and initializing a new SPFx project.

---

## **1. Prerequisites**

Before you begin, ensure the following tools are installed on your machine:

1. **Node.js (LTS version)**:
   - Download: [Node.js](https://nodejs.org/).
   - If there is issues with node version, install node version manager and select the version v18.20.4
   Guildline on nvm: [nvm-help](/nvm-help.md).


2. **Gulp CLI**:
   - Install Gulp globally:
     ```bash
     npm install gulp-cli -g
     ```

3. **Yeoman**:
   - Install Yeoman globally:
     ```bash
     npm install -g yo
     ```

4. **SharePoint Generator**:
   - Install the SharePoint Framework Yeoman generator globally:
     ```bash
     npm install -g @microsoft/generator-sharepoint
     ```

5. **Code Editor**:
   - Install [Visual Studio Code](https://code.visualstudio.com/).

---

## **2. Initialize a New SPFx Project**

1. Open a terminal and navigate to the folder where you want to create the project.

2. Run the Yeoman generator:
   ```bash
   yo @microsoft/sharepoint
