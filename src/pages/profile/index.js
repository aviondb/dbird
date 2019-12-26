import React, { useEffect } from "react";
import Box from "3box";
import { connect } from "react-redux";

function Profile(props) {
  const { user } = props;

  useEffect(() => {
    initialize3Box(user);
  }, []);

  return <div>Profile Setup</div>;
}

const initialize3Box = async user => {
  //console.dir(web3);
  await window.ethereum.enable();
  const box = await Box.openBox(user.address, window.ethereum);
  await box.syncDone;
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, null)(Profile);
