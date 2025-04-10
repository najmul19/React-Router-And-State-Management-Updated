const getStoredReadList = () => {
  // readlist
  const storedListString = localStorage.getItem("read-list");
  if (storedListString) {
    const storedList = JSON.parse(storedListString);
    return storedList;
  } else {
    return [];
  }
};

const getStoredWishList = () => {
  const storedListString = localStorage.getItem("wish-list");
  if (storedListString) {
    const storedList = JSON.parse(storedListString);
    return storedList;
  } else {
    return [];
  }
};
const addToStoredWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    // already exist
    console.log(id, "already exist in the read list");
  } else {
    storedList.push(id);
    const storedListString = JSON.stringify(storedList);
    localStorage.setItem('wish-list',storedListString);
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    // already exist
    console.log(id, "already exist in the read list");
  } else {
    storedList.push(id);
    const storedListString = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListString);
  }
};

export { addToStoredReadList ,addToStoredWishList, getStoredReadList,getStoredWishList};
