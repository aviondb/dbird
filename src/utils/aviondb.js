import IPFS from "ipfs";
const ipfs = new IPFS();

const initDB = async () => {
  await ipfs.ready;
  window.ipfs = ipfs;
  //let aviondb = await window.AvionDB.init("dbird-dev", ipfs);
  let aviondb = await window.AvionDB.init("chat-dev-2", ipfs);
  window.aviondb = aviondb;
  return aviondb;
};

export default initDB();
