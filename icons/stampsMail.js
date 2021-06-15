
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
            children.concat([_c('path',{attrs:{"d":"M12.011 19.501a7.466 7.466 0 01-6.731-4.166C3.441 11.63 4.96 7.12 8.665 5.281a7.413 7.413 0 013.322-.781 7.467 7.467 0 016.731 4.166A7.535 7.535 0 0119.5 12v1.125a2.627 2.627 0 01-2.625 2.625 2.639 2.639 0 01-2.171-1.156A3.751 3.751 0 0112 15.75 3.754 3.754 0 018.25 12 3.754 3.754 0 0112 8.25 3.754 3.754 0 0115.75 12v1.125c0 .62.505 1.125 1.125 1.125S18 13.745 18 13.125V12c0-.92-.216-1.842-.625-2.667A5.975 5.975 0 0011.989 6a5.92 5.92 0 00-2.657.625 6.008 6.008 0 00-2.708 8.043 5.973 5.973 0 005.386 3.333 5.92 5.92 0 002.657-.625.747.747 0 011.005.339.75.75 0 01-.338 1.005 7.42 7.42 0 01-3.323.781zM12 9.75A2.252 2.252 0 009.75 12 2.252 2.252 0 0012 14.25 2.252 2.252 0 0014.25 12 2.252 2.252 0 0012 9.75z"}}),_c('path',{attrs:{"d":"M20.25 24a2.746 2.746 0 01-2.426-1.455 1.519 1.519 0 00-.468-.527 1.488 1.488 0 00-1.122-.245 1.491 1.491 0 00-.966.62A3.75 3.75 0 0112.192 24h-.003a4.489 4.489 0 01-3.518-1.688 1.494 1.494 0 00-1.167-.562 1.5 1.5 0 00-1.328.794A2.745 2.745 0 013.75 24 3.754 3.754 0 010 20.25c0-1.017.557-1.946 1.455-2.426a1.502 1.502 0 00.152-2.556A3.749 3.749 0 010 12.191c0-1.376.615-2.659 1.688-3.52.161-.129.291-.285.387-.466.189-.354.228-.76.111-1.143a1.489 1.489 0 00-.73-.886A2.745 2.745 0 010 3.75 3.754 3.754 0 013.75 0c1.017 0 1.946.557 2.426 1.455.112.209.273.392.468.527a1.501 1.501 0 002.087-.375A3.754 3.754 0 0111.809 0h.002c1.375 0 2.657.615 3.518 1.688.129.161.285.291.466.387a1.499 1.499 0 002.029-.619A2.747 2.747 0 0120.25 0 3.754 3.754 0 0124 3.75a2.746 2.746 0 01-1.455 2.426 1.509 1.509 0 00-.527.468 1.49 1.49 0 00-.244 1.121c.071.395.291.738.619.966A3.753 3.753 0 0124 11.809a4.491 4.491 0 01-1.688 3.52 1.489 1.489 0 00-.562 1.171c0 .556.304 1.063.794 1.324A2.745 2.745 0 0124 20.25 3.754 3.754 0 0120.25 24zm-3.746-3.749c.614 0 1.205.185 1.709.536.388.27.712.634.935 1.052.218.408.64.661 1.102.661a2.252 2.252 0 002.25-2.25c0-.462-.253-.885-.661-1.102a2.994 2.994 0 01-1.589-2.647c0-.916.409-1.769 1.124-2.342A2.996 2.996 0 0022.5 11.81c0-.736-.36-1.426-.964-1.847a3.003 3.003 0 01.302-5.11c.409-.218.662-.641.662-1.103a2.252 2.252 0 00-2.25-2.25c-.462 0-.885.253-1.102.661a2.997 2.997 0 01-4.058 1.237 2.976 2.976 0 01-.931-.772A2.999 2.999 0 0011.811 1.5a2.25 2.25 0 00-1.848.964 3.005 3.005 0 01-4.176.75 3.04 3.04 0 01-.935-1.053A1.246 1.246 0 003.75 1.5 2.253 2.253 0 001.5 3.75c0 .462.253.885.661 1.102A2.982 2.982 0 013.62 6.625a2.977 2.977 0 01-.222 2.285 2.965 2.965 0 01-.772.931 2.998 2.998 0 00-1.126 2.35c0 .736.36 1.426.964 1.847a3.002 3.002 0 01-.303 5.11c-.408.217-.661.64-.661 1.102a2.252 2.252 0 002.25 2.25c.462 0 .885-.253 1.102-.661a2.997 2.997 0 014.058-1.237c.362.193.675.453.931.772a2.996 2.996 0 002.341 1.126h.017a2.25 2.25 0 001.839-.964 3.002 3.002 0 012.466-1.285z"}})])
          )
        }
      }
    