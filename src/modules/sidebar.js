// sidebar.js
import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { SessionManager } from './Helper/SessionsManager';
export default class SidebarMenu extends Component {
  constructor(props) {
    super(props);


  }
  render() {
    let data = [];
    data = SessionManager.Userdata

    let data2 = [];
    data2 = SessionManager.RoleAccess;
    let data3 = [];
    data3 = SessionManager.Menu;
 
   
    return (
      <Menu >
        <div className="sidebar-userpic">
          <img src={'assets/images/maaz.jpg'} className="rounded-circle imgg" alt="Alternate Text" />
          <p>{(data.length > 0) ? data[0].FullName : "Unknown Name"}</p>
        </div>
        <div className="sidebar">
          <ul className="mt-5">
           {data3.length > 0 &&
              <div>
                {(data3.map((val, ind) => {
                  return (
                    <div key={ind}>
                      {val.Parent_Id == 0 &&
                        <Link key={ind} className="menu-item" to={{ pathname: val.Menu_Url }}><li><span className="fa fa-home  pr-2"></span>  {val.Menu_Name}  </li></Link>
                      }
                    </div>

                  )
                }))}
              </div>
            }
          </ul>



          {data.length > 0 && data[0].RoleId == 1 &&
            <div className="dropdown">
              <a className="dropdown-toggle btn-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Setup Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <ul className="mt-5 ul-sub-menu-item">
                  {data3.length > 0 &&
                    <div>
                      {(data3.map((val, ind) => {
                        return (
                          <div key={ind}>
                            {val.Parent_Id != 0 &&
                              <Link key={ind} className="sub-menu-item" to={{ pathname: val.Menu_Url }}><li><span className="fa fa-home  pr-2"></span>  {val.Menu_Name}  </li></Link>
                            }
                          </div>
                        )
                      }))}
                    </div>
                  }

                </ul>
              </div>
            </div>
          }
        </div>
      </Menu>
    )
  }
}

// export default props => {
//   console.log("props",props)
//   return (
//     <Menu >
//       <div className="sidebar-userpic">
//         <img src={'assets/images/maaz.jpg'} className="rounded-circle imgg" alt="Alternate Text" />
//         <p>Maaz Mehtab</p>
//       </div>
//       <div className="sidebar">
//         <ul className="mt-5">
//           <a className="menu-item" href="/Home"> <li><span className="fa fa-home  pr-2"></span>  Home  </li></a>
//           <a className="menu-item" href="/laravel"> <li><span className="fa fa-home  pr-2"></span>  laravel  </li></a>
//           <a className="menu-item" href="/angular"><li><span className="fa fa-home  pr-2"></span>  Angular  </li></a>
//         </ul>
//         <div className="dropdown">
//           <a className="dropdown-toggle btn-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//             Setup Pages
//   </a>
//           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//             <ul className="mt-5 ul-sub-menu-item">
//               <a className="sub-menu-item" href="/Setup_User"> <li><span className="fa fa-home  pr-2"></span> Setup_User  </li></a>
//               <a className="sub-menu-item" href="/laravel"> <li><span className="fa fa-home  pr-2"></span>  laravel  </li></a>
//               <a className="sub-menu-item" href="/angular"><li><span className="fa fa-home  pr-2"></span>  Angular  </li></a>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </Menu>
//   );
// };