// On Form submission prevent the default action and call the function to update the result

$("convert").submit(function (event) {
  event.preventDefault();
  covertCurrency();
});

// Realtime Update
$("#input").on("input", () => covertCurrency());
$("#Fcurrency").change(() => covertCurrency());
$("#Tcurrency").change(() => covertCurrency());

// Main function which chechks the input and output degree type and then launch the function
function covertCurrency() {
  let input = parseInt($("#input").val());
  let selectInput = $("#Fcurrency").val();
  let conversionType = $("#Tcurrency").val();

  let resultValue = "";

  switch (selectInput) {
    case "C":
      resultValue = cTo(input, conversionType);
      break;

    case "F":
      resultValue = fTo(input, conversionType);
      break;

    case "K":
      resultValue = kTo(input, conversionType);
      break;
    case "C":
      resultValue = cTo(input, conversionType);
      break;

    case "F":
      resultValue = fTo(input, conversionType);
      break;

    case "K":
      resultValue = kTo(input, conversionType);
      break;
    case "C":
      resultValue = cTo(input, conversionType);
      break;

    case "F":
      resultValue = fTo(inputDegree, conversionType);
      break;

    case "K":
      resultValue = kTo(inputDegree, conversionType);
      break;
  }

  // To prevent NaN
  if (isNaN(input)) {
    $("#convertedDegree").text("");
    return;
  }

  // To update the Degree Unit
  $("#convertedUnit").text(conversionType);

  // To update the Degree Value
  $("#convertedDegree").text(resultValue.toFixed(2));
}

// Fahrenheit Converter
function fTo(inputDegreeValue, conversionDegreeType) {
  let temperature = "";

  switch (conversionDegreeType) {
    case "F":
      temperature = inputDegreeValue;
      break;
    case "C":
      temperature = eval((inputDegreeValue - 32) * (5 / 9));
      break;
    case "K":
      temperature = eval((inputDegreeValue + 459.67) * (5 / 9));
      break;
  }
  return temperature;
}

// Celcius Converter

function cTo(inputDegreeValue, conversionDegreeType) {
  let temperature = "";

  switch (conversionDegreeType) {
    case "C":
      temperature = inputDegreeValue;
      break;
    case "F":
      temperature = eval(inputDegreeValue * (9 / 5) + 32);
      break;
    case "K":
      temperature = eval(inputDegreeValue + 273.15);
      break;
  }

  return temperature;
}

// Kelvin Converter

function kTo(inputDegreeValue, conversionDegreeType) {
  let temperature = "";

  switch (conversionDegreeType) {
    case "K":
      temperature = inputDegreeValue;
      break;
    case "F":
      temperature = eval((inputDegreeValue - 273.15) * (9 / 5) + 32);
      break;
    case "C":
      temperature = eval(inputDegreeValue - 273.15);
      break;
  }
  return temperature;
}
