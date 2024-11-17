# Deploy and Configure IconToOpenPopupWebPart on SharePoint

This guide provides detailed instructions to debug the `IconToOpenPopupWebPart` 
---

## **1. Set environment variable**
### cmd
` set SPFX_SERVE_TENANT_DOMAIN=mytenant.sharepoint.com `

### Powershell
`$env:SPFX_SERVE_TENANT_DOMAIN = mytenant.sharepoint.com `  

### Powershell
` export SPFX_SERVE_TENANT_DOMAIN=mytenant.sharepoint.com `

## **Debug Locally**

Debugging locally allows you to test the web part during development without deploying it to SharePoint.

---

### **Steps for Local Debugging** using cmd
- **Trust the Development Certificate**:
It generates a new development certificate.
It installs and trusts the certificate on your machine.

` gulp trust-dev-cert `

1. **Run the Development Server**:
   - Open a terminal in your project directory.
   - Run the following command:
     ```
     gulp serve
     ```
   - This starts the local development server.

2. **Open the Local Workbench**:
   - Use the URL provided in the terminal output, typically:
     ```
     https://localhost:4321/temp/workbench.html
     ```
   - Open this URL in your browser. You may need to bypass the browser's warning for an untrusted development certificate.

3. **Add the Web Part**:
   - On the Local Workbench, click the **+** button to add a new web part.
   - Search for the `IconToOpenPopup` web part and add it.

4. **Test the Web Part**:
   - Configure the web part using the property pane.
   - Test the functionality of the web part (e.g., click the icon, check the popup, verify iframe content).

---

### **Debugging on the SharePoint Online Workbench**

1. **Run the Development Server**:
   - Start the development server with:
     ```bash
     gulp serve
     ```

2. **Open the SharePoint Online Workbench**:
   - Navigate to the following URL in your tenant:
     ```
     https://<your-tenant>.sharepoint.com/_layouts/15/workbench.aspx
     ```

3. **Add the Web Part**:
   - On the SharePoint Online Workbench, click the **+** button to add a new web part.
   - Search for the `IconToOpenPopup` web part and add it.

4. **Test the Web Part**:
   - Configure the web part using the property pane.
   - Test all features (e.g., hover text, popup, iframe URL, etc.).

---

### **Stopping the Development Server**

1. In the terminal where `gulp serve` is running, press `Ctrl + C`.
2. Confirm termination by typing `Y` if prompted.

---

### **Additional Commands**

- **Untrust the Development Certificate**:
  ```
  gulp untrust-dev-cert
  ```

