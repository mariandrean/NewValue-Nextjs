const dateConverter = (date) => {
  date = date.split("-");

  switch (date[1]) {
    case "01":
      date[1] = "Enero";
      break;
    case "02":
      date[1] = "Febrero";
      break;
    case "03":
      date[1] = "Marzo";
      break;
    case "04":
      date[1] = "Abril";
      break;
    case "05":
      date[1] = "Mayo";
      break;
    case "06":
      date[1] = "Junio";
      break;
    case "07":
      date[1] = "Julio";
      break;
    case "08":
      date[1] = "Agosto";
      break;
    case "09":
      date[1] = "Septiembre";
      break;
    case "10":
      date[1] = "Octubre";
      break;
    case "11":
      date[1] = "Noviembre";
      break;
    case "12":
      date[1] = "Diciembre";
      break;
  }

  return `${date[2]} de ${date[1]} de ${date[0]}`;
}

export default dateConverter;
