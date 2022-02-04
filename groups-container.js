/*
* Author Edward Seufert
*/
'use-strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import * as actions from './groups-actions';
import fuLogger from '../../core/common/fu-logger';
import GroupsView from '../../memberView/groups/groups-view';
import BaseContainer from '../../core/container/base-container';

function GroupsContainer() {
	const itemState = useSelector((state) => state.pmproject);
	const session = useSelector((state) => state.session);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(actions.init());
	}, []);

	fuLogger.log({level:'TRACE',loc:'GroupsContainer::render',msg:"Hi there"});
    return (
		<GroupsView/>
	);
}

export default GroupsContainer;
