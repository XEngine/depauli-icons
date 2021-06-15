
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
            children.concat([_c('path',{attrs:{"d":"M11.999 23.947c-.26 0-.517-.068-.742-.196a20.946 20.946 0 01-5.143-4.208c-2.564-2.922-3.864-6.2-3.864-9.744 0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.512 1.512 0 01-.744.196zM12 1.549c-4.549 0-8.25 3.701-8.25 8.25 0 1.863.595 8.282 8.25 12.649 7.655-4.372 8.25-10.786 8.25-12.649 0-4.549-3.701-8.25-8.25-8.25z"}}),_c('path',{attrs:{"d":"M7.5 14.947a.752.752 0 01-.53-1.281l2.499-2.499c-.363-.696-.766-2.234 1.148-4.148 1.653-1.653 4.958-1.813 5.098-1.819l.036-.001a.74.74 0 01.526.219.756.756 0 01.22.563c-.015.352-.197 3.476-1.819 5.099-.804.805-1.672 1.296-2.508 1.421a2.954 2.954 0 01-.427.032 2.57 2.57 0 01-1.217-.302L8.03 14.727a.743.743 0 01-.53.22zm7.402-8.152c-.931.141-2.423.484-3.225 1.285-.807.807-1.414 1.924-.7 2.64.208.208.465.314.763.314.067 0 .136-.005.207-.016.516-.077 1.094-.422 1.669-.998.803-.802 1.145-2.294 1.286-3.225zM11.25 14.947a.75.75 0 010-1.5H15a.75.75 0 010 1.5h-3.75z"}})])
          )
        }
      }
    