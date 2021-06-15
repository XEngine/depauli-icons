
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
            children.concat([_c('path',{attrs:{"d":"M2.498 24.001a.75.75 0 01-.678-1.071 11.3 11.3 0 012.614-3.518c-.68-.19-1.346-.426-1.986-.704a2.263 2.263 0 01-1.152-2.945l1.375-3.209c.201-.47.303-.967.303-1.478V9.001c0-4.963 4.037-9 9-9s9 4.037 9 9v2.076c0 .511.102 1.008.303 1.478l1.376 3.21a2.259 2.259 0 01-1.145 2.94c-.646.281-1.313.517-1.992.707a11.084 11.084 0 012.612 3.518c.086.181.096.385.028.574a.746.746 0 01-.705.497.753.753 0 01-.678-.429 9.608 9.608 0 00-4.122-4.366l-1.729 4.324a.745.745 0 01-.975.418.74.74 0 01-.41-.401.742.742 0 01-.007-.574l1.754-4.386a9.736 9.736 0 00-3.324-.584 9.634 9.634 0 00-3.294.579l1.756 4.391a.747.747 0 01-.418.975.747.747 0 01-.975-.418l-1.731-4.328a9.773 9.773 0 00-4.121 4.371.755.755 0 01-.679.428zm14.162-6.468c.448.206.885.441 1.3.701a13.817 13.817 0 002.942-.902.75.75 0 00.373-.977l-1.376-3.211a5.215 5.215 0 01-.425-2.068V9.001c0-4.135-3.365-7.5-7.5-7.5s-7.5 3.365-7.5 7.5v2.076c0 .715-.143 1.411-.425 2.068l-1.375 3.21a.754.754 0 00.38.981c.926.403 1.911.704 2.929.897a11.015 11.015 0 011.295-.701l.038-.017a.657.657 0 01.096-.047l.042-.014a11.22 11.22 0 018.999-.013.744.744 0 01.207.092z"}}),_c('path',{attrs:{"d":"M11.969 16.503a5.977 5.977 0 01-1.719-.253 5.956 5.956 0 01-3.557-2.903 5.96 5.96 0 01-.468-4.567.75.75 0 01.688-.534c3.048-.123 4.352-3.243 4.365-3.274a.745.745 0 01.696-.471c.309 0 .582.185.696.471.012.03 1.326 3.149 4.362 3.274a.75.75 0 01.688.534 5.979 5.979 0 010 3.445 6.041 6.041 0 01-5.751 4.278zM7.545 9.696a4.499 4.499 0 004.425 5.307 4.532 4.532 0 004.314-3.208 4.496 4.496 0 00.116-2.099c-2.251-.302-3.657-1.769-4.425-2.901-.769 1.133-2.176 2.601-4.43 2.901z"}})])
          )
        }
      }
    