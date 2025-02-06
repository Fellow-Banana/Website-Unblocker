# Website Unblocker
<https://fellow-banana.github.io/Website-Unblocker/>

**Disclaimer:** This tool will not work on all websites. Some sites have security settings (such as `X-Frame-Options: DENY` or `Content-Security-Policy` restrictions) that prevent them from being embedded inside an iframe.

## How It Works
This project creates a **Blob URL** that contains an **iframe**, allowing users to attempt embedding websites that do not explicitly block this method. The process follows these steps:

1. The user enters a website URL into an input field.
2. A **Blob** is generated containing an HTML page with an `<iframe>` pointing to the given URL.
3. A **Blob URL** is created and opened in a new tab, displaying the website inside an iframe.

## Usage
1. **Visit the hosted GitHub Pages version** of this tool.
2. **Enter a website URL** in the input field (e.g., `https://example.com`).
3. **Click the "Unblock" button** to open the site inside a new Blob-based tab.

## Example Data URL
If you want to achieve the same effect manually, you can use the following **data URL**:
```
data:text/html;charset=utf-8,<script>const u=URL.createObjectURL(new Blob([`<html><body style='margin:0;padding:0;'><iframe src='https://example.com' width='100%' height='100%' style='border:none;'></iframe></body></html>`], { type: 'text/html' }));window.location.href=u;</script>
```
Replace `https://example.com` with any website you want to attempt embedding.

## Limitations
- Websites with `X-Frame-Options: DENY` **cannot be embedded**.
- Sites with strict `Content-Security-Policy` rules may also block this method.
- Some browsers (especially mobile ones) might have additional restrictions.
