import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const folderPath = path.resolve(__dirname, "./src/components");

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  const imports = files
    .filter((file) => file.endsWith(".astro")) // Filter out non-.astro files
    .map((file) => {
      const componentName = path.parse(file).name;
      return `import ${componentName} from "./src/components/${file}";`;
    })
    .join("\n");

  const exportStatement = `export { ${files.map((file) => path.parse(file).name).join(", ")} };`;

  const content = `${imports}\n\n${exportStatement}\n`;

  fs.writeFile("./imports.d.ts", content, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("Imports generated successfully.");
  });
});
