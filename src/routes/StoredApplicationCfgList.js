import FrameLayout from '../components/FrameLayout'

import React  from 'react';
import { connect } from 'react-redux' 
import StoredApplicationCfgTable from '../components/StoredApplicationCfgTable'

// import cognitoUtils from '../lib/cognitoUtils'

import {withTranslation} from 'react-i18next'

const mapStateToProps = state => {
  return { session: state.session ,language: state.lang.language, languageList: state.lang.languageList}
}

const MapDispatchTpProps = (dispatch) => {
  return {
      changeLang: (key)=>dispatch({type: 'change_language',data: key})
  }
}


class StoredApplicationCfgList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // componentWillMount(){
  //   if (! this.props.session.isLoggedIn && (process.env.NODE_ENV !=='development') ) {
  //     window.location.href = cognitoUtils.getCognitoSignInUri()
  //   }
  // }

  componentDidMount(){
    
  }

  componentWillUnmount(){
  }

  render(){
    const c = (<StoredApplicationCfgTable history={this.props.history} />)
    return  <FrameLayout breadcrumb="StoredApplicationConfig" component={c} />
  }

}

export default connect(mapStateToProps,MapDispatchTpProps)(withTranslation()(StoredApplicationCfgList));


