// esm
import fs from "fs";
import { createIndexTemplate} from "./indexTemplate.js";
import { createPackageTemplate } from "./packageTemplate.js"

// input

// process
// output

// 程序的input
// input
// cli  -> gui
const inputConfig = {
  middleware: {
    router: true,
  },
};

const packageConfig = {
  dependencies: {
    dependencies: true,
    ejs: "^3.1.6",
    koa: "^2.13.1",
    koarouter: "^10.1.1"
  },
  info: {
    info: true,
    name: "hehehaha",
    version: "1.1.1",
    type: "module"
  }
};

// 核心：自动化思维
// happy path
// 1. 创建了文件夹 （项目名）
fs.mkdirSync(getRootPath());

// 2. 创建了 index.js
fs.writeFileSync(getRootPath() + "/index.js", createIndexTemplate(inputConfig));

// 3. 创建了 Package.json
// 练习点： 基于数据生成 package.json
fs.writeFileSync(getRootPath() + "/package.json", createPackageTemplate(packageConfig));

// 4. 安装依赖
// TODO package  -> yarn

function getRootPath() {
  return "./haha";
}
