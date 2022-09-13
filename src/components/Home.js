import room from '../assets/img/background_img.jpg'
import '../assets/fonts/LibreBaskerville-Regular.ttf'


function Home() {
    return (
        
        <div>
        <img src={room} alt="background" className='backgroundimg'/>
      
       <div><h3 className='openingtext'>Hi there, I'm </h3></div> 
       <div><h1 className='openName'>Andrea</h1></div> 
       <div><h3>Full Stack Developer</h3></div>
       <div><h4>I'm a creative </h4></div>

       <a href='mailto:andrearestrepox@gmail.com'>
        <button className='button'>Contact Me </button>
       </a>

       </div>
        
        
        
        
        
        
      
            
         
        
     
          
           
            )
        }

export default Home;



