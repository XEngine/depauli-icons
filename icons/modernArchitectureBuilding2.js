
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
            children.concat([_c('path',{attrs:{"d":"M8.011 24a1.499 1.499 0 01-1.384-.921 30.962 30.962 0 01-.645-1.69l-.001-.002a26.688 26.688 0 01-1.312-5.662.77.77 0 01-.018-.167 23.872 23.872 0 01-.076-4.466A21.827 21.827 0 015.639 5.85a.683.683 0 01.058-.17 20.781 20.781 0 012.171-4.472l.287-.48A1.507 1.507 0 019.441 0h5.152a1.506 1.506 0 01.713.183c.236.129.432.314.568.537l.3.5a20.873 20.873 0 012.161 4.451.72.72 0 01.062.185 21.785 21.785 0 011.062 5.235c.115 1.456.09 2.954-.074 4.455a.735.735 0 01-.021.187 26.819 26.819 0 01-1.326 5.697 28.575 28.575 0 01-.631 1.65 1.5 1.5 0 01-1.384.92H8.011zm-.32-2.303c.107.281.213.547.32.802h8.011c.108-.258.214-.523.32-.803a18.846 18.846 0 01-4.326-1.928 18.78 18.78 0 01-4.325 1.929zm5.711-2.854a17.386 17.386 0 003.438 1.438 25.16 25.16 0 00.98-4.292c-.317-.16-.627-.328-.928-.501a18.642 18.642 0 01-3.49 3.355zm-7.188-2.854c.193 1.424.522 2.865.98 4.292a17.386 17.386 0 003.438-1.438 18.607 18.607 0 01-3.49-3.354c-.3.172-.611.34-.928.5zm2.206-1.307a17.06 17.06 0 003.597 3.309 17.061 17.061 0 003.596-3.31 18.663 18.663 0 01-3.596-3.246 18.671 18.671 0 01-3.597 3.247zm-2.391-.744l.024.443c.066-.036.132-.072.196-.109-.074-.111-.148-.222-.22-.334zm11.952.442c.01-.148.018-.295.024-.443-.073.113-.146.224-.221.335l.197.108zM6.092 10.953c.401.872.882 1.72 1.432 2.526a17.226 17.226 0 003.547-3.247A18.883 18.883 0 019.082 6.75H6.925a20.427 20.427 0 00-.833 4.203zm6.871-.721a17.193 17.193 0 003.547 3.246c.55-.807 1.03-1.655 1.432-2.527a20.416 20.416 0 00-.832-4.202h-2.158a18.859 18.859 0 01-1.989 3.483zm-2.23-3.482c.374.773.803 1.517 1.284 2.222.48-.705.91-1.448 1.284-2.222h-2.568zm5.841-1.5a19.222 19.222 0 00-1.646-3.193 15.14 15.14 0 01-3.827 3.193h5.473zM9.141 2a19.358 19.358 0 00-1.672 3.229A13.808 13.808 0 0013.413 1.5H9.442l-.301.5z"}})])
          )
        }
      }
    