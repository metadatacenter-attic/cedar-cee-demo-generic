CEDAR Embeddable Editor Generic Demo
=======================
CEDAR Embeddable Editor Integration into a simple HTML + Javascript + CSS website

# Installation

## Clone the project

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

If you plan to enable the metadata save functionality, you will need to change the following configuration parameters in your `cee-config.json`:

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

# Start server and open the demo app:

Start a Web server. For example, to start a local PHP server, run:

```
php -S localhost:<local_port>
```

Navigate to your HTML `index.html` page on the server that hosts the demo app:

```shell
https://<your server url>/index.html
```

If the installation completed successfully, the CEDAR Embeddable error should load without errors.
