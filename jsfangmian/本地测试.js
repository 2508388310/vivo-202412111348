
//先创建xlsx
const XLSX = require("xlsx");
const fs = require('fs');
function createExcelFile(data) {
    // 创建一个新的工作簿
    const workbook = XLSX.utils.book_new();

    // 创建数据


    // 将数据转换为工作表
    const worksheet = XLSX.utils.aoa_to_sheet(data);

    // 将工作表添加到工作簿中
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // 生成 Excel 文件的二进制数据
    const excelData = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    // 保存文件到本地
    fs.writeFileSync("example.xlsx", excelData);

    console.log("Excel 文件已成功创建！");
}




// 核心源代码位置





const readline = require('readline');
// 创建读取流
const fileStream = fs.createReadStream('mima.txt');/*你要加密密码*/

// 使用 readline 模块逐行读取文件
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity // 识别不同操作系统的换行符
});
let data = [
    ["原数据", "aes加密后", "登录情况"]
];
let cishu=0
rl.on('line', (line) => {
    cishu +=1;
    if (!data[cishu]) {
        data[cishu] = [];
    }
    data[cishu][0]=line;
    data[cishu][1]=js_encrypt(line);
    console.log(js_encrypt(line)); // 打印每一行的内容
});


rl.on('close', () => {

    createExcelFile(data)
    console.log('文件读取完毕');
});
