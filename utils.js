function downloadFile(url, fileName) {
  // 创建XMLHttpRequest对象
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";

  // 注册事件监听函数
  xhr.onload = function () {
    if (xhr.status === 200) {
      // 成功获取文件
      var blob = xhr.response;

      // 使用FileSaver.js库实现文件下载
      window.saveAs(blob, fileName);
    } else {
      // 获取文件失败
      console.log("Failed to download file");
    }
  };
  // 发送请求
  xhr.send();
}

function downloadVenvFile(vFileName, fileName) {
  let f = new Blob([pyscript.interpreter.FS.readFile(vFileName)]);
  window.saveAs(f, fileName);
}

async function mountNativeFileSystem() {
  const dirHandle = await showDirectoryPicker();

  if ((await dirHandle.queryPermission({ mode: "readwrite" })) !== "granted") {
    if (
      (await dirHandle.requestPermission({ mode: "readwrite" })) !== "granted"
    ) {
      throw Error("unable to read and write directory");
    }
  }

  const nativefs = await pyscript
    .interpreter
    .interpreter
    .mountNativeFS("/mnt", dirHandle);
}
