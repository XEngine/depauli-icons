
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
            children.concat([_c('path',{attrs:{"d":"M11.973 2.25c-.62 0-1.125-.505-1.125-1.125S11.353 0 11.973 0s1.125.505 1.125 1.125-.504 1.125-1.125 1.125zM21.608 24a.745.745 0 01-.74-.634 9.075 9.075 0 00-3.233-5.607 2.996 2.996 0 01-2.72 1.741h-2.941v3.75a.75.75 0 01-1.5 0V19.5h-1.5v3.75a.75.75 0 01-1.5 0v-4.121a2.99 2.99 0 01-1.246-1.3 8.947 8.947 0 00-3.143 5.537.748.748 0 01-.855.625.752.752 0 01-.628-.857 10.541 10.541 0 014.334-6.969A2.995 2.995 0 018.914 13.5h6c1.49 0 2.76 1.117 2.968 2.576a10.53 10.53 0 014.467 7.057.745.745 0 01-.135.558.744.744 0 01-.606.309zM7.43 16.718A1.494 1.494 0 008.914 18h6c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-6c-.775 0-1.417.59-1.491 1.355a.732.732 0 01.007.363z"}}),_c('path',{attrs:{"d":"M11.973 13.5a5.974 5.974 0 01-4.985-2.666c-.468.731-1.197 1.347-2.176 1.837a.753.753 0 01-1.006-.335.75.75 0 01.335-1.006C5.696 10.552 6.042 9.586 6.092 9h-.119a.75.75 0 010-1.5c0-3.308 2.692-6 6-6s6 2.692 6 6a.75.75 0 010 1.5h-.119c.05.586.397 1.552 1.951 2.329a.75.75 0 01-.67 1.342c-.978-.489-1.708-1.104-2.179-1.833a5.98 5.98 0 01-4.983 2.662zM7.735 9c.629 1.788 2.309 3 4.238 3s3.61-1.212 4.238-3H7.735zm8.738-1.5c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5h9z"}})])
          )
        }
      }
    