const iframe = document.querySelector(".iframe");
const lStorageInpText = document.querySelector(".lStorageInpText");
const lStorageRead = document.querySelector(".lStorageRead");
const lSTorageUpdate = document.querySelector(".lSTorageUpdate");
const lStorageRemove = document.querySelector(".lStorageRemove");

window.onmessage = (event) => {
  switch (event.data.status) {
    case "readSuccess":
      console.log(event.data.message);
      console.log("event.data", event.data);
      return;
    case "updatedSuccess":
      console.log(event.data.message);
      return;
    case "deletedSuccess":
      console.log(event.data.message);
      return;
    default:
      return;
  }
};

const foo = () => {
  console.warn("status : action completed");
};

const sendRequest = (action, payload) => {
  const messageToIframe = { action, payload };
  iframe.contentWindow.postMessage(messageToIframe, "*");
  iframe.contentWindow.callBackParent = foo;
};

lStorageRead.addEventListener("click", () =>
  sendRequest("readIframeLS", "")
);
lSTorageUpdate.addEventListener("click", () =>
  sendRequest("updateIframeLS", lStorageInpText.value)
);
lStorageRemove.addEventListener("click", () =>
  sendRequest("removeIframeLS", "")
);
