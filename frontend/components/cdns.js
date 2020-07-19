const elements = {
    link: [
        {
            href: "https://fonts.googleapis.com/css?family=Montserrat",
            rel: "stylesheets",
            integrity:
                "sha384-dwqPqvisy5EDnYjnABE+MU9vMh8PHzcTApoZmBR9z2dYaB9LAs4KJPONjSIgyLke",
            crossOrigin: "anonymous",
        },
    ],
    script: [],
};

export default () => {
    Object.keys(elements).forEach((tag) => {
        elements[tag].forEach((element) => {
            const el = document.createElement(tag);
            Object.assign(el, element);

            document.head.appendChild(el);
        });
    });
};
