
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
            children.concat([_c('path',{attrs:{"d":"M1.505 24.002a.739.739 0 01-.572-.26.748.748 0 01-.181-.545 11.198 11.198 0 017.848-9.93.741.741 0 01.182-.034l.043-.001a.745.745 0 01.468.165l2.679 2.143 2.68-2.145a.755.755 0 01.695-.13 11.197 11.197 0 017.846 9.931.748.748 0 01-.748.804.754.754 0 01-.748-.696 9.732 9.732 0 00-3.447-6.768l-1.067 3.202a.755.755 0 01-.711.513.745.745 0 01-.416-.126l-4.084-2.723-4.084 2.723a.745.745 0 01-.66.085.757.757 0 01-.468-.472l-1.066-3.2a9.728 9.728 0 00-3.447 6.767.749.749 0 01-.742.697zm6.369-5.67l2.829-1.886-2.027-1.621c-.129.047-.266.101-.421.164-.098.041-.196.086-.295.131a9.627 9.627 0 00-.691.344l-.057.032a9.468 9.468 0 00-.237.137l.899 2.699zm8.198 0l.899-2.699a9.799 9.799 0 00-.758-.41l-.118-.055a8.852 8.852 0 00-.435-.193 4.452 4.452 0 00-.192-.073l-.201-.076-2.024 1.619 2.829 1.887zM16.473 12.75a.746.746 0 01-.75-.75c0-.414-.044-.815-.134-1.212A5.98 5.98 0 0111.973 12c-1.603 0-3.11-.624-4.243-1.758S5.973 7.602 5.973 6c0-.038.002-.075.005-.113l.002-.039a.77.77 0 01.008-.16A5.978 5.978 0 017.73 1.757 5.963 5.963 0 0111.973 0c2.615 0 4.516.785 5.648 2.332.911 1.244 1.102 2.681 1.102 3.668 0 5.439-1.595 6.511-1.915 6.671a.76.76 0 01-.335.079zM7.584 6.998a4.43 4.43 0 001.207 2.184 4.47 4.47 0 003.182 1.318 4.524 4.524 0 003.063-1.204c-.361-.703-.835-1.373-1.295-2.023-.441-.623-.894-1.263-1.294-1.972-.93.956-2.476 1.824-3.847 1.824-.347 0-.686-.042-1.016-.127zm9.06 2.2c.076.18.145.359.206.538.209-.821.373-2.014.373-3.736 0-1.904-.788-4.187-4.462-4.471.067.666.221 1.302.47 1.934.437 1.11 1.096 2.042 1.734 2.943.589.833 1.198 1.694 1.637 2.695.017.032.03.064.042.097zM7.517 5.393a2.61 2.61 0 001.074.232c1.445 0 2.911-1.337 3.161-1.817a8.595 8.595 0 01-.493-2.247 4.488 4.488 0 00-2.468 1.257 4.419 4.419 0 00-1.274 2.575z"}})])
          )
        }
      }
    