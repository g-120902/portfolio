import Image from "next/image";

function ProfileCard() {
    return (
        <Image
            priority={true}
            src="/images/profile.jpg"
            width={585}
            height={780}
            className="rounded-xl"
            alt="Profile Image"
        />
    )
}

export default ProfileCard;