import Link from "next/link";

function FooterLink({title, link}: {title: string, link: string}){
    return(
        <>
            <div className="pt-4 px-4">
                <h2
                    className="font-bold text-sm lg:text-base">
                        {title}
                </h2>
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}
                    className="text-skin-primary underline hover:text-skin-hover text-xs"
                >
                    {link}
                </Link>
            </div>
        </>
    );
}

export default FooterLink;