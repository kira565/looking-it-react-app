/**
 * Created by Kira on 30.05.2019.
 */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Dialogs from './Dialogs'
import {msgSendSuccessfulReset, sendMsg} from "../../redux/store/dialogs/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthHoc} from "../../hoc/withAuthHoc";
import {compose} from "redux";
import {getMessageData, getUserData} from "../../redux/store/dialogs/dialogs-selectors";



let mapStateToProps = (state) => {
    return {
        userData: getUserData(state),
        messageData: getMessageData(state)
    }
};


class DialogsContainer extends React.Component {
    handleOnSubmit(values){
        this.props.sendMsg(values.newMsgText)
    }

    render(){
        return <Dialogs msgSendSuccessfulReset={this.props.msgSendSuccessfulReset} onSubmit={this.handleOnSubmit} {...this.props}/>
    }
}


export default compose(
    connect(mapStateToProps, {sendMsg, msgSendSuccessfulReset}),
    withAuthHoc
)(DialogsContainer);