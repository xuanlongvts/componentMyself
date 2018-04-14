
export const menuConfig = {
    organisation: {
        permission: true,
        name: 'organisation',
        href: "javascript:;",
        target: null,
        callBack: null,

        sub: {
            organisation1: {
                permission: true,
                name: 'organisation1',
                href: "javascript:;",
                target: null,
                callBack: (data={}) => {}
            },
            organisation2: {
                permission: false,
                name: 'organisation2',
                href: "javascript:;",
                target: null,
                callBack: (data={}) => {}
            }
        }
    },
    roster: {
        permission: false,
        name: 'roster',
        href: "javascript:;",
        target: null,
        callBack: null,

        sub: {
            roster1: {
                permission: true,
                name: 'roster1',
                href: "javascript:;",
                target: null,
                callBack: null
            }
        }
    },
    award: {
        permission: true,
        name: 'award',
        href: "/award",
        target: "_top",
        callBack: null,

        sub: {
            paycodes: {
                permission: true,
                name: 'paycodes',
                href: "/paycodes",
                target: "_top",
                callBack: null
            },
            EBAs: {
                permission: true,
                name: 'EBAs',
                href: "javascript:;",
                target: null,
                callBack: null,

                sub: {
                    rules: {
                        permission: true,
                        name: 'rules',
                        href: "javascript:;",
                        target: null,
                        callBack: (data={'bbb': 'bbb'}) => console.log('data: ', data)
                    },
                    timecodes: {
                        permission: true,
                        name: 'timecodes',
                        href: "/timecodes",
                        target: "_blank",
                        callBack: null
                    },
                    allowances: {
                        permission: false,
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
        permission: true,
        name: 'skills',
        href: "javascript:;",
        target: "_top",
        callBack: (data = {}) => console.log('data: ', data)
    }
};