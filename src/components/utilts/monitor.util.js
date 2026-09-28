export function getMonitorName(monitor, renames) {
    if (renames && monitor?.id && Object.keys(renames).indexOf(monitor.id) >= 0 && renames[monitor.id] != "") {
        return renames[monitor.id] + ` (${monitor.name})`
    } else {
        return monitor?.name
    }
}