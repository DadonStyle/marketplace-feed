export const useResetScrollerPosition = () => {
  window.onbeforeunload = function () {
    window.scrollTo({ top: 0, left: 0 });
  };

  return null;
};
