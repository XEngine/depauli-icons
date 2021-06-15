
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
            children.concat([_c('path',{attrs:{"d":"M17.996 7.504a.75.75 0 010-1.5c.62 0 1.125-.505 1.125-1.125s-.505-1.125-1.125-1.125-1.125.505-1.125 1.125a.75.75 0 01-1.5 0c0-1.447 1.177-2.625 2.625-2.625s2.625 1.178 2.625 2.625-1.177 2.625-2.625 2.625z"}}),_c('circle',{attrs:{"cx":"17.996","cy":"9.379","r":"1.125"}}),_c('path',{attrs:{"d":"M13.403 13.973a.748.748 0 01-.738-.879l.597-3.439-.064-.084a5.977 5.977 0 01-1.138-4.464 5.982 5.982 0 012.348-3.964A5.969 5.969 0 0118.01-.056c1.892 0 3.697.901 4.827 2.41a6.028 6.028 0 01-1.211 8.429.742.742 0 01-.449.15.756.756 0 01-.601-.301.746.746 0 01.151-1.05 4.527 4.527 0 00.909-6.329 4.487 4.487 0 00-3.625-1.809c-.982 0-1.917.311-2.703.9a4.492 4.492 0 00-1.763 2.976 4.487 4.487 0 001.078 3.628.747.747 0 01.176.624l-.371 2.138 1.115-.687a.747.747 0 011.032.244.748.748 0 01-.244 1.032l-2.532 1.561a.757.757 0 01-.396.113zM8.228 19.504c-2.275 0-4.125-1.851-4.125-4.125s1.85-4.125 4.125-4.125 4.125 1.851 4.125 4.125-1.85 4.125-4.125 4.125zm0-6.75c-1.447 0-2.625 1.177-2.625 2.625s1.178 2.625 2.625 2.625 2.625-1.177 2.625-2.625-1.178-2.625-2.625-2.625z"}}),_c('path',{attrs:{"d":"M2.996 24.004a.751.751 0 01-.647-1.129 6.823 6.823 0 015.868-3.374c.579 0 1.16.075 1.727.223a6.766 6.766 0 014.159 3.144.752.752 0 01-.647 1.13.753.753 0 01-.647-.37 5.274 5.274 0 00-3.243-2.452 5.294 5.294 0 00-4.027.559 5.322 5.322 0 00-1.896 1.898.752.752 0 01-.647.371zM17.996 24.004a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v9a.75.75 0 01-.75.75zM.746 24.004a.75.75 0 01-.75-.75v-19.5a3.754 3.754 0 013.75-3.75h7.5a.75.75 0 010 1.5h-7.5a2.252 2.252 0 00-2.25 2.25v.821h8.25a.75.75 0 010 1.5h-8.25v17.179a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    