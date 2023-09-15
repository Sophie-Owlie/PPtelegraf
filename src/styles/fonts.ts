import localFont from 'next/font/local'

const PPTelegraf = localFont({
  src: [
    {
      path: './PPTelegraf/PPTelegraf-UltraLight.woff2',
      weight: '100',
    },
    {
      path: './PPTelegraf/PPTelegraf-Regular.woff2',
      weight: '400',
    },
    {
      path: './PPTelegraf/PPTelegraf-Medium.woff2',
      weight: '500',
    },
    {
      path: './PPTelegraf/PPTelegraf-Semibold.woff2',
      weight: '600',
    },
    {
      path: './PPTelegraf/PPTelegraf-Bold.woff2',
      weight: '700',
    },
    {
      path: './PPTelegraf/PPTelegraf-UltraBold.woff2',
      weight: '800',
    },
    {
      path: './PPTelegraf/PPTelegraf-Black.woff2',
      weight: '900',
    },
  ],
})
 
export { PPTelegraf }