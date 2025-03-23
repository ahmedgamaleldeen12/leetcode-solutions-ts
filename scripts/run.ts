import { exec } from "child_process";

const problem = process.argv[2];

if (!problem) {
  console.error("Usage: npm run solve <filename>");
  process.exit(1);
}

exec(`ts-node solutions/${problem}`, (error, stdout) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(stdout);
});
