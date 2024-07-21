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
    if (exposed.platform === "darwin") {
      new Notification("Battery Status", {
        body: body,
        requireInteraction: true,
      });

      return;
    }

    new Notification("Battery Status", {
      body: body,
      icon: "images/icon.ico",
      requireInteraction: true,
    });
  }

  navigator.getBattery().then((batteryManager) => {
    batteryManager.addEventListener("levelchange", (_event) => {
      const level = Math.round(batteryManager.level * 100);

      if (batteryManager.charging) {
        if (level >= 80) {
          sendNotification(`You might want to unplug your PC (${level}%)`);
        }

        return;
      }

      if (level <= 20) {
        sendNotification(`You might want to plug in your PC (${level}%)`);
      }
    });
  });
}

main();
