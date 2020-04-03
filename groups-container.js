/*
* Author Edward Seufert
*/
'use-strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as groupActions from './groups-actions';
import fuLogger from '../../core/common/fu-logger';
import GroupsView from '../../memberView/groups/groups-view';

class GroupsContainer extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.actions.initGroup();
	}

  render() {
			fuLogger.log({level:'TRACE',loc:'GroupsContainer::render',msg:"Hi there"});
      return (
				<GroupsView/>
			);
  }
}

GroupsContainer.propTypes = {
	appPrefs: PropTypes.object,
	lang: PropTypes.string,
	actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {lang:state.lang, appPrefs:state.appPrefs};
}

function mapDispatchToProps(dispatch) {
  return { actions:bindActionCreators(groupActions,dispatch) };
}

export default connect(mapStateToProps,mapDispatchToProps)(GroupsContainer);
