import React from 'react';
import {Modal} from './../Modal/Modal.js'
import './App.css';
import { Twhat } from '../Twaht.js';


const App = () => {

  const modalContent = (
    <div>big ooof</div>
  );

  const modalProps = {
    arialLabel: " This is a model content",
    triggerText: "?"
  };
  return (
    <main className="content">
        <Twhat method="PUT" id="1337" language="en" />
        <Modal {...modalProps}>{modalContent}</Modal>
    </main>

  );
}

// ------WebKitFormBoundaryz001dTvF7UMI8uZx
// Content-Disposition: form-data; name="content"

// !!
// ------WebKitFormBoundaryz001dTvF7UMI8uZx--

// ------WebKitFormBoundarymPMPOv1KZEh3aJuW
// Content-Disposition: form-data; name="content"

// !!
// ------WebKitFormBoundarymPMPOv1KZEh3aJuW--

export default App;