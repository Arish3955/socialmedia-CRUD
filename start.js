const { spawn } = require("child_process");

const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const processes = [
  spawn(npm, ["run", "server"], { stdio: "inherit", shell: true }),
  spawn(npm, ["run", "client"], { stdio: "inherit", shell: true }),
];

function stopAll() {
  for (const child of processes) {
    if (!child.killed) child.kill();
  }
}

for (const child of processes) {
  child.on("exit", (code) => {
    if (code && code !== 0) process.exitCode = code;
  });
}

process.on("SIGINT", () => {
  stopAll();
  process.exit();
});
process.on("SIGTERM", stopAll);
