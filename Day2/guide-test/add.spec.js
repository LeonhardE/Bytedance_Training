// const add = require("./add.js");
function add(a, b) {
    return a + b
}

test("should 1 + 1 = 2", () => {
    // 准备测试数据
    const a = 1;
    const b = 1;
    // 触发测试动作
    const r = add(a, b);
    // 验证
    expect(r).toBe(2);
    // jest 匹配器概念
});