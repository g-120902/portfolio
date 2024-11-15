import Link from "next/link";

function FooterItemLink({ link }: { link: string }) {
    return (
        <Link
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="text-skin-primary underline hover:text-skin-hover text-xs"
        >
            {link}
        </Link>

    );
}

export default FooterItemLink;