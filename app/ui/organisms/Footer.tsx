import FooterItem from "../molecules/FooterItem";

function Footer() {
    return (
        <div className="overflow-hidden h-fit border-t-2  bg-transparent border-skin-base w-screen sm:px-12 z-10">
            <div className="flex flex-col sm:flex-row justify-start gap-4 md:gap-20 p-4">
                <FooterItem isLink={false} title="email" link="gregoryalbert1209@gmail.com" />
                <FooterItem isLink={true} title="GitHub" link="https://github.com/g-120902" />
                <FooterItem isLink={true} title="LinkedIn" link="https://www.linkedin.com/in/gregory-albert-125610243/
" />

            </div>
        </div>

    );
}

export default Footer;