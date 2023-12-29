import Presentation from "../molecules/Presentation";

function Banner(){
    
    return(
        <>
            <div className="top-0 absolute -z-10 bg-skin-highlight h-fit w-screen select-none">
                <Presentation />
            </div>
            
        </>
    );
    
}

export default Banner;