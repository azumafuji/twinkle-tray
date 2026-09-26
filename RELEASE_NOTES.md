## What's Changed in v1.18.0-beta3

### 🖥️ Topology-Aware Brightness Normalization
- **Automatic Setup Detection**: Twinkle Tray now automatically detects your active multi-monitor setup (e.g. *Laptop + Home Monitor* vs. *Laptop + Work Monitor*).
- **Per-Setup Normalization Settings**: Brightness normalization limits (`min`/`max` limits and custom calibration curves) are now saved and restored per display setup. Switching docks or moving between home and work automatically switches to the correct calibration.
- **Full Range for Standalone Laptops**: When unplugged and running on the laptop panel alone, brightness normalization defaults to the full, unconstrained 0%–100% native brightness range. Clamps set to match dimmer external monitors no longer restrict your laptop screen when undocked.
- **Active Setup Indicator**: **Settings → Monitors → Normalize Brightness** now displays a badge indicating the active display setup being configured.

### 🚀 Windows ARM64 & Release Automation
- **Windows on ARM (ARM64) Installer**: Standalone `.exe` installers are now built for ARM64 devices (Snapdragon X Elite/Plus, Surface Pro, etc.).
- **Automated GitHub Releases**: Builds now publish release binaries (`.exe` and `.appx` for both x64 and ARM64) when tags are pushed.
- Added manual `workflow_dispatch` trigger in GitHub Actions.

### 📦 Artifacts Included
- `Twinkle.Tray.v1.18.0-beta3.exe` (Windows x64 installer)
- `Twinkle.Tray.v1.18.0-beta3-arm64.exe` (Windows ARM64 installer)
- `Twinkle.Tray.v1.18.0-beta3-store.appx` (Windows x64 Store AppX)
- `Twinkle.Tray.v1.18.0-beta3-store-arm64.appx` (Windows ARM64 Store AppX)
