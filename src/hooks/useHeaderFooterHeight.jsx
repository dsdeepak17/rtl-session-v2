import { useLayoutEffect, useState } from 'react'

function useHeaderFooterHeight() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  useLayoutEffect(() => {
    setHeaderHeight(document.getElementById('header').offsetHeight);
    setFooterHeight(document.getElementById('footer').offsetHeight);
  }, [])

  return { headerHeight, footerHeight}
}

export default useHeaderFooterHeight