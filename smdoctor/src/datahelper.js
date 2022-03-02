import React from 'react';
import Menu_logo from './components/menu';
import GoogleMaps from './components/location'
import ImageAvatars from './components/avatar';
import Patientuser from './components/patientuser';
import Form from './components/form';


function Web_items() {
  return (
       <><Menu_logo /><GoogleMaps /><ImageAvatars/><Patientuser/><Form/></>
  )
}

export default Web_items;