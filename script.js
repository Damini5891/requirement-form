document.getElementById("submitBtn").addEventListener("click", function () {
  const mobileInput = document.getElementById("mobile");
  const mobile = mobileInput.value;
  const name = document.getElementById("name").value;
  const imageInput = document.getElementById("image");
  const image = imageInput.files[0];

  if (/^\d{10}$/.test(mobile)) {
    const hiddenMobile = mobile.replace(/^(\d{5}).*/, "$1*****");
    mobileInput.value = hiddenMobile;
    mobileInput.setAttribute("data-original-value", mobile);
    document.getElementById("revealBtn").style.display = "block";
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.src = e.target.result;
    img.alt = "User Image";
    document.getElementById("frame-content").appendChild(img);
  };
  reader.readAsDataURL(image);

  const frame = document.getElementById("result");
  frame.style.display = "block";
  const resultName = document.getElementById("result-name");
  resultName.textContent = "Name: " + name;
  const currentDate = new Date().toLocaleDateString();
  document.getElementById("current-date").textContent = "Date: " + currentDate;

  const randomColor = "#" + (Math.random().toString(16) + "000000").slice(2, 8);
  frame.style.borderColor = randomColor;
});

document.getElementById("revealBtn").addEventListener("click", function () {
  const mobileInput = document.getElementById("mobile");
  const originalMobile = mobileInput.getAttribute("data-original-value");
  mobileInput.value = originalMobile;
  this.style.display = "none";
});

document.getElementById("refreshBtn").addEventListener("click", function () {
  document.getElementById("myForm").reset();
  document.getElementById("revealBtn").style.display = "none";
  document.getElementById("result").style.display = "none";
});
