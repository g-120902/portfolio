import Link from "next/link";

function FooterItemText({ link }: { link: string }) {
    return (
        <p className="text-skin-primary underline hover:text-skin-hover text-xs">
            {link}
        </p>

    );
}

export default FooterItemText;