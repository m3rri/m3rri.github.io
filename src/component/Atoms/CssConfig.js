const colorConfig = {
    black: "#333",
    white: "#fff",
    aaa: "#aaa",
    efefef: "#efefef",
    def: "#329F5B",
    deep: "#0C8346",
    light: "#8FD5A6",
    highlight: "#E5C2C0",
};

const styleConfig = {
    space: "&:not(:first-of-type)",
    spaceY: (num) => `${num}px 0 0`,
    spaceX: (num) => `0 0 0 ${num}px`,
    md: "@media(min-width: 768px)",
};

export default colorConfig;
export { styleConfig };
