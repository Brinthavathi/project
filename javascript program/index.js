const scriptURL="https://script.google.com/macros/s/AKfycbxkgWotCMyvIKoT9aGtPCndZdHtHrq8i972t9CKAVjo6xC7T0I/exec"
const form = document.forms['google-sheet']

form.addEventListener('submit',e => {e.preventDefault(
	fetch(scriptURL,{method:'post',body:new formData(form)})
	.then(response => alert("thanks for contracting us...! we will contact you soon..."))
	.catch(error => console.error('error!',error.message))
})