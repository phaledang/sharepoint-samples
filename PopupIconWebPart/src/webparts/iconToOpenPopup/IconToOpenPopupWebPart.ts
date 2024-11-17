import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  PropertyPaneTextField,
  IPropertyPaneConfiguration
} from '@microsoft/sp-property-pane';

export interface IIconToOpenPopupWebPartProps {
  iframeUrl: string; // URL for iframe content
  iconPath: string; // Path to icon (SVG or image URL)
  hoverText: string; // Hover text for the icon
  captionText: string; // Caption text displayed below the icon
  imageWidth: string; // Width of the image
  imageHeight: string; // Height of the image
  iframeWidth: string; // Width of the iframe popup
  iframeHeight: string; // Height of the iframe popup
}

export default class IconToOpenPopupWebPart extends BaseClientSideWebPart<IIconToOpenPopupWebPartProps> {
  public render(): void {
    const iframeUrl = this.properties.iframeUrl || 'https://example.com';
    const iconPath = this.properties.iconPath || 'https://picsum.photos/200';
    const hoverText = this.properties.hoverText || 'Click on the icon to open';
    const captionText = this.properties.captionText || 'Click on the icon to open';
    const imageWidth = this.properties.imageWidth || '82';
    const imageHeight = this.properties.imageHeight || '77';
    const iframeWidth = this.properties.iframeWidth || '320';
    const iframeHeight = this.properties.iframeHeight || '480';

    this.domElement.innerHTML = `
      <div style="text-align: center; margin-top: 100px; font-family: Arial, sans-serif;width=${imageWidth}px height=${imageHeight}px ">
        <div 
          style="display: inline-block; padding: 20px; border-radius: 8px; transition: background-color 0.3s; cursor: pointer;"
          title="${hoverText}"
          onmouseover="this.style.backgroundColor='#f0f0f0';"
          onmouseout="this.style.backgroundColor='transparent';"
          onclick="document.getElementById('iframePopupContainer').style.display = 'block';">
          <img src="${iconPath}" alt="Web Part Icon" width="${imageWidth}px" height="${imageHeight}px" />
        </div>
        <p>${captionText}</p>
        <div id="iframePopupContainer" style="display: none; position: fixed; top: 50%; left: 50%; width: ${iframeWidth}px; height: ${iframeHeight}px; transform: translate(-50%, -50%); border: 1px solid #ccc; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); z-index: 1000; background: white;">
          <button onclick="document.getElementById('iframePopupContainer').style.display = 'none';" style="position: absolute; top: 5px; right: 5px; border: none; background: #f44336; color: white; cursor: pointer; padding: 5px 10px;">X</button>
          <iframe src="${iframeUrl}" style="width: 100%; height: 100%; border: none;"></iframe>
        </div>
      </div>
    `;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Configure the iframe URL, icon, hover text, caption text, and dimensions"
          },
          groups: [
            {
              groupName: "Settings",
              groupFields: [
                PropertyPaneTextField('iframeUrl', {
                  label: "Iframe URL",
                  placeholder: "Enter the URL to display in the iframe"
                }),
                PropertyPaneTextField('iconPath', {
                  label: "Icon Path (SVG or Image URL)",
                  placeholder: "Enter the SVG content or URL for the icon"
                }),
                PropertyPaneTextField('hoverText', {
                  label: "Hover Text",
                  placeholder: "Enter the hover text for the icon"
                }),
                PropertyPaneTextField('captionText', {
                  label: "Caption Text",
                  placeholder: "Enter the caption text below the icon"
                }),
                PropertyPaneTextField('imageWidth', {
                  label: "Image Width (in pixels)",
                  placeholder: "Enter the image width (e.g., 200)"
                }),
                PropertyPaneTextField('imageHeight', {
                  label: "Image Height (in pixels)",
                  placeholder: "Enter the image height (e.g., 200)"
                }),
                PropertyPaneTextField('iframeWidth', {
                  label: "Iframe Width (in pixels)",
                  placeholder: "Enter the iframe width (e.g., 320)"
                }),
                PropertyPaneTextField('iframeHeight', {
                  label: "Iframe Height (in pixels)",
                  placeholder: "Enter the iframe height (e.g., 480)"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
