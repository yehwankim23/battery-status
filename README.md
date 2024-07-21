# Battery Status

Program that notifies the user when it's time to plug in or unplug the laptop to maximize the battery life

## Installation

### Windows

1. Download and unzip [Battery Status](https://github.com/yehwankim23/battery-status/releases/latest/download/battery-status-windows.zip)
2. Run `Battery Status Installer.exe`
3. (Optional) Move the `Battery Status` shortcut on the desktop to the `Startup Folder` folder to run `Battery Status` on computer startup

### macOS

1. Build `Battery Status`

```sh
git clone https://github.com/yehwankim23/battery-status
```

```sh
cd battery-status
```

```sh
npm i
```

```sh
npm run make
```

2. Unzip `out/make/zip/darwin/arm64/Battery Status-darwin-arm64-#.#.#.zip`
3. Move `Battery Status.app` to the `Applications` folder
4. (Optional) Add `Battery Status.app` in `System Settings` > `General` > `Login Items` > `+` to run `Battery Status` on computer startup
5. Run `Battery Status.app`
6. Allow notifications when the battery level reaches 20% or 80% (or later in `System Settings` > `Notifications`)
