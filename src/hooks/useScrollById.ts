const useScrollSectionById = () => {
  const scroll = (id: string) => {
    const elementToView = document.getElementById(id);
    if (elementToView) elementToView.scrollIntoView({ behavior: "smooth" });
  };

  return { scroll };
};

export default useScrollSectionById;
