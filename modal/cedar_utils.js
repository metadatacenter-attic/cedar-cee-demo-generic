window.onload = () => {
    waitForElementToLoad(".cdk-overlay-container", 0).then(function() {
        const cee = document.querySelector('cedar-embeddable-editor');
        const dialog = document.getElementById("genericModalDialog");
        const collection = document.getElementsByClassName("cdk-overlay-container");
        dialog.append(collection[0]);
    });
}

/**
 * Wait for an element before resolving a promise
 * Need this to detect when the element "cdk-overlay-container"
 * has been loaded
 */
function waitForElementToLoad(querySelector, timeout=0) {
    const startTime = new Date().getTime();
    return new Promise((resolve, reject) => {
        const timer = setInterval(() => {
            const now = new Date().getTime();

            if (document.querySelector(querySelector)) {
                clearInterval(timer);
                resolve();
            } else if (timeout && now - startTime >= timeout){
                clearInterval(timer);
                reject();
            }
        }, 100);
    });
}

function openModal() {
    console.log("Init the modal");
    const dialog = document.getElementById("genericModalDialog");
    dialog.showModal();
    setTimeout(configCedar, 250);
}

function closeModal() {
    const dialog = document.getElementById("genericModalDialog");
    console.log("closing genericModal");
    dialog.close();
}

function configCedar() {
    console.log("Loading CEDAR config");
    var cee = document.querySelector("cedar-embeddable-editor");
    
    // config for the metadata template and layout of the CEDAR editor                                                                                                     
    cee.loadConfigFromURL("https://dryad-ryan-devbucket.s3.amazonaws.com/cee-config45.json");   
}
