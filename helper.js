export const detecType = (type) => {
switch (type) {
  case "park":
    return "Car Park";
  case "home":
    return "Home";
  case "job":
    return "Job";
  case "goto":
    return "Go To";
}

};
export const setStorage = (data) => {
  const strData = JSON.stringify(data);
  localStorage.setItem("notes", strData);
};

var carIcon = L.icon({
  iconUrl: "https://github.com/Udemig/9-hi-map-notes/blob/main/car.png?raw=true",
  iconSize: [50, 50],
});

var homeIcon = L.icon({
  iconUrl: "https://github.com/Udemig/9-hi-map-notes/blob/main/home-marker.png?raw=true",
  iconSize: [50, 50],
});

var jobIcon = L.icon({
  iconUrl: "https://github.com/Udemig/9-hi-map-notes/blob/main/job.png?raw=true",
  iconSize: [50, 50],
});

var visitIcon = L.icon({
  iconUrl: "https://github.com/Udemig/9-hi-map-notes/blob/main/visit.png?raw=true",
  iconSize: [50, 50],
});

export function detecIcon(type) {
  switch (type) {
    case "park":
      return carIcon;
    case "home":
      return homeIcon;
    case "job":
      return jobIcon;
    case "goto":
      return visitIcon;
  }
};