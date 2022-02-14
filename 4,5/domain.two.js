const returnRes = (status, message) => {
  let messageParent = {
    status,
    message,
  };
  window.top.postMessage(JSON.parse(JSON.stringify(messageParent)), "*");
};

window.onmessage = async (event) => {
  switch (event.data.action) {
    case "readIframeLS":
      let localStorageData = await localStorage.getItem("from domain.one");
      if (!localStorageData) {
        localStorageData = "Empty";
      }
      returnRes("readSuccess", localStorageData);
      window.callBackParent();
      return;

    case "updateIframeLS":
      await localStorage.setItem("from domain.one", event.data.payload);
      returnRes("updatedSuccess", "written");
      return;

    case "removeIframeLS":
      await localStorage.removeItem("from domain.one");
      returnRes("deletedSuccess", "removed");
      return;
    default:
      return;
  }
};
