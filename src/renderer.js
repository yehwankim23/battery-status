function main() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then((permission) => {
      if (permission !== "granted") {
        alert("Notification permission denied");
        return;
      }
    });
  }

  function sendNotification(body) {
    new Notification("Battery Status", {
      body: body,
      icon: "images/icon.ico",
      requireInteraction: true,
    });
  }

  navigator.getBattery().then((batteryManager) => {
    batteryManager.addEventListener("levelchange", (_event) => {
      const level = batteryManager.level * 100;
      const isCharging = batteryManager.charging;

      if (level <= 20 && !isCharging) {
        sendNotification(`Low Battery: ${level}% battery remaining`);
        return;
      }

      if (level >= 80 && isCharging) {
        sendNotification("Battery sufficiently charged");
      }
    });
  });
}

main();
