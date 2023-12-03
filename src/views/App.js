import '../App.css';
// import { useEffect } from 'react';
import { useState, useEffect } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import { getWaybill } from '../actions';
import CoverInvitation from './Template/Template-1';
import Template2 from './Template/Template2';
const Template1 = () => {
  return <>Ini Template 1</>;
};
// const Template2 = () => {
//   return <>Ini Template 2</>;
// };
const App = (props) => {
  const { state, getWaybill } = props;
  const getDataWaybill = async () => {
    await getWaybill();
  };
  useEffect(() => {
    getDataWaybill();
  }, []);
  const templates = [
    {
      id: 1,
      name: 'Template 1',
      category: 'islam',
      component: <Template1 />,
    },
    {
      id: 2,
      name: 'Template 2',
      category: 'islam',
      component: <Template2 />,
    },
  ];
  console.log(state, 'state');
  return (
    // <div className='w-screen h-screen flex'>
    //   <div className='m-auto'>
    //     <h1>hello world</h1>
    //   </div>
    // </div>
    <>
      {/* <CoverInvitation /> */}
      {templates.map((item) => (
        <React.Fragment key={item.id}>
          {item.id === 2
            ? React.cloneElement(item.component, { id: item.id })
            : null}
        </React.Fragment>
      ))}
    </>
  );
};
const mapStateToProps = (state) => ({
  state: state.waybill.data,
});

export default connect(mapStateToProps, {
  getWaybill,
})(App);
