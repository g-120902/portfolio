import About from "../molecules/About";
import Presentation from "../molecules/Presentation";

function Banner(){
    
    return(
        <>
            <div className="h-dvh w-screen select-none flex md:flex-row justify-start items-center flex-col-reverse">
                <About />
                <Presentation />
            </div>
            
        </>
    );
    
}

export default Banner;