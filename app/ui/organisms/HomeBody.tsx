import ProfileCard from "../atoms/ProfileCard";
import ProfileAbout from "../molecules/ProfileAbout";

function HomeBody() {
    return (
        <>
            <section className="h-fit py-20 flex md:flex-row flex-col-reverse items-center justify-center md:justify-evenly -z-20">
                <div className="px-10">
                    <ProfileCard />

                </div>
                <div className="h-fit flex flex-col gap-10 md:w-7/12">

                    <div className="p-10">
                        <ProfileAbout />

                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeBody;