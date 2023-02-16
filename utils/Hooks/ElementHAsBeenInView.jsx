import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function ElementHasBeenInView(threshold) {
  const [ElementInView, setElementInView] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold,
  });

  useEffect(() => {
    // If htte element has already been in view
    if (ElementInView || !inView) return;
    setElementInView(true);
  }, [inView, ElementInView]);

  return [ref, ElementInView];
}

export default ElementHasBeenInView;
