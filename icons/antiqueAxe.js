
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M2.25 23.998a2.235 2.235 0 01-1.591-.658C.234 22.915 0 22.35 0 21.749s.234-1.166.659-1.591l8.027-8.026a6.947 6.947 0 00-2.743-.699 1.504 1.504 0 01-1.432-1.465A9.671 9.671 0 017.525 2.69 9.687 9.687 0 0114.477.001a1.505 1.505 0 011.463 1.426c.042.952.282 1.893.7 2.749l.263-.263a2.237 2.237 0 011.583-.641h.026a2.237 2.237 0 011.582.687 2.24 2.24 0 010 3.126l-.274.274a6.932 6.932 0 002.743.704 1.506 1.506 0 011.432 1.463c.003.154.003.307 0 .46-.124 5.245-4.491 9.511-9.735 9.511l-.233-.002a1.501 1.501 0 01-1.464-1.432 6.967 6.967 0 00-.7-2.746L3.841 23.34c-.424.424-.99.658-1.591.658zM18.472 4.771a.738.738 0 00-.514.209L1.719 21.218c-.142.142-.22.33-.22.531s.078.389.22.531c.141.141.33.219.531.219s.39-.078.531-.219L19.026 6.033A.744.744 0 0019.016 5a.747.747 0 00-.526-.229l-.018-.375v.375zm-4.205 13.225c4.433 0 8.124-3.609 8.229-8.046.003-.13.003-.26 0-.39a8.268 8.268 0 01-1.505-.208 6.74 6.74 0 01-7.135 7.13c.116.503.186 1.01.208 1.512h.044c.053.002.106.002.159.002zm-.938-3.084a5.242 5.242 0 006.092-6.085 8.397 8.397 0 01-.707-.36l-5.741 5.742c.13.23.25.465.356.703zm-4.244-4.248c.238.107.475.227.708.359l5.741-5.74a8.474 8.474 0 01-.358-.704 5.295 5.295 0 00-2.196.072 5.225 5.225 0 00-3.895 6.013zm5.16-9.166A8.205 8.205 0 008.56 3.775a8.189 8.189 0 00-2.55 6.158 8.378 8.378 0 011.504.206 6.73 6.73 0 016.73-7.143c.135 0 .271.004.407.012a8.343 8.343 0 01-.208-1.512l-.121.002h-.077z"}})])
          )
        }
      }
    