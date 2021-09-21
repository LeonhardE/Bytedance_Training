import ejs from "ejs";
import fs from "fs";

export function createPackageTemplate(config) {
    const template = fs.readFileSync("./template/package.ejs", "utf-8");
  
    const code = ejs.render(template, {
        info: config.info.info,
        name: config.info.name,
        version: config.info.version,
        type: config.info.type,
        dependencies: config.dependencies.dependencies,
        ejs: config.dependencies.ejs,
        koa: config.dependencies.koa,
        router: config.dependencies.koarouter
    });
    console.log(code);
  
    return code;
  }
  