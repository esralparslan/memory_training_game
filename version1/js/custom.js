$(document).ready(function () {
  $("#test").attr("src", `http://127.0.0.1:5500/images/armut.png`);
  $("#divi").append("<p>Hello World</p>");

  $("img").parent().css("visibility", "hidden");
  $(".col-lg-3").css({
    "border-color": "#C1E0FF",
    "border-width": "1px",
    "border-style": "solid",
  });

  let cardArray = []; // kartları tutacak array
  let imageName = [
    "elma",
    "armut",
    "visne",
    "erik",
    "karpuz",
    "domates",
    "elma",
    "armut",
    "visne",
    "erik",
    "karpuz",
    "domates",
  ]; // kart resimlerini tutacak array

  shuffle(imageName); //geçerli arrayi kartları karıştıralım
  initilizeCardArrays(); // kartların modelini oluşturuyoruz
  initalizeCardValues(); // kartların değerlerini oluşturuyoruz

  function initilizeCardArrays() {
    for (let i = 1; i <= 12; i++) {
      cardArray.push({
        name: "",
        number: i,
        imagePath: "",
      });
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  $("button").click(function (e) {
    e.preventDefault(); //form nesnesi için kullanılıyor

    var icerik = $(this).parent().parent().find(".adi").text();
    mesajGonder(icerik);

    $("button")
      .not(".ekleBtn")
      .click(function (e) {
        e.preventDefault(); //form nesnesi için kullanılıyor
      });

    $("table").on("click", "button:not(#ekleBtn)", function (e) {
      var icerik = $(this).parent().parent().find(".adi").text();
      mesajGonder(icerik);
    });

    $(".ekleBtn").click(function (e) {
      $("table").append(
        '<tr><td class="adi">Engin</td><td>Karataş</td><td>055113003300</td><td>Koca🖖i</td><td><button>Aksiyon</button></td></tr>'
      );
    });
  });

  function initalizeCardValues() {
    for (let i = 0; i < cardArray.length; i++) {
      let tableMatrixNumber = cardArray[i].number; // 1 2 3 4 5 6 7 8 9 10 11 12
      let tableMatrixNumberDivImage = $(
        "#tableMatrixNumber" + tableMatrixNumber
      ).find("img");

      tableMatrixNumberDivImage.attr(
        "src",
        `http://127.0.0.1:5500/images/${imageName[i]}.png`
      );
      tableMatrixNumberDivImage.attr("alt", imageName[i]);
      tableMatrixNumberDivImage.attr("id", imageName[i]);
      tableMatrixNumberDivImage.attr("class", imageName[i]);
      tableMatrixNumberDivImage.attr("data", imageName[i]);

      let tableMatrixNumberDiv = $(
        "#tableMatrixNumber" + tableMatrixNumber
      ).find("h1");
      tableMatrixNumberDiv.append(tableMatrixNumber);
    }
  }

  let prevImageObject = "";
  let doubleClick = false;
  let prev = "";
  $(this).click(function (e) {
    let thisImage = $("#" + e.target.id).find("img");
    let thisImageClass = thisImage.attr("class");
    let images = document.getElementsByClassName(thisImageClass);
    // images[0].style.visibility = 'visible';
    console.log(images[0]); //ilk
    console.log(images[1]); //2.

    if (doubleClick == false) {
      prevImageObject = images[0];
      thisImage.css("visibility", "visible");
      prev = thisImage;
      doubleClick = true;
    } else {
      doubleClick = false;
      if (prevImageObject == images[0]) {
        images[0].style.visibility = "visible";
        images[1].style.visibility = "visible";
      } else {
        thisImage.css("visibility", "visible");
        setTimeout(() => {
          thisImage.css("visibility", "hidden");
          prev.css("visibility", "hidden");
        }, 1000);
      }
    }
  });
});

function mesajGonder(deger) {
  console.log(deger);
}
