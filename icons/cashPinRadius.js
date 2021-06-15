
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-2.944 0-5.869-.341-8.025-.934C1.374 22.35 0 21.302 0 20.035c0-1.895 2.952-2.88 5.427-3.373a.75.75 0 01.293 1.471c-3.445.686-4.22 1.627-4.22 1.902 0 .837 3.706 2.465 10.5 2.465 6.794 0 10.5-1.628 10.5-2.465 0-.277-.779-1.22-4.24-1.906-.197-.039-.366-.152-.478-.319s-.151-.366-.113-.563a.752.752 0 01.882-.589C21.037 17.15 24 18.135 24 20.035c0 1.267-1.375 2.315-3.975 3.031-2.156.593-5.081.934-8.025.934z"}}),_c('path',{attrs:{"d":"M11.999 20.741a1.11 1.11 0 01-.659-.215 1.098 1.098 0 01-.25-.25C5.142 12.088 4.5 8.614 4.5 7.5 4.5 3.365 7.865 0 12 0s7.5 3.365 7.5 7.5c0 1.114-.642 4.588-6.589 12.777a1.116 1.116 0 01-.912.464zM12 1.5c-3.308 0-6 2.692-6 6 0 2.292 3.165 7.514 6 11.474 2.835-3.959 6-9.181 6-11.474 0-3.308-2.692-6-6-6z"}}),_c('path',{attrs:{"d":"M11.946 13.5a.75.75 0 01-.75-.75V12H9.7a.75.75 0 010-1.5h3.155a.589.589 0 00.545-.825.588.588 0 00-.302-.307l-2.621-.814c-.021-.007-.039-.013-.057-.021a2.082 2.082 0 01-1.311-1.939c0-.559.217-1.085.612-1.48a2.075 2.075 0 011.475-.614v-.75a.75.75 0 011.5 0v.75h1.125a.75.75 0 010 1.5H11.2a.589.589 0 00-.591.592c0 .234.136.444.349.539l2.62.814a2.082 2.082 0 011.202 1.139c.22.514.227 1.082.019 1.601A2.082 2.082 0 0112.856 12h-.16v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    