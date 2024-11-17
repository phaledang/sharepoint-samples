# Summary

## IconToOpenPopupWebPart

The **IconToOpenPopupWebPart** is a SharePoint Framework (SPFx) web part designed to display a configurable icon that opens a popup with an embedded iframe. It provides flexibility to customize the icon, hover text, caption, and iframe content.
## Key Features

1. **Configurable Icon**:
   - Allows users to provide a custom SVG or image URL for the icon.
   - Defaults to a built-in SVG icon if no custom icon is provided.

2. **Popup with Iframe**:
   - Clicking the icon opens a popup containing an iframe.
   - The iframe content URL can be customized.

3. **Customizable Text**:
   - Users can define hover text for the icon.
   - Users can also specify caption text displayed below the icon.

4. **Responsive Design**:
   - The popup is centered on the screen with a fixed size (320x480 pixels).
   - Includes a close button for the popup.

5. **Easy Configuration**:
   - All settings are managed via the property pane:
     - **Iframe URL**: URL of the iframe content.
     - **Icon Path**: Custom SVG or image URL for the icon.
     - **Hover Text**: Tooltip text displayed on hovering over the icon.
     - **Caption Text**: Text displayed below the icon.

---

## Development and Deployment

- **Environment Setup**:
  - Requires Node.js, Gulp, and the SharePoint Framework Yeoman generator.
  - [setup-and-init-project](/documents/setup-and-init-project.md)
  
- **Debug Locally**:
  - Uses the SharePoint Workbench (local or online) for testing during development.
  - [local-debug](/documents/local-debug.md)
  - 
- **Deployment**:
  - Packaged as a `.sppkg` file and deployed to the SharePoint App Catalog.
  - Can be added to modern SharePoint pages via the web part gallery.
  - [prepare-deployment-package](/documents/prepare-deployment-package.md)
  - [prepare-deployment-package](/documents/prepare-deployment-package.md)
  
- **Add webpart to page**
  - [using-the-deployed-webpart](/documents/using-the-deployed-webpart.md)


## Use Cases

- **Embed External Content**:
  - Display content from an external URL in the popup iframe (e.g., forms, dashboards, videos).
  
- **Custom Icon and Branding**:
  - Customize the icon to match the site’s branding or use unique visuals for functionality.

- **Information Popups**:
  - Provide additional context, tutorials, or forms in a focused popup interface.

---

## **Configuration Options**

The following parameters can be configured via the property pane of the `IconToOpenPopupWebPart`:

| **Property**       | **Description**                                               | **Default Value**           |
|---------------------|---------------------------------------------------------------|-----------------------------|
| **iframeUrl**       | The URL of the content to display in the iframe popup.         | `https://example.com`       |
| **iconPath**        | The path to the icon image (SVG or image URL).                 | `https://picsum.photos/200` |
| **hoverText**       | The tooltip text displayed when hovering over the icon.        | `Click on the icon to open` |
| **captionText**     | The text displayed below the icon.                             | `Click on the icon to open` |
| **imageWidth**      | The width of the icon image in pixels.                         | `200`                       |
| **imageHeight**     | The height of the icon image in pixels.                        | `200`                       |
| **iframeWidth**     | The width of the iframe popup in pixels.                       | `320`                       |
| **iframeHeight**    | The height of the iframe popup in pixels.                      | `480`                       |

---

### **Example Configuration**

To configure the web part, use the property pane and adjust the following values:

- **Iframe URL**: `https://www.example.com/dashboard`
- **Icon Path**: `https://via.placeholder.com/150`
- **Hover Text**: `Open the dashboard`
- **Caption Text**: `Click to view more details`
- **Image Width**: `150`
- **Image Height**: `150`
- **Iframe Width**: `400`
- **Iframe Height**: `600`

This configuration would:
- Display an icon of `150x150` pixels.
- Open an iframe popup of size `400x600` pixels.
- Show the tooltip `Open the dashboard` on hover.
- Display the caption `Click to view more details` below the icon.

---

You can customize these values based on your requirements to seamlessly integrate the web part into your SharePoint pages.
       |

---

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.20.0-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)


## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| folder name | Author details (name, company, twitter alias with link) |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.1     | March 10, 2021   | Update comment  |
| 1.0     | January 29, 2021 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

> Include any additional steps as needed.



## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
