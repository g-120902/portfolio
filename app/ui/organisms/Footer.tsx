import FooterItem from "../molecules/FooterItem";

function Footer() {
    return (
        <div className="overflow-hidden h-fit border-t-2  bg-transparent border-skin-base w-screen sm:px-12 mt-20 sm:mt-0">
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 md:gap-20 py-4">
                <FooterItem isLink={false} title="email" link="gregoryalbert1209@gmail.com" />

                <FooterItem isLink={true} title="GitHub" link="https://github.com/g-120902" />

            </div>
        </div>

    );
}

export default Footer;