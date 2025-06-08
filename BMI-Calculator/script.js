 const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const height = parseFloat(document.querySelector('#height').value);
      const weight = parseFloat(document.querySelector('#weight').value);
      const result = document.querySelector('.result');

      if (!height || height <= 0 || isNaN(height)) {
        result.innerHTML = "⚠️ Please enter a valid height.";
        return;
      }

      if (!weight || weight <= 0 || isNaN(weight)) {
        result.innerHTML = "⚠️ Please enter a valid weight.";
        return;
      }

      const bmi = (weight / ((height * height) / 10000)).toFixed(2);

      let message = `Your BMI is <strong>${bmi}</strong><br>`;
      if (bmi < 18.5) {
        message += "🔵 Underweight";
      } else if (bmi < 25) {
        message += "🟢 Normal weight";
      } else if (bmi < 30) {
        message += "🟠 Overweight";
      } else {
        message += "🔴 Obese";
      }

      result.innerHTML = message;
    });