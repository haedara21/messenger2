let writeMessge = document.querySelector(".header .right i");
let list = document.querySelector(".header .left");
let containList = document.querySelector(".contain-list");
let gear = document.querySelector(".info .right i");
let clos = document.querySelector(".close");
let logo = document.querySelector(".logo");
let logoH5 = document.querySelector(".logo h5");
let setting = document.querySelector(".setting");
let settingArrow = document.querySelector(".setting .one");
let dar = document.querySelector("#one");
let imagPersonal = document.querySelectorAll(".image-name img");
let nameOfImage = document.querySelectorAll(".image-name .friends h3");
let nameOfContent = document.querySelectorAll(".image-name .friends span");
let personImage = document.querySelectorAll(".image-name");
let photo = document.querySelector(".personal-info i");
let upload = document.querySelector("#upload");
let image = document.querySelector(".personal-info label img");
let imageMain = document.querySelector(".info .left img");
let containlistLeftH2 = document.querySelector(".info .left h2");
let search = document.querySelector(".left .search input");
let refresh = document.querySelector(".left .search .fa-refresh");
let searchIcon = document.querySelector(".left .search i");
let message = document.querySelector(".footer .right #messge");
let messageSpan = document.querySelector(".footer .right .span");
let imgSend = document.querySelector(".footer .right img");
let footerMessage = document.querySelector(".sendMessge .footer");
let headerMessage = document.querySelector(".sendMessge .header2");
let back = document.querySelector(".sendMessge .header2 .left i");
let headerImg = document.querySelector(".sendMessge .header2 .left");
let sendMessage = document.querySelector(".sendMessge");
let Send = document.querySelector(".bodysend");
let photoSend = document.querySelector(".bodysend .left img");
let photoRecive = document.querySelector(".bodysend .right img");
let SendLeft = document.querySelector(".bodysend .left");
let spans = document.querySelector(".bodysend .left span img");
let SendRight = document.querySelector(".bodysend .right");
let downloadImage = document.querySelector(".footer #image");
let black = document.querySelector("#op-black h3");
let container = document.querySelector(".container");
let filtersOne = document.querySelectorAll(".setting ul .onetwo li input");
let filtersTwo = document.querySelectorAll(".setting ul .twoone li input");
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hue = document.getElementById("hue-rotate");
let logoSpan = document.querySelector(".logo .spaTwo");
let logoActive = document.querySelector(".logo .spaOne");
let logoImg = document.querySelector(".logo img");
let camera = document.querySelector(".camera");
let photoNameUser = document.querySelector(".photoNameUser");
let orderSending = document.querySelector("#order-sending-button");
let orderSendingWindow = document.querySelector(".order-sending");
let orderRecImg = document.querySelector(".one-order img");
let orderRecUserName = document.querySelector(".one-order .user-name");
let archiveMessage = document.querySelector("#archive-message-button");
let archiveMessageWindow = document.querySelector(".archive-message");
let iconArchive = document.querySelectorAll(".icon-archive");
let bodyArchive = document.querySelector(".archive-recived ");
let inputUserName = document.querySelector("#Updateusername");
let updateNameButton = document.querySelector("#updateNameButton");
let timeo = new Date();

let t = 50;
logoActive.style.display = "block";
archive();
selectRecived();
inputWriteMessage();
archiveWindow1();
orderSending1();

downloadImage.onchange = () => {
  let file = new FileReader();
  file.readAsDataURL(downloadImage.files[0]);
  file.onload = function () {
    Swal.fire({
      title: "Are you sure to send this image?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#aaa",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "sending!",
          text: "Your image has been sent.",
          icon: "success",
        });
        SendLeft.innerHTML += `
              <div class="one"  style="transform: translateY(${t}px)">
               <img src="D:\\FRONT END\\\u0627\u0644\u0645\u0634\u0631\u0648\u0639\\img\\ic4.png" alt="" />
               <span style="width: fit-content; height: fit-content; background: none;"><img  src="${
                 file.result
               }" style="width: 150px; border-radius: 20px; border:1px solid var(--color-text); height: 200px;">
               ${timeo.getHours()}:${timeo.getMinutes()}</span>
              </div>
              `;
        message.value = " ";
        t = t + 300;
      }
    });
  };
};
if (localStorage.getItem("nameUpdated") !== null) {
  inputUserName.setAttribute(
    "placeholder",
    localStorage.getItem("nameUpdated")
  );
  containlistLeftH2.textContent = localStorage.getItem("nameUpdated");
  logoH5.textContent = localStorage.getItem("nameUpdated");
}

if (localStorage.getItem("--background-color") !== null) {
  document.documentElement.style.setProperty(
    "--background-color",
    localStorage.getItem("--background-color")
  );
}
if (localStorage.getItem("--background-color-item") !== null) {
  document.documentElement.style.setProperty(
    "--background-color-item",
    localStorage.getItem("--background-color-item")
  );
}
if (localStorage.getItem("--color-text") !== null) {
  document.documentElement.style.setProperty(
    "--color-text",
    localStorage.getItem("--color-text")
  );
}
if (localStorage.getItem("--icon-color") !== null) {
  document.documentElement.style.setProperty(
    "--icon-color",
    localStorage.getItem("--icon-color")
  );
}
if (localStorage.getItem("--shadow") !== null) {
  document.documentElement.style.setProperty(
    "--shadow",
    localStorage.getItem("--shadow")
  );
}
function black3() {
  document.documentElement.style.setProperty("--background-color", "black");
  document.documentElement.style.setProperty(
    "--background-color-item",
    "#f1f5f9"
  );
  document.documentElement.style.setProperty("--color-text", "white");
  document.documentElement.style.setProperty("--icon-color", "#e30ca2d0");
  document.documentElement.style.setProperty("--shadow", "#4e4e4e");
  footerMessage.style.boxShadow = "none";
  headerMessage.style.boxShadow = "none";
  localStorage.setItem(
    "--background-color",
    document.documentElement.style.getPropertyValue("--background-color")
  );
  localStorage.setItem(
    "--background-color-item",
    document.documentElement.style.getPropertyValue("--background-color-item")
  );
  localStorage.setItem(
    "--color-text",
    document.documentElement.style.getPropertyValue("--color-text")
  );
  localStorage.setItem(
    "--icon-color",
    document.documentElement.style.getPropertyValue("--icon-color")
  );
  localStorage.setItem(
    "--shadow",
    document.documentElement.style.getPropertyValue("--shadow")
  );
  black.textContent = "الوضع المضيء";
}
function black4() {
  document.documentElement.style.setProperty("--background-color", "#f1f5f9");
  document.documentElement.style.setProperty(
    "--background-color-item",
    "white"
  );
  document.documentElement.style.setProperty("--color-text", "black");
  document.documentElement.style.setProperty("--icon-color", "#8b09ab");
  document.documentElement.style.setProperty("--shadow", "#aaa");
  footerMessage.style.boxShadow = "none";
  headerMessage.style.boxShadow = "none";
  localStorage.setItem(
    "--background-color",
    document.documentElement.style.getPropertyValue("--background-color")
  );
  localStorage.setItem(
    "--background-color-item",
    document.documentElement.style.getPropertyValue("--background-color-item")
  );
  localStorage.setItem(
    "--color-text",
    document.documentElement.style.getPropertyValue("--color-text")
  );
  localStorage.setItem(
    "--icon-color",
    document.documentElement.style.getPropertyValue("--icon-color")
  );
  localStorage.setItem(
    "--shadow",
    document.documentElement.style.getPropertyValue("--shadow")
  );
  black.textContent = "الوضع المظلم";
}
function inputWriteMessage() {
  message.addEventListener("click", () => {
    messageSpan.style.width = "270px";
  });
  /*  */
  message.onmouseleave = () => {
    messageSpan.style.width = "200px";
  };
}
function inputWriteMessage2() {
  message.addEventListener("click", () => {
    messageSpan.style.width = "320px";
  });
  /*  */
  message.onmouseleave = () => {
    messageSpan.style.width = "280px";
  };
}
function inputWriteMessage3() {
  message.addEventListener("click", () => {
    messageSpan.style.width = "220px";
  });
  message.onmouseleave = () => {
    messageSpan.style.width = "200px";
  };
}

imgSend.addEventListener("click", () => {
  SendLeft.innerHTML += `
    <div class="one" style="transform: translateY(${t}px)">
     <img src="D:\\FRONT END\\\u0627\u0644\u0645\u0634\u0631\u0648\u0639\\img\\ic4.png" alt="" />
     <span>${message.value}</span>
     <span style ="background: none; width: 100px; transform: translate(-89px, 46px);">${timeo.getHours()}:${timeo.getMinutes()}</span>
    </div>
    `;
  message.value = " ";
  t = t + 100;
});
back.addEventListener("click", () => {
  console.log("kljhgf");
  sendMessage.style.right = "-100%";
});
writeMessge.addEventListener("click", () => {
  Swal.fire({
    icon: "success",
    text: "please select user name from a name friends",
  });
  sendMessage.style.right = "0";
});
function selectRecived() {
  for (let i = 0; i < personImage.length; i++) {
    personImage[i].addEventListener("click", (e) => {
      photoNameUser.innerHTML = `
            <img src="${imagPersonal[i].src}">
            <h3>${nameOfImage[i].textContent}</h3>
            `;
      sendMessage.style.right = "0";
      photoRecive.src = imagPersonal[i].src;
      photoSend.src = image.src;
    });
  }
}

if (search.value !== " ") {
  let nameInSearch = /\w+\w+/ig;
  searchIcon.addEventListener("click", () => {
    let value = search.value.match(nameInSearch);
    for (let i = 0; i < nameOfImage.length; i++) {
      if (nameOfImage[i].textContent.includes(value[0])) {
        personImage[i].style.display = "flex";
      } else {
        personImage[i].style.display = "none";
      }
    }
  });
}



function one() {
  for (let i = 0; i < personImage.length; i++) {
    personImage[i].style.display = "flex";
    iconArchive[i].style.display = "block";
  }
}
function two() {
  for (let i = 0; i < personImage.length; i++) {
    personImage[i].style.display = "none";
    iconArchive[i].style.display = "none";
  }
}
function orderFooter() {
  orderSendingWindow.style.top = "-90%";
  archiveMessageWindow.style.top = "-90%";
}
function orderRecived() {
  sendMessage.style.right = "0";
  photoNameUser.innerHTML = `
    <img src="${orderRecImg.src}">
    <h3>${orderRecUserName.textContent}</h3>
    `;
}
function updateName() {
  inputUserName.setAttribute("placeholder", " ");
  inputUserName.removeAttribute("disabled");
  inputUserName.addEventListener("click", () => {
    updateNameButton.style.display = "block";
    updateNameButton.addEventListener("click", () => {
      inputUserName.toggleAttribute("disabled");
      Swal.fire({
        title: "Are you sure to update user name?",
        showCancelButton: true,
        confirmButtonColor: "#aaa",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Thank You",
      }).then((result) => {
        if (result.isConfirmed) {
          inputUserName.setAttribute("placeholder", `${inputUserName.value}`);
          containlistLeftH2.textContent = `${inputUserName.value}`;
          logoH5.textContent = `${inputUserName.value}`;
          localStorage.setItem("nameUpdated", `${inputUserName.value}`);
          inputUserName.style.color = "var(--icon-color)";
          inputUserName.style.textAlign = "center";
          inputUserName.style.fontSize = "20px";
          inputUserName.style.fontWeight = "bold";
          window.location.reload();
        }
      });
    });
  });
}
function archive() {
  for (let i = 0; i < personImage.length; i++) {
    iconArchive[i].addEventListener("click", () => {
      bodyArchive.innerHTML += `
        <div class="one-archive">
        <img src="${imagPersonal[i].src}" alt="" />
        <div class="user-message-archive">
            <span class="user-name">${nameOfImage[i].textContent}</span>
            <span>${nameOfContent[i].textContent}</span>
        </div>
        </div>
        `;
      iconArchive[i].remove();
      personImage[i].remove();
    });
  }
}

refresh.onmouseover = () => {
  refresh.classList.add("spin");
};
refresh.onmouseleave = () => {
  refresh.classList.remove("spin");
};
function archiveWindow1() {
  archiveMessage.addEventListener("click", () => {
    archiveMessageWindow.style.top = "18%";
    containList.style.left = "-100%";
  });
}
function archiveWindow2() {
  archiveMessage.addEventListener("click", () => {
    archiveMessageWindow.style.top = "11%";
    containList.style.left = "-100%";
  });
}
function orderSending1() {
  orderSending.addEventListener("click", () => {
    orderSendingWindow.style.top = "18%";
    containList.style.left = "-100%";
  });
}
function orderSending2() {
  orderSending.addEventListener("click", () => {
    orderSendingWindow.style.top = "11%";
    containList.style.left = "-100%";
  });
}
if (localStorage.getItem("imagest") !== null) {
  image.src = localStorage.getItem("imagest");
  imageMain.src = localStorage.getItem("imagest");
  logoImg.src = localStorage.getItem("imagest");
}
list.addEventListener("click", () => {
  containList.style.left = "0";
});
clos.addEventListener("click", () => {
  containList.style.left = "-100%";
});
dar.addEventListener("click", () => {
  containList.style.left = "-100%";
});
gear.addEventListener("click", () => {
  gear.classList.add("spin");
  setting.style.left = "0";
});
/*  clos.addEventListener("click" , () =>{
        containList.style.left = "-50%";
    }) */
window.onload = () => {
  logo.style.top = "0";
};
settingArrow.addEventListener("click", () => {
  setting.style.left = "-105%";
  gear.classList.remove("spin");
});
for (let i = 0; i < imagPersonal.length; i++) {
  imagPersonal[i].addEventListener("click", (e) => {
    Swal.fire({
      imageUrl: e.target.src,
      imageWidth: 500,
      imageHeight: 500,
    });
  });
}
upload.onchange = () => {
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    image.src = file.result;
    imageMain.src = file.result;
    logoImg.src = file.result;
    localStorage.setItem("imagest", file.result);
  };
};
filtersOne.forEach((filter) => {
  filter.addEventListener("input", () => {
    container.style.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            `;
  });
});
filtersTwo.forEach((filtertwo) => {
  filtertwo.addEventListener("input", () => {
    container.style.filter = `
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            hue-rotate(${hue.value}deg)

            `;
  });
});
function zero() {
  container.style.filter = "none";
  saturate.value = "100";
  brightness.value = "100";
  sepia.value = "100";
  grayscale.value = "0";
  blur.value = "0";
  hue.value = "0";
}
let a = window.matchMedia("(min-width: 250px)");
let b = window.matchMedia("(max-width: 499px)");

if (a.matches && b.matches) {
  list.addEventListener("click", () => {
    containList.style.left = "0";
  });
  clos.addEventListener("click", () => {
    containList.style.left = "-150%";
  });
  writeMessge.addEventListener("click", () => {
    sendMessage.style.right = "0";
  });
  back.addEventListener("click", () => {
    sendMessage.style.right = "-100%";
  });
  inputWriteMessage3();
  archiveWindow2();
  orderSending2();
}
let y = window.matchMedia("(min-width: 500px)");
let x = window.matchMedia("(max-width: 900px)");

if (y.matches && x.matches) {
  list.addEventListener("click", () => {
    containList.style.left = "0";
  });
  clos.addEventListener("click", () => {
    containList.style.left = "-100%";
  });
  writeMessge.addEventListener("click", () => {
    sendMessage.style.right = "0";
  });
  back.addEventListener("click", () => {
    sendMessage.style.right = "-100%";
  });
  inputWriteMessage2();
  archiveWindow2();
  orderSending2();
}

let w = window.matchMedia("(min-width: 901px)");
let s = window.matchMedia("(max-width: 1024px)");

if (w.matches && s.matches) {
  list.addEventListener("click", () => {
    containList.style.left = "0";
  });
  clos.addEventListener("click", () => {
    containList.style.left = "-100%";
  });
  writeMessge.addEventListener("click", () => {
    sendMessage.style.right = "0";
  });
  back.addEventListener("click", () => {
    sendMessage.style.right = "-100%";
  });
  inputWriteMessage2();
  archiveWindow2();
  orderSending2();
}
