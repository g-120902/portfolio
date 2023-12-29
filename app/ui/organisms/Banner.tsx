import Presentation from "../molecules/Presentation";

function Banner(){
    
    return(
        <>
            <div className="top-0 absolute -z-10 bg-skin-highlight h-screen w-screen">
                <Presentation />
            </div>
            
        </>
    );
    
}

export default Banner;