const initDB = async () => {
  const ipfs = await window.Ipfs.create();
  window.ipfs = ipfs;
  //let aviondb = await window.AvionDB.init("dbird-dev", ipfs);
  let aviondb = await window.AvionDB.init("chat-dev-4", ipfs);
  window.aviondb = aviondb;
  return aviondb;
};

export default initDB();
