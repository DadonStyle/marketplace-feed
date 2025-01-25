import { useEffect, useRef } from 'react';

const usePostViewTracking = (mock: Array<any>) => {
  const ViewsTracker = useRef(new Set<string>());

  useEffect(() => {
    const savedTracker = localStorage.getItem('viewsTracker');
    if (savedTracker) {
      ViewsTracker.current = new Set(JSON.parse(savedTracker));
    }
  }, []);

  const sendBeaconCall = (postId: string) => {
    if (!ViewsTracker.current.has(postId)) {
      // 403, no access to the backend
      navigator.sendBeacon(`https://backend.tedooo.com/?itemId=${postId}`, JSON.stringify({ postId }));
      ViewsTracker.current.add(postId);

      // after refresh persist the data
      localStorage.setItem('viewsTracker', JSON.stringify(Array.from(ViewsTracker.current)));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target) {
            const postId = entry.target.getAttribute('data-post-id');
            if (postId) {
              sendBeaconCall(postId);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    const posts = document.querySelectorAll('.post');
    posts.forEach((post) => observer.observe(post));

    return () => {
      posts.forEach((post) => observer.unobserve(post));
    };
  }, [mock]);
};

export default usePostViewTracking;
