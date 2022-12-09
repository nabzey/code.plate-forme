

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CallIcon from '@mui/icons-material/Call';
import CottageIcon from '@mui/icons-material/Cottage';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
const formulaire_patient = () => {
  return (
    <div>
       <div className="top">
        <h2>INSCRIPTION</h2>
       </div>
       <div className="bottom">
        <div className="left">
          <img src='https://hope.be/wp-content/uploads/2015/05/no-user-image.gif' alt=''/>
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label>Nom</label>
              <input type="text" placeholder='Dr Ba'/>
            </div>
            <div className="formInput">
              <label>Email<MarkEmailUnreadIcon classNname='icon'/></label>
              <input type="email" placeholder='Dr_Ba@gmail.com'/>
            </div>
            <div className="formInput">
              <label>Tel<CallIcon className='icon'/></label>
              <input type="num" placeholder='+221 ***'/>
            </div>
            <div className="formInput">
              <label>Adresse<CottageIcon className='icon'/></label>
              <input type="text" placeholder='dakar'/>
            </div>
            <div className="formInput">
              <label>Mot de passe</label>
              <input type="password"/>
            </div>
            <button>Ajouter Patient</button>
          </form>
        </div>
       </div>
      </div>
     
  )
}

export default formulaire_patient