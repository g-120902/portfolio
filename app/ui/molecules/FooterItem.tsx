import FooterItemLink from "../atoms/FooterItemLink";
import FooterItemText from "../atoms/FooterItemText";

function FooterItem({ title, link, isLink }: { title: string, link: string, isLink: boolean }) {
    return (
        <>
            <div className="flex flex-col pt-4 justify-evenly ">
                <h2
                    className="font-bold text-sm lg:text-base text-skin-primary">
                    {title}
                </h2>
                <div className={isLink ? 'block': 'hidden'}>
                    <FooterItemLink link={link}/>
                </div>
                <div className={isLink ? 'hidden': 'block'}>
                    <FooterItemText link={link}/>
                </div>
            </div>
        </>
    );
}

export default FooterItem;