import { useTranslations } from "next-intl";

function ProfileAbout() {
  const t = useTranslations();

  return (
    <div className="text-skin-primary flex flex-col gap-12">
      <h2 className="font-semibold text-2xl md:text-3xl lg:text-6xl">{t("Profile.title")}</h2>
      <p className="text-skin-primary text-justify font-light text-sm md:text-base lg:text-xl">{t("Profile.desc", { age: 21 })}</p>
    </div>
  );
}

export default ProfileAbout;
