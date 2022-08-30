import swirl from '../assets/img/backgroundswirl.jpg'

function Home() {
    return (
        <>
            <div className="welcometext">
                <span>HI,&nbsp;</span>
                <span>I'M &nbsp;</span>
                <span>A</span>
                <span>N</span>
                <span>D</span>
                <span>R</span>
                <span>E</span>
                <span>A</span>

            </div>
         
            <img src={swirl} alt="background" className='backgroundimg'/>
            
        </>

    )
}

export default Home;



