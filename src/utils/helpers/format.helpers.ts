/**
 * Format number with comma seperated value
 * @param number
 */
export const formatNumber = (number: string | number = 0): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Capitalize string word
 * @param text
 * @returns
 */
export const formatTitleCase = (text: string): string | undefined => {
    const splitStr = text.toLowerCase().split(' ');
    if (splitStr && splitStr.length > 0) {
        splitStr.forEach((e, i) => {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        });

        return splitStr.join(' ');
    }
};

export const formatStatus = (status: string): string => {
    return status
        .toLowerCase()
        .replace(/_/g, ' ')
        .replace(/\b(\w)/g, (x) => x.toUpperCase());
};
