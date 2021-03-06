const { contextBridge, ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
  //
  // ここに、レンダラープロセスに渡したい機能を記載していく
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

const sendIpc = async (listenerName, eventName, ...args) => {
  return JSON.parse(
    (await ipcRenderer.invoke(
      'sendIpc',
      JSON.stringify([`${listenerName}-${eventName}`, args])
    )) ?? null
  )
}
const listenIpc = async (listenerName, eventName, handler) => {
  ipcRenderer.on(`${listenerName}-${eventName}`, async (_, args) => {
    // TODO: 新しい項目を追加時に一度だけ下記のエラーが出るが、原因が分からないので握りつぶすように
    try {
      await handler(...JSON.parse(args))
    } catch (e) {
      if (e.message !== 'Cannot convert undefined or null to object') {
        throw e
      } else {
        // 握りつぶす
      }
    }
  })
  await sendIpc('background', 'listen', listenerName, eventName)
}

contextBridge.exposeInMainWorld('requires', {
  listenIpc,
  sendIpc,
})
