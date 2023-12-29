export const getRedirectPath = (pathName: string) => {
    const redirectPath = pathName.substring(4);
    return redirectPath || "/";
};