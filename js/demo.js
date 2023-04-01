//  ---------------------- header -------------

document.querySelector(".fa-ellipsis-vertical").onclick = function () {
  this.classList.toggle("active");
  document.querySelector(".landing").classList.toggle("active");
  document.querySelector("header").classList.toggle("active");
};





// -------------------------- dots

let dots = document.querySelectorAll(".pageAll_dots div");

dots.forEach((element) => {
  element.onclick = function () {
    dots.forEach(function (element) {
      element.classList.remove("active");
    });
    this.classList.add("active");
  };
});

let sections = document.querySelectorAll("section");
window.onscroll = function () {
  sections.forEach((element) => {
    if (element.offsetTop - 30 <= window.pageYOffset) {
      dots.forEach((element2) => {
        if (element2.getAttribute("data-bef") == element.getAttribute("id")) {
            dots.forEach(function (element3) {
            element3.classList.remove("active");
          });

          element2.classList.add("active");
        }
      });
    }
  });

  // this is defined bellow in stats counter section , dont worry

  stats_counter();
  ourSkils_counter();
};






//------------ video js  --------

let vid = document.querySelectorAll("#Preparation ul li");

for (let index = 0; index < vid.length; index++) {
  vid[index].onclick = function () {
    document.getElementById("info").innerHTML =vid[index].childNodes[1].firstChild.nodeValue;
    document.getElementById("info2").innerHTML =vid[index].childNodes[1].firstChild.nodeValue;
    changeSrc(vid[index]);
  };
}

document.getElementById("show-img").onclick = function () {
  document.querySelector(".Preparation_iframe").style.display = "block";
};

document.querySelector(".Preparation_iframe  .fa-times").onclick = function () {
  document.querySelector(".Preparation_iframe").style.display = "none";
  stopFrame();
};

function stopFrame() {
  var Frames = document.querySelectorAll("iframe");
  Array.prototype.forEach.call(Frames, function (frame) {
    var src = frame.src;

    frame.src = src;
  });
}

function changeSrc(target) {
  var Frames = document.querySelectorAll("iframe");
  Array.prototype.forEach.call(Frames, function (frame) {
    frame.src = target.getAttribute("data-src");
  });
}

// ------------------------------------ random play video

let random_btn = document.querySelector(".Preparation .fa-random");

random_btn.onclick = function () {
  let random_num = Math.floor(Math.random() * 6.99);
  document.getElementById("info").innerHTML =vid[random_num].childNodes[1].firstChild.nodeValue;
  document.getElementById("info2").innerHTML =vid[random_num].childNodes[1].firstChild.nodeValue;
  changeSrc(vid[random_num]);
  document.querySelector(".Preparation_iframe").style.display = "block";
};










// -----------------------------   cards

let cards = document.querySelector("#Drinks .cards");
let last_left = Number(cards.style.left);

window.onresize = function () {
  document.querySelector("#Drinks .cards").style.left = "0%";
  last_left = 0;
  document.querySelector("#Drinks i.back").classList.add("non-active");
  document.querySelector("#Drinks i.to").classList.remove("non-active");

  if (window.innerWidth < 800) {
    slider(false, 600);
  } else if (window.innerWidth < 1200) {
    slider(false, 200);
  } else {
    slider(true, 0);
  }
};

function slider(isNormal, limit) {
  document.querySelector("#Drinks i.back").onclick = function (event) {
    if (this.classList.contains("non-active")) {
      event.preventdefault;
    } else {
      if (isNormal) {
        document.querySelector("#Drinks i.back").classList.add("non-active");
        document.querySelector("#Drinks i.to").classList.remove("non-active");
      } else {
        if (last_left == -100) {
          document.querySelector("#Drinks i.back").classList.add("non-active");
        } else {
          document.querySelector("#Drinks i.back").classList.remove("non-active");
          document.querySelector("#Drinks i.to").classList.remove("non-active");
        }
      }

      cards.style.left = `${last_left + 100}%`;

      last_left = last_left + 100;
    }
  };

  document.querySelector("#Drinks i.to").onclick = function (event) {
    if (this.classList.contains("non-active")) {
      event.preventdefault;
    } else {
      if (isNormal) {
        document.querySelector("#Drinks i.back").classList.remove("non-active");
        document.querySelector("#Drinks i.to").classList.add("non-active");
      } else {
        if (last_left == -limit) {
          document.querySelector("#Drinks i.to").classList.add("non-active");
        } else {
          document.querySelector("#Drinks i.back").classList.remove("non-active");
          document.querySelector("#Drinks i.to").classList.remove("non-active");
        }
      }

      cards.style.left = `${last_left - 100}%`;
      last_left = last_left - 100;
    }
  };
}

if (window.innerWidth < 800) {
  slider(false, 600);
} else if (window.innerWidth < 1200) {
  slider(false, 200);
} else {
  slider(true, 0);
}







// -------------------- mode
const light = {
  "--weak-color": "#777",
  "--section-background": "rgb(255,237,219)",
  "--plan-page-bg-color": "white",
  "--text-color": "black",
  "--shadow": "#ddd",
  "--land-bgcolor": "transparent",
  "--card-bgcolor": "white",
  "--card-bgcolor2": "rgb(239, 239, 239)",
  "--dots-bgcolor": "white",
};

const dark = {
  "--weak-color": "rgb(135, 135, 135)",
  "--section-background": "#1B1717",
  "--plan-page-bg-color": "#1c2222",
  "--text-color": "white",
  "--shadow": "black",
  "--land-bgcolor": "#1B1717",
  "--card-bgcolor": "rgba(15, 15, 15, 0.892)",
  "--card-bgcolor2": "rgba(15, 15, 15, 0.892)",
  "--dots-bgcolor": "#1c2222",
};

document.querySelector(".mode").onclick = function () {
  if (this.classList.contains("fa-moon")) {
    for (const key in dark) {
      document.documentElement.style.setProperty(key, dark[key]);
    }

    this.classList.remove("fa-moon");
    this.classList.add("fa-sun");
  } else if (this.classList.contains("fa-sun")) {
    for (const key in light) {
      document.documentElement.style.setProperty(key, light[key]);
    }

    this.classList.add("fa-moon");
    this.classList.remove("fa-sun");
  }
};

// ---------------------------- event counter

let event_date = new Date(" july 08, 2023  12:30:00"),
  day = document.querySelector(".time .day h4"),
  hour = document.querySelector(".time .hour h4"),
  minute = document.querySelector(".time .minute h4"),
  second = document.querySelector(".time .second h4");

setInterval(function () {
  let sub =
      event_date.getTime() / (1000 * 60 * 60 * 24) -
      new Date().getTime() / (1000 * 60 * 60 * 24),
    days = parseInt(sub),
    sub2 = (sub - days) * 24,
    hours = parseInt(sub2),
    sub3 = (sub2 - hours) * 60,
    minutes = parseInt(sub3),
    sub4 = (sub3 - minutes) * 60,
    seconds = parseInt(sub4);

  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}, 1000);

// -------------------- stats counter

let stats_page = document.querySelector("#stats"),
  element_Clients = document.querySelector("#stats .Clients"),
  element_Projects = document.querySelector("#stats .Projects"),
  element_Countries = document.querySelector("#stats .Countries"),
  element_Money = document.querySelector("#stats .Money"),
  max_Clients = 450,
  max_Projects = 135,
  max_Countries = 12,
  max_Money = 500;

// i will call the in window.onscroll above in  dots  section

function stats_counter() {
  // this condition determine if the window in boundires of the stats section

  if (
    (window.pageYOffset >= stats_page.offsetTop - 200 &&
      window.pageYOffset <= stats_page.offsetTop) ||
    (window.pageYOffset <=
      stats_page.offsetTop + stats_page.offsetHeight + 100 &&
      window.pageYOffset >= stats_page.offsetTop + stats_page.offsetHeight)
  ) {
    increse_counter(element_Clients, max_Clients);
    increse_counter(element_Countries, max_Countries);
    increse_counter(element_Money, max_Money);
    increse_counter(element_Projects, max_Projects);
  }

  function increse_counter(element, max) {
    let counter = 0;
    let inter = setInterval(function () {
      element.innerHTML = counter++;
      if (counter == max + 1) {
        clearInterval(inter);
      }
    }, 2000 / max);

    // 2000/max to make all counter finish in 2 sec
  }
}

// if the page loaded in stats section without scrolling
 stats_counter();











// -------------------- Tendency count

let Tendency_page = document.querySelector("#Tendency");

function ourSkils_counter() {
  if (
    window.pageYOffset >= Tendency_page.offsetTop - 100 &&
    window.pageYOffset <=
      Tendency_page.offsetTop + Tendency_page.offsetHeight + 100
  ) {
    document.documentElement.style.setProperty("--ani-state", "running");
  }
}

ourSkils_counter();


// close form -----------------------------

let close_btns = document.querySelectorAll(".close-form");

close_btns.forEach((element) => {
  element.onclick = function () {
    element.parentElement.parentElement.style.opacity = "0";
  };
});


