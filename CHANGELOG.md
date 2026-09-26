# Changelog

All notable changes to this project will be documented in this file.

## [1.18.0-beta3] - 2026-09-26

### Added
- **Topology-Aware Brightness Normalization**:
  - Automatically detects the current display configuration/topology based on the set of active monitors.
  - Normalization settings (min/max limits and calibration points) are now saved and applied per display setup (e.g. Laptop + Home Monitor vs. Laptop + Work Monitor).
  - Normalization settings automatically switch when docking, undocking, or connecting to different external monitors.
- **Standalone Laptop Full-Range Brightness Default**:
  - When no external monitors are connected (standalone laptop mode), the internal display defaults to the unconstrained 0%–100% native brightness range, preventing external monitor clamps from restricting standalone screen brightness.
- **Active Setup Indicator in Settings**:
  - Added an "Active Setup" badge to **Settings → Monitors → Normalize Brightness** showing the currently detected monitor topology (e.g. *Internal Display + External Monitor* or *Internal Display (Standalone)*) and contextual information.
- **Windows ARM64 Release Automation**:
  - Configured CI workflow ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)) to build and upload standalone Windows ARM64 NSIS installers (`Twinkle.Tray.v1.18.0-beta3-arm64.exe`).
  - Added automated GitHub Release publishing on version tags (`refs/tags/v*`) with both x64 and ARM64 `.exe` installers and AppX packages.
  - Added `workflow_dispatch` manual trigger for on-demand CI builds.

### Changed
- Preserved active topology min/max limits in the flyout brightness panel, preventing legacy static remap overrides from stomping on active topology values.
- Bumped project version to `1.18.0-beta3`.
