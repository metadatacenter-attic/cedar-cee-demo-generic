# CEDAR Embeddable Editor (CEE) Generic Demo

This demo provides a sample integration of CEE into a generic HTML + Javascript website.

# Installation

All of the required dependencies, such as javascript libraries, images, and the latest version of the CEE Webcomponent are already packaged with this demo. You can use this demo as a shell for your own application or as a reference on how to embed and configure the CEE Webcomponent in your own environment.

## Clone the repository

Clone this repository onto a local directory of your choice:

```shell
git clone https://github.com/metadatacenter/cedar-cee-demo-generic.git
```

## Configure the project

Create a file `cedar-cee-demo-generic/assets/data/cee-config.json` by copying the provided sample configuration file:

```shell
cd cedar-cee-demo-generic
cp assets/data/cee-config.json.sample assets/data/cee-config.json
```

## Configure endpoints (optional)

### Metadata save endpoint

CEE offers the functionality to save user metadata using a custom remote endpoint. If you plan to enable this feature, you will need to change the following configuration parameters in your `cee-config.json`:

```json
"showDataSaver": true,
"dataSaverEndpointUrl": "http://localhost:8000/datasave.php",
```
Replace `dataSaverEndpointUrl` with a URL pointing to the endpoint that will handle metadata submissions.

### Template upload endpoint

CEDAR Embeddable Editor includes an optional feature that allows uploading a template source file and creating metadata for that template.

If you plan to enable that functionality, you will need to confgigure two endpoints in your `cee-config.json`:

```json
"showTemplateUpload": true,
"templateUploadBaseUrl": "http://localhost:8000",
"templateUploadEndpoint": "/upload.php",
"templateDownloadEndpoint": "/download.php",
```
Replace `templateUploadBaseUrl` with a URL pointing to the root of the server on which the endpoints reside. Configure `templateUploadEndpoint` and `templateDownloadEndpoint` to their respective paths from the `templateUploadBaseUrl`. 

For a more complete description of these endpoints as well as other optional configuration parameters, please refer to the [**Configuration**](https://github.com/metadatacenter/cedar-embeddable-editor#configuration) section of CEE documentation:

https://github.com/metadatacenter/cedar-embeddable-editor#configuration

# Start server and navigate to the demo app in browser

Start a Web server. For example, to start a local PHP server, run:

```
php -S localhost:<local_port>
```

Navigate to your HTML `index.html` page on the server that hosts the demo app:

```shell
https://<your server url>/index.html
```

If the installation completed successfully, the CEDAR Embeddable error should load without errors.

# Passing data to and from CEE Webcomponent

CEE allows custom data to be passed to the Webcomponent, which then becomes available to your Metadata save endpoint. The custom data is passed by calling the corresponding Webcomponent API. The provided `index.html` file already includes stubs for these calls. You need to modify them to include your own custom attributes. 

Example:

```javascript
function getCustomTemplateInfo() {
    return {
        mycustomtitle: 'ACME Template',
        mycustomurl: 'https://doi.org/10.15468/9vuieb',
        mycutomdataattribute1: 'Hello World',
        mycutomdataattribute2: {name: 'John Doe', age: 35}
    };
}

document.addEventListener('WebComponentsReady', function () {
    const comp = document.querySelector('cedar-embeddable-editor');
    comp.templateInfo = getCustomTemplateInfo();
});
```

When a user pushes the **Save** (metadata) button, any custom attributes you passed to the component, are also passed to the Metadata save endpoint.

Example:

```json
{
    "metadata": {__contents of metadata__},
    "info": {
        "mycustomtitle": "ACME Template",
        "mycustomurl": "https://doi.org/10.15468/9vuieb",
        "mycutomdataattribute1": "Hello World",
        "mycutomdataattribute2": {
            "name": "John Doe",
            "age": 35
        }
    }
}
```
