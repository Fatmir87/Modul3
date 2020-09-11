(function () {
  // Checks the browser name
  document.getElementById("browser_btn").addEventListener("click", () => {
    const browserName = "Browser Name: " + navigator.appName;
    document.getElementById("myLocation2").innerHTML = browserName;
  });

  // Get your browser location
  const geoLocation = document.getElementById("myLocation");

  document.getElementById("coor_btn").addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      geoLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
  });

  // Copys any text and shows in the website
  document.getElementById("copy_btn").addEventListener("click", () => {
    let paste_promise = navigator.clipboard.readText();
    paste_promise
      .then((text) => {
        document.getElementById("copy_txt").innerHTML = text;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function showPosition(position) {
    geoLocation.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
  }
  function failOrSuccess(number) {
    return new Promise((resolve, reject) => {
      let a = 20;
      if (20 == number) {
        resolve("Success!");
      } else {
        reject("Failed!");
      }
    });
  }

  document.getElementById("sub_btn").addEventListener("click", () => {
    let number = document.getElementById("numInput").value;
    getResult(number);
  });

  //
  async function getResult(number) {
    try {
      let result = await failOrSuccess(number);
      document.getElementById("result").innerHTML = result;
    } catch (err) {
      document.getElementById("result").innerHTML = err;
    }
  }
  document.getElementById("sub_then_btn").addEventListener("click", () => {
    let number = document.getElementById("numInput").value;
    failOrSuccess(number)
      .then((message) => {
        document.getElementById("result").innerHTML =
          "Then function " + message;
      })
      .catch((message) => {
        document.getElementById("result").innerHTML =
          "Then. catch function " + message;
      });
  });
})();
