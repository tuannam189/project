import Images from 'Constants/image';
import React from 'react';
import PhotoForm from '../../../Features/Photo/Components/PhotoForm';
import Banner from '../../Banner';
import './styles.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {

  return (
    <div className="photo-edit">
      <Banner title="Get your amazing photo" backgroundUrl={Images.ORANGE_BG}/>

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={values => console.log('form submit: ', values)}
        />
      </div>
    </div>
  );
}

export default AddEditPage;