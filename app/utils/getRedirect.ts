export const getRedirectPath = (pathName: string) => {
    const redirectPath = pathName.substring(4);
    return redirectPath || "/";
};

export const getLocalePath = (pathName: string) => {
    const locale = pathName.substring(1,3);
    return locale;
};
