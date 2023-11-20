const imgMuestra = document.getElementById('img-muestra');
const imageUploader = document.getElementById('img-uploader');

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/<Cloud_name>/image/upload`;
const CLOUDINARY_UPLOAD_PRESET = "ouemktrz";
const url = document.getElementById("url");


window.addEventListener('DOMContentLoaded', (event) => {
    imageUploader.addEventListener('change', async (e) => {
        // console.log(e);
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        // Send to cloudianry
        const res = await axios.post(
            CLOUDINARY_URL,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }
        )
        // .then((response) => {
        //         console.log(response.data)
        //     })
            ;
        console.log(res);
        url.value = res.data.url;
        $("#img-muestra").attr("src", url.value);
    });
});