
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
            children.concat([_c('path',{attrs:{"d":"M13.274 23.184a.752.752 0 01-.53-1.281l2.25-2.25a.744.744 0 011.06 0 .752.752 0 010 1.061l-2.25 2.25a.744.744 0 01-.53.22zM4.274 23.184a.752.752 0 01-.53-1.281l2.25-2.25a.744.744 0 011.06 0 .752.752 0 010 1.061l-2.25 2.25a.743.743 0 01-.53.22zM9.524 22.434a.752.752 0 01-.53-1.281l2.47-2.47h-2.69a.747.747 0 01-.693-.463.745.745 0 01.163-.817l1.72-1.719h-2.69a4.524 4.524 0 01-1.949-.442 4.464 4.464 0 01-2.297-2.561 4.463 4.463 0 01.187-3.435 4.464 4.464 0 012.561-2.297 4.476 4.476 0 012.591-.12 6.756 6.756 0 016.414-4.645 6.71 6.71 0 014.779 1.983 6.706 6.706 0 011.971 4.775 6.705 6.705 0 01-1.983 4.77 6.706 6.706 0 01-4.767 1.971h-2.697l-1.5 1.5h2.689a.75.75 0 01.53 1.28l-3.75 3.75a.736.736 0 01-.529.221zM7.27 8.192c-.338 0-.673.058-.997.172a2.975 2.975 0 00-1.706 1.53 2.973 2.973 0 00-.124 2.289 2.978 2.978 0 001.53 1.707c.401.192.849.294 1.294.294h7.527a5.215 5.215 0 003.694-1.533A5.211 5.211 0 0020.03 8.94a5.216 5.216 0 00-1.533-3.714 5.215 5.215 0 00-3.711-1.542 5.257 5.257 0 00-5.169 4.292 5.362 5.362 0 00-.093.961c0 .213.013.431.04.646a.751.751 0 11-1.487.196 6.81 6.81 0 01-.053-.842c.001-.214.012-.425.033-.635a2.914 2.914 0 00-.787-.11z"}})])
          )
        }
      }
    