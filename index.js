function getRandomDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        const dogImageUrl = data.message;
        const dogImageDiv = document.getElementById("dogimage");
        dogImageDiv.innerHTML = `<img src="${dogImageUrl}" alt="Random Dog Image">`;
      })
      .catch(error => {
        console.error("Error fetching dog image:", error);
      });
  }