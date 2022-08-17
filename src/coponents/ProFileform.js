import React, { useState } from 'react'

function ProFileform() {
    const{profile, setprofiles} = useState({
        fistname:"",
        lastname:"",
        email:"",
        phone:"",
    });
    const handler = (event) => {
        setprofiles((prev) =>({
        ...prev,
           [event.target.name]: event.target.value
        }));
    }
    const handlerform = (e) => {
        e.preventDefault();
        SubmitEvent(profile)
    }
            


        
    
  return (
    <div classname="formcontainer">
        <h3> profile form</h3>
        <form>
           <fieldset>
                 <legend>bio data</legend>
                    <div classname="name">
                         <lable>last name" valve=
                            <input name="firstname" value=
                               {profile.lastname} type="text"onchange={handler}/>
                         </lable>
                         <lable>first name" valve=
                            <input name="firstname" value=
                               {profile.lastname} type="text"onchange={handler}/>
                         </lable>
              </div>
                    <div classname="name">
                         <lable>email" valve=
                            <input name="firstname" value=
                               {profile.email} type="text"onchange={handler}/>
                         </lable>
                         <lable>phone" valve=
                            <input name="email" value=
                               {profile.email} type="text"onchange={handler}/>
                         </lable>
              </div>
           </fieldset>
        </form>

      
    </div>
  )
}

export default ProFileform
