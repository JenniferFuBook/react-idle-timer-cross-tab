const getPage = (index: number) => (
  <>
    <h3>Page {index}</h3>
    <div>
      Page {index} content details.
    </div>
  </>
);

export const PageOne = () => getPage(1);
export const PageTwo = () => getPage(2);