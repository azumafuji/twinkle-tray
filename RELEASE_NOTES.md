## What's Changed in v1.18.0-beta4

### ⏱️ Time Adjustments & Context Menu Feedback
- **Pause Time Adjustments Toggle**: "Pause Time Adjustments" (and "Pause Idle Detection") in the taskbar context menu now operate as clear toggles featuring both native checkmarks (`✓`) and a `(Paused)` label suffix when active.
- **Taskbar Hover Status**: Hovering over the Twinkle Tray notification icon in the taskbar now displays tooltip feedback indicating whether time adjustments or idle detection are paused (e.g. `Twinkle Tray (75%) - Time adjustments paused`).
- **Instant Unpause Re-application**: Resuming time adjustments immediately forces re-application of the scheduled brightness event without delay.
- **State Synchronization**: Pause states and tray menu entries now automatically synchronize when adjustment times or idle detection settings are altered.

### 🛠️ Additional Fixes & Improvements
- **Monitor Renaming & WMI**: Fixed monitor rename input handling and key mappings for WMI displays.
- **Update Checks**: Resolved pre-release semver comparison and update repository targeting.
- **Schedule Interpolation**: Improved Time of Day LERP transitions across midnight boundaries and multi-display configurations.

### 📦 Artifacts Included
- `Twinkle.Tray.v1.18.0-beta4.exe` (Windows x64 installer)
- `Twinkle.Tray.v1.18.0-beta4-arm64.exe` (Windows ARM64 installer)
- `Twinkle.Tray.v1.18.0-beta4-store.appx` (Windows x64 Store AppX)
- `Twinkle.Tray.v1.18.0-beta4-store-arm64.appx` (Windows ARM64 Store AppX)
