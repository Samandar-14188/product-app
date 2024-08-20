import { Link } from "react-router-dom";
import Button from '../../components/Button/Button';
import { GoArrowRight } from "react-icons/go";
export default function Home() {
  return (
    <div className="container">
    <div className="Info-container">
       <h1>
        Xush Kelibsiz 
       </h1>
       <div className="text">
       
     
       <h3>
       Ro'yxatdan o'tish uchun bosing        <span><GoArrowRight /></span>
       </h3>


      
       </div>
       
    </div>
    <div className="Link-container" >
    <div className="btn-wrapper">
    <Link to={'/Signup'}>
    <Button text='Royxatdan otish' />
    </Link>
    <Link to={'/SignIn'}>
    <Button text='Tizimga kirish' />

    </Link>
         </div>
        
    </div>
    </div>
  )
}
