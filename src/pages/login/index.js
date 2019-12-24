import React, { Fragment } from "react";
import Onboard from "bnc-onboard";
import { login } from "../../redux/user/actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const startLogin = props => {
  const { login } = props;

  const onboard = Onboard({
    dappId: "32dedbdd-255e-4e93-a66f-7e558c24893a", // [String] The API key created by step one above
    networkId: 4, // [Integer] The Ethereum network ID your Dapp uses.
    subscriptions: {
      address: address => {
        console.log("user address has changed:", address);
        login({ address: address });
      },
      network: networkId => {
        console.log("user network has changed:", networkId);
        login({ networkId: networkId });
      },
      balance: balance => {
        console.log("user balance has changed:", balance);
        login({ balance: balance });
      },
      wallet: wallet => {
        console.log(
          "a new wallet has been selected by user",
          wallet.provider,
          wallet.name
        );
        login({ loginMethod: wallet.name });
      }
    }
  });

  return onboard;
};

function Login(props) {
  const history = useHistory();
  const onboard = startLogin(props);

  onboard.walletSelect().then(_res => {
    onboard.walletCheck().then(res => {
      console.log(res);
      history.push("/profile/setup");
    });
  });

  return (
    <Fragment>
      <center>
        <font size="7">DBird</font>
      </center>
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(login(payload))
});

export default connect(null, mapDispatchToProps)(Login);
