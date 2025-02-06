const urlInput = document.getElementById('url-input');
const unblockButton = document.getElementById('unblock-button');
const generateDataURLButton = document.getElementById('generate-data-url-button');
const dataURLOutput = document.getElementById('data-url-output');

function unblockWebsite(url) {
    try {
        let validatedUrl;
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            validatedUrl = "https://" + url;
        } else {
          validatedUrl = url;
        }
        window.open(validatedUrl, '_blank'); // Open in new tab
    } catch (error) {
        console.error("Error unblocking website:", error);
        alert("Invalid URL or unable to load website.");
    }
}

function generateDataURL(url) {
    try {
        let validatedUrl;
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            validatedUrl = "https://" + url;
        } else {
          validatedUrl = url;
        }
        const dataURL = `data:text/html;charset=utf-8,<script>const u=URL.createObjectURL(new Blob([\`<html><body style='margin:0;padding:0;'><iframe src='${validatedUrl}' width='100%' height='100%' style='border:none;'></iframe></body></html>\`], { type: 'text/html' }));window.location.href=u;</script>`;
        dataURLOutput.value = dataURL;
    } catch (error) {
        console.error("Error generating data URL:", error);
        alert("Invalid URL.");
    }
}

urlInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        unblockWebsite(this.value);
    }
});

unblockButton.addEventListener('click', function() {
    unblockWebsite(urlInput.value);
});

generateDataURLButton.addEventListener('click', function() {
    generateDataURL(urlInput.value);
});