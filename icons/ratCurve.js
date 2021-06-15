
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
            children.concat([_c('path',{attrs:{"d":"M12.874 23.25c-3.005 0-5.83-1.17-7.955-3.295a11.18 11.18 0 01-3.285-7.566 3.126 3.126 0 01-.442-.368C.181 11.01-.262 9.287.163 8.013c.339-1.015.871-1.679 1.583-1.974a2.074 2.074 0 01.981-.15 4.477 4.477 0 014.21-2.136c2.029.034 4.093.293 6.109.767a.753.753 0 01.572.637c.018.144.42 3.546-1.31 5.505a3.837 3.837 0 01-2.13 1.232c.183.36.412.696.679.996a2.403 2.403 0 012.004-1.08 2.362 2.362 0 011.114.277.747.747 0 01.312 1.014.748.748 0 01-1.015.311l-.042-.021a.898.898 0 00-1.178.43l-.011.022c.293.166.604.3.928.401.058-.002.116-.004.174-.004 1.054 0 2.049.414 2.791 1.149.3-.35.618-.671.949-.957a.748.748 0 011.238.621.745.745 0 01-.258.513 7.659 7.659 0 00-2.452 4.024.747.747 0 01-.905.553.748.748 0 01-.554-.905 9.143 9.143 0 011.079-2.612 2.5 2.5 0 00-2.102-.88 2.594 2.594 0 00-2.349 1.747.74.74 0 01-.949.466.744.744 0 01-.43-.381.745.745 0 01-.035-.573 4.091 4.091 0 011.693-2.134l-.064-.044a.734.734 0 01-.33-.248 6.154 6.154 0 01-2.062-3.125.756.756 0 01.122-.657.759.759 0 01.6-.297c.88 0 1.572-.279 2.059-.829.949-1.074 1.01-2.945.981-3.811a27.607 27.607 0 00-5.304-.61 3.464 3.464 0 00-.287-.012c-1.205 0-2.288.71-2.761 1.809a.75.75 0 01-1.023.374c-.001 0-.103-.042-.239-.042a.594.594 0 00-.237.048c-.282.12-.54.497-.728 1.06-.24.722.071 1.878.666 2.473.272.272.58.409.916.409.149 0 .307-.027.469-.081a.748.748 0 01.907 1.047.743.743 0 01-.434.376 2.948 2.948 0 01-.933.155h-.015a9.713 9.713 0 002.817 6.028 9.683 9.683 0 006.894 2.856c5.376 0 9.75-4.374 9.75-9.75s-4.374-9.75-9.75-9.75a.75.75 0 010-1.5c6.203 0 11.25 5.047 11.25 11.25s-5.045 11.25-11.249 11.25z"}}),_c('path',{attrs:{"d":"M7.25 9a.737.737 0 01-.132-.012 1.125 1.125 0 01-.982-.982.717.717 0 01.001-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982A.734.734 0 017.25 9z"}})])
          )
        }
      }
    