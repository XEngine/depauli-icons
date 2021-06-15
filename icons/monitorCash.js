
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
            children.concat([_c('path',{attrs:{"d":"M6 21a.75.75 0 010-1.5h1.615l.5-3H3.75A3.754 3.754 0 010 12.75v-9A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v7.5a.75.75 0 01-1.5 0v-7.5a2.252 2.252 0 00-2.25-2.25H3.75A2.252 2.252 0 001.5 3.75V12h8.383a.75.75 0 010 1.5H1.632A2.262 2.262 0 003.75 15H9a.87.87 0 01.072.005h.003l.046.005.033.007c.015.003.038.01.061.017a.655.655 0 01.062.02c.029.012.048.022.067.032a.887.887 0 01.068.038.922.922 0 01.155.138c.021.025.036.042.048.061a.476.476 0 01.036.06.643.643 0 01.057.129.681.681 0 01.039.206l.002.034a.552.552 0 01-.005.071.255.255 0 01-.005.052l-.75 4.5a.78.78 0 01-.101.267.756.756 0 01-.144.171l-.027.022a.791.791 0 01-.197.115l-.046.015a.726.726 0 01-.221.035H6z"}}),_c('path',{attrs:{"d":"M17.25 21.75a.75.75 0 01-.75-.75h-.75a.75.75 0 010-1.5h2.031a.589.589 0 00.543-.824.584.584 0 00-.323-.317l-2.063-.826a2.083 2.083 0 01-1.312-1.94c0-.559.217-1.084.612-1.48a2.079 2.079 0 011.262-.603v-.01a.75.75 0 011.5 0h.75a.75.75 0 010 1.5h-2.033a.593.593 0 00-.22 1.142l2.063.826a2.094 2.094 0 011.161 2.722A2.08 2.08 0 0118 20.99V21a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}})])
          )
        }
      }
    