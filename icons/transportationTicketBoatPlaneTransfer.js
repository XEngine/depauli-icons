
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
            children.concat([_c('path',{attrs:{"d":"M20.252 9.891a.735.735 0 01-.261-.048l-.032-.012a.75.75 0 01-.238-.16l-2.25-2.25c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l.97.97v-1.19a2.252 2.252 0 00-2.25-2.25.75.75 0 010-1.5 3.754 3.754 0 013.75 3.75V7.33l.97-.97a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.25 2.25a.75.75 0 01-.245.163l-.024.009a.707.707 0 01-.26.049zM6.752 21.891a3.754 3.754 0 01-3.75-3.75v-1.189l-.97.97a.744.744 0 01-1.06 0 .752.752 0 010-1.061l2.25-2.25a.763.763 0 01.246-.164l.027-.01a.755.755 0 01.518 0l.022.008a.732.732 0 01.249.165l2.249 2.249a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-.97-.97v1.189a2.252 2.252 0 002.25 2.25.75.75 0 11-.001 1.502zM14.162 24.013a2.384 2.384 0 01-1.595-.614l-1.934-1.736a.742.742 0 01-.038-.029l-1.366-1.227a.752.752 0 01.501-1.308c.185 0 .363.068.501.192l1.016.912 3.18-1.255-2.662-3.176a.752.752 0 01.301-1.18l2.288-.9a.748.748 0 01.776.14l3.748 3.365 1.806-.71a.913.913 0 01.078-.033 2.387 2.387 0 013.005 1.307c.251.587.259 1.237.022 1.829a2.371 2.371 0 01-1.278 1.309l-7.467 2.945c-.283.112-.58.169-.882.169zm-.593-1.731a.89.89 0 00.923.167l7.447-2.937a.87.87 0 00.456-.479.888.888 0 00-.827-1.221.874.874 0 00-.259.039l-2.313.91a.748.748 0 01-.775-.14l-3.748-3.365-.888.349 2.661 3.175a.75.75 0 01-.3 1.179l-3.447 1.36 1.07.963zM7.386 10.642a5.02 5.02 0 01-3.26-1.201 5.124 5.124 0 01-.626.448c-.012.009-.024.018-.033.023l-.053.028a5.088 5.088 0 01-2.572.703l-.106-.001a.748.748 0 01-.735-.765.755.755 0 01.749-.736l.082.001c.403 0 .797-.067 1.176-.198l-1.9-3.167a.752.752 0 01.643-1.135h2.414l.608-2.432a.75.75 0 01.728-.568h3.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 01.728.568l.608 2.432h2.414a.751.751 0 01.643 1.136l-1.899 3.166c.38.132.776.199 1.179.199l.063-.001c.419 0 .755.33.764.735a.746.746 0 01-.735.765l-.105.001a5.095 5.095 0 01-2.583-.708.448.448 0 01-.079-.047 5.331 5.331 0 01-.623-.446 5.06 5.06 0 01-3.283 1.201l-.108-.001h-.099zM4.127 7.648a.75.75 0 01.567.252 3.596 3.596 0 002.721 1.242h.142A3.633 3.633 0 0010.309 7.9c.139-.161.346-.253.567-.253s.427.092.567.252c.083.096.172.188.264.274l1.219-2.033H2.076l1.22 2.033c.092-.085.181-.177.264-.273a.745.745 0 01.567-.252zm6.164-3.007l-.375-1.5H5.087l-.375 1.5h5.579z"}})])
          )
        }
      }
    