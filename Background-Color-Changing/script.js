const buttons = document.querySelectorAll(".button");
    const body = document.querySelector("body");

    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const color = e.target.id;
        body.style.backgroundColor = color;

        // Adjust text color for readability
        if (color === 'black' || color === 'blue' || color === 'red') {
          body.style.color = 'white';
        } else {
          body.style.color = 'black';
        }
      });
    });