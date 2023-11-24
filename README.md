# Cloudinary Image Uploader

This simple JavaScript code allows you to upload images to Cloudinary easily and quickly. Cloudinary is a cloud service that provides solutions for managing and delivering media assets, such as images and videos. Before using this code, make sure to have an account on Cloudinary and obtain your `cloudname` as you will need it to complete the API URL.

## Prerequisites

1. **Cloudinary Account**: If you don't have a Cloudinary account yet, you can [create one here](https://cloudinary.com/users/register).

## Configuration

Before you start, make sure to replace `<Cloud_name>` in the `CLOUDINARY_URL` constant with your own Cloudinary `cloudname`. Also, you can adjust the `CLOUDINARY_UPLOAD_PRESET` constant according to your needs.

```javascript
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/<Cloud_name>/image/upload`;
const CLOUDINARY_UPLOAD_PRESET = "ouemktrz";
```

## Usage

1. Include the script in your HTML project:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="your_file.js"></script>
```

2. Ensure you have HTML elements in your page with the following IDs:

```html
<input type="file" id="img-uploader" />
<img id="img-muestra" alt="Uploaded Image" />
<input type="text" id="url" readonly />
```

3. Upload an image by selecting it through the upload button. The URL of the image on Cloudinary will be displayed in the text field.

This code uses the Axios library to make the HTTP request to the Cloudinary API. You can adjust and customize this code according to your specific needs.

Remember to protect your API keys and secrets, and be cautious when sharing this code in public environments to prevent potential misuse. Enjoy hassle-free image uploading with Cloudinary!
