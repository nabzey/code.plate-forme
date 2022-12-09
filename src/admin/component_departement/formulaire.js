import React from "react";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CallIcon from '@mui/icons-material/Call';
import CottageIcon from '@mui/icons-material/Cottage';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

const formulaire = () => {
  return <div className='top'>
     <div className="top">
        <h2>INSCRIPTION</h2>
       </div>
       <div className="bottom">
        <div className="left">
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label>Nom_Dep</label>
              <input type="text" placeholder='Pediatri'/>
            </div>
            <div className="formInput">
              <label>DESCRIPTION</label>
              <input type="email" placeholder='Maternite'/>
            </div>
            <button>Ajouter</button>
          </form>
          </div>
          </div>
  </div>;
};

export default formulaire;
