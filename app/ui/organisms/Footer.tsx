import Link from "next/link";
import FooterItem from "../molecules/FooterItem";
import FooterLink from "../molecules/FooterLink";

function Footer(){
    return (
        <section className="flex justify-start bottom-0 absolute border-t-2 h-20 bg-transparent w-screen border-skin-base">
            <FooterItem title="email" link="gregoryalbert1209@gmail.com" />
            
            <FooterLink title="GitHub" link="https://github.com/g-120902" />
            
        </section>
    );
}

export default Footer;