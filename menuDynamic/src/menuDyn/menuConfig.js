
export const menuConfig = {
    organisation: {
        name: 'organisation',
        href: "javascript:;",
        target: null,
        callBack: null,

        sub: {
            organisation1: {
                name: 'organisation1',
                href: "javascript:;",
                target: null,
                callBack: (data={}) => {}
            },
            organisation2: {
                name: 'organisation2',
                href: "javascript:;",
                target: null,
                callBack: (data={}) => {}
            }
        }
    },
    roster: {
        name: 'roster',
        href: "javascript:;",
        target: null,
        callBack: null,

        sub: {
            roster1: {
                name: 'roster1',
                href: "javascript:;",
                target: null,
                callBack: null
            }
        }
    },
    award: {
        name: 'award',
        href: "/award",
        target: "_top",
        callBack: null,

        sub: {
            paycodes: {
                name: 'paycodes',
                href: "/paycodes",
                target: "_top",
                callBack: null
            },
            EBAs: {
                name: 'EBAs',
                href: "javascript:;",
                target: null,
                callBack: null,

                sub: {
                    rules: {
                        name: 'rules',
                        href: "javascript:;",
                        target: null,
                        callBack: (data={'bbb': 'bbb'}) => console.log('data: ', data)
                    },
                    timecodes: {
                        name: 'timecodes',
                        href: "/timecodes",
                        target: "_blank",
                        callBack: null
                    },
                    allowances: {
                        name: 'allowances',
                        href: "/allowances",
                        target: "_blank",
                        callBack: null
                    }
                }
            }
        }
    },
    skills: {
        name: 'skills',
        href: "javascript:;",
        target: "_top",
        callBack: (data = {}) => console.log('data: ', data)
    }
};