import FooterItem from "../molecules/FooterItem";

function Footer(){
    return (
        <div className="flex justify-center sm:justify-start bottom-0 absolute border-t-2 h-20 bg-transparent border-skin-base w-screen sm:px-12">
            <div className="flex justify-center sm:justify-start gap-2 md:gap-5 items-center">
            <FooterItem isLink={false} title="email" link="gregoryalbert1209@gmail.com" />
            
            <FooterItem isLink={true} title="GitHub" link="https://github.com/g-120902" />
            
        </div>
        </div>
        
    );
}

export default Footer;