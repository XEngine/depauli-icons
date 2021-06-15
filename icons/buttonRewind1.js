
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
            children.concat([_c('path',{attrs:{"d":"M12 23.998c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"}}),_c('path',{attrs:{"d":"M10.405 17.25a2.322 2.322 0 01-1.65-.683L4.719 12.53a.75.75 0 010-1.06l4.034-4.036a2.323 2.323 0 011.655-.685c.626 0 1.214.243 1.656.685.354.354.58.8.657 1.285l1.283-1.283c.442-.442 1.03-.685 1.655-.685s1.214.243 1.655.685A2.32 2.32 0 0118 9.088v5.82a2.325 2.325 0 01-.688 1.656 2.325 2.325 0 01-1.653.683 2.328 2.328 0 01-1.654-.683l-1.284-1.283a2.318 2.318 0 01-.659 1.285 2.325 2.325 0 01-1.653.683h-.004zm-.59-1.745a.84.84 0 001.188-.001.841.841 0 00.248-.595V13.5a.75.75 0 011.28-.53l2.534 2.533a.835.835 0 00.592.245.836.836 0 00.596-.246.836.836 0 00.247-.595V9.089a.838.838 0 00-.841-.839.84.84 0 00-.595.246L12.53 11.03a.743.743 0 01-.817.163.747.747 0 01-.463-.693V9.089a.84.84 0 00-1.435-.595L6.311 12l3.504 3.505z"}})])
          )
        }
      }
    