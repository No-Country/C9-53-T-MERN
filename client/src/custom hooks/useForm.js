import { useContext } from "react";
import { useNavigate } from 'react-router-dom'

const useForm = (context) => {
    const { userForm, setUserForm, login } = useContext(context);

    let navigate = useNavigate();
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserForm({ ...userForm, [name]: value });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = {
        email: userForm.email,
        token: Date.now(),
        isAuth: true,
        profileMoto: userForm.profileMoto,
        profilePhoto: userForm.profilePhoto,
        username: userForm.username
      }

      console.log(userForm.profilePhoto)

      login(userData)      
      navigate("/user", {replace: true}); 
    };

    return {userForm, handleChange, handleSubmit}
}

export default useForm
