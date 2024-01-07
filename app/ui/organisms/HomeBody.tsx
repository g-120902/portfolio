import ProfileCard from "../atoms/ProfileCard";
import ProfileAbout from "../molecules/ProfileAbout";

function HomeBody() {
    return (
        <>
            <section className="h-fit flex md:flex-row flex-col-reverse items-center justify-center md:justify-evenly">
                <div className="h-fit md:h-svh md:w-5/12 flex items-center p-10 md:p-0">
                    <ProfileCard />
                </div>
                <div className="h-fit flex flex-col gap-10 md:w-5/12">

                    <div className="p-10">
                        <ProfileAbout />

                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeBody;