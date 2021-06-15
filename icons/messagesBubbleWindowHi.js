
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
            children.concat([_c('path',{attrs:{"d":"M13.61 13.966a.748.748 0 01-.738-.879l.597-3.438a6.05 6.05 0 01-.788-6.013A5.945 5.945 0 0115.947.425a5.955 5.955 0 014.58.039.746.746 0 01.397.983.747.747 0 01-.983.398 4.456 4.456 0 00-3.432-.029 4.455 4.455 0 00-2.447 2.406 4.507 4.507 0 00.767 4.719.745.745 0 01.177.625l-.371 2.138 2.006-1.237a.748.748 0 01.569-.091 4.406 4.406 0 002.844-.275.752.752 0 01.994.371c.083.181.09.385.02.573a.744.744 0 01-.391.42 5.925 5.925 0 01-3.503.435l-3.168 1.953a.743.743 0 01-.396.113zM8.436 19.497c-2.275 0-4.125-1.851-4.125-4.125s1.85-4.125 4.125-4.125 4.125 1.851 4.125 4.125-1.85 4.125-4.125 4.125zm0-6.75c-1.447 0-2.625 1.177-2.625 2.625s1.178 2.625 2.625 2.625 2.625-1.177 2.625-2.625-1.177-2.625-2.625-2.625z"}}),_c('path',{attrs:{"d":"M3.2 23.997a.754.754 0 01-.725-.56.75.75 0 01.078-.569 6.798 6.798 0 015.871-3.373c2.414 0 4.67 1.29 5.887 3.365a.75.75 0 01-.647 1.129.753.753 0 01-.647-.37 5.34 5.34 0 00-4.592-2.624 5.3 5.3 0 00-4.576 2.63.756.756 0 01-.649.372zM18.204 23.997a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v9a.75.75 0 01-.75.75zM.954 23.997a.75.75 0 01-.75-.75v-19.5a3.754 3.754 0 013.75-3.75h7.5a.75.75 0 010 1.5h-7.5a2.252 2.252 0 00-2.25 2.25v2.25h8.25a.75.75 0 010 1.5h-8.25v15.75a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M6.954 4.497a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('circle',{attrs:{"cx":"22.7","cy":"3.372","r":"1.125"}}),_c('path',{attrs:{"d":"M22.704 8.997a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM19.704 8.997a.75.75 0 01-.75-.75v-1.5h-1.5v1.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 011.5 0v1.5h1.5v-1.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    