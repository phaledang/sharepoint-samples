# Deploy and Configure IconToOpenPopupWebPart on SharePoint

This guide provides detailed instructions to deploy and configure the `IconToOpenPopupWebPart` on your SharePoint tenant.

---

## **1. Set environment variable**
### cmd
` set SPFX_SERVE_TENANT_DOMAIN=mytenant.sharepoint.com `

### Powershell
`$env:SPFX_SERVE_TENANT_DOMAIN = mytenant.sharepoint.com `  

### Powershell
` export SPFX_SERVE_TENANT_DOMAIN=mytenant.sharepoint.com `

## **2. Bundle the Web Part**

Bundling prepares the JavaScript files and other resources for deployment.

---

### **Steps to Bundle**

1. Open a terminal in your SPFx project directory.
2. Run the following command:
   ```bash
   gulp bundle --ship

## **3. Package the Solution**

Packaging creates a deployable `.sppkg` file, which is used to upload and deploy the web part to SharePoint.
---

### **Steps to Package**
1. Open a terminal in your SPFx project directory.
2. Run the following command to package the solution:
   ```bash
   gulp package-solution --ship
   ```
The --ship flag ensures the package is optimized for production deployment.
### Output
After running the command, the .sppkg file will be generated and placed in the following directory:
```
<project-root>/sharepoint/solution/
```