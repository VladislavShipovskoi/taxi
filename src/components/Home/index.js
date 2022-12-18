import React, {useEffect} from "react";
import {connect} from "react-redux";
import Map from "../Map";
import {getAddressListRequest} from "../../features/Address/actions";
import Order from "../Order";
import {getCardInfoRequest} from "../../features/Profile/actions";


const Home = (props) => {
    const { getAddresses, getCardInfo, getCardInfoIsRequested, addressList, getAddressesListIsRequested, cardInfo } = props;

    useEffect(() => {
        if (!getAddressesListIsRequested) {
            getAddresses()
        }
    }, [getAddressesListIsRequested, getAddresses])

    useEffect(() => {
        if (!getCardInfoIsRequested) {
            getCardInfo()
        }
    }, [getCardInfoIsRequested, getCardInfo])

    return (
        <div>
            {addressList.length && getCardInfoIsRequested && <Order addressList={addressList} cardInfo={cardInfo} />}
            <Map />
        </div>
    )
}

const mapStateToProps = (state) => ({
    addressList: state.address.addressList,
    cardInfo: state.card.cardInfo,
    getCardInfoIsRequested: state.card.isRequested,
    getAddressesListIsRequested: state.address.isRequested
})

const mapDispatchToProps = (dispatch) => {
    return {
        getAddresses: () => dispatch(getAddressListRequest()),
        getCardInfo: () => dispatch(getCardInfoRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)