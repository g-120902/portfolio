function FooterItem({title, link}: {title: string, link: string}){
    return(
        <>
            <div className="pt-4 px-4">
                <h2
                    className="font-bold text-sm lg:text-base">
                        {title}
                </h2>
                <p
                    className="text-skin-primary underline hover:text-skin-hover text-xs"
                >
                    {link}
                </p>
            </div>
        </>
    );
}

export default FooterItem;