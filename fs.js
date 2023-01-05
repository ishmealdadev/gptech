const form = document.forms.namedItem("fileinfo");
const omodal = document.getElementById('btnbutton');
form.addEventListener(
  "submit",
  (event) => {
    const output = document.querySelector("output");
    const formData = new FormData(form);

    formData.append("CustomField", "This is some extra data");

    const request = new XMLHttpRequest();
    request.open("POST", "https://formspree.io/f/xbjejkgn", true);
    request.onload = (progress) => {
      output.innerHTML =
        request.status === 200
          ? "Uploaded!"
          : `Error ${request.status} occurred when trying to upload your file.<br />`;
    };

    request.send(formData);
    omodal.click()
    event.preventDefault();
  },
  false
);



const selectElement = document.querySelector('.course-picker');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `${event.target.value}  ` ;


});