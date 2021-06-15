
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
            children.concat([_c('path',{attrs:{"d":"M19.44 23.994a.749.749 0 01-.665-.402l-2.477-4.722c-.769.32-1.576.52-2.406.595v.784a.75.75 0 01-1.5 0v-.784a8.144 8.144 0 01-2.403-.594l-1.062 2.024a.747.747 0 01-1.013.315.745.745 0 01-.367-.441.745.745 0 01.052-.572l1.063-2.026a8.263 8.263 0 01-1.634-1.39L5.2 18.157a.745.745 0 01-.45.15.751.751 0 01-.451-1.35l1.827-1.373a8.228 8.228 0 01-.884-1.957l-3.946.805a.75.75 0 01-.299-1.47l3.946-.805a8.344 8.344 0 01.044-2.147l-.985-.242a.75.75 0 01.358-1.456l.987.243a8.17 8.17 0 01.961-1.919l-1.14-.93a.752.752 0 01.949-1.163l1.141.932A8.25 8.25 0 018.947 4.15L7.486 1.072a.747.747 0 01.356-1 .75.75 0 011 .357l1.46 3.076a8.148 8.148 0 012.091-.47V.75a.75.75 0 011.5 0v2.285a8.204 8.204 0 012.094.471l.421-.887a.755.755 0 01.999-.356.751.751 0 01.357.999l-.422.89c.618.366 1.184.81 1.688 1.325l3.497-2.855a.747.747 0 011.22.655.748.748 0 01-.272.506L19.98 6.637a8.2 8.2 0 01.96 1.918l.844-.208a.748.748 0 01.908.549.75.75 0 01-.548.907l-.844.208a8.204 8.204 0 01.044 2.146l1 .204a.748.748 0 01.585.885.753.753 0 01-.884.585l-1.001-.204a8.195 8.195 0 01-.894 1.973l3.024 2.407a.752.752 0 01-.467 1.337.756.756 0 01-.467-.163l-2.995-2.385a8.288 8.288 0 01-1.619 1.375l2.479 4.724a.751.751 0 01-.665 1.099zM6.537 12.64A6.776 6.776 0 0013.143 18c3.722 0 6.75-3.028 6.75-6.75s-3.028-6.75-6.75-6.75a6.739 6.739 0 00-6.559 5.158 6.769 6.769 0 00-.062 2.907.746.746 0 01.015.075z"}}),_c('path',{attrs:{"d":"M15.395 13.5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM9.769 14.25a1.126 1.126 0 01-1.124-1.121c0-.025.002-.049.007-.073a1.116 1.116 0 01.985-1.044A.731.731 0 019.77 12a1.123 1.123 0 011.114.994.717.717 0 010 .262 1.116 1.116 0 01-1.05.989.334.334 0 01-.063.005h-.002z"}})])
          )
        }
      }
    