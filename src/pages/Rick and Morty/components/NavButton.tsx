const NavButtons = ({
  navFunc,
  totalPages = 42,
  currPage,
  prevPage,
  nextPage,
  english,
}: {
  navFunc: (id: number) => Promise<void>;
  totalPages?: number;
  currPage: number;
  prevPage?: string;
  nextPage?: string;
  english: boolean;
}) => {
  console.log(currPage);
  console.log(totalPages);

  return (
    <div className="nav-btns">
      {prevPage && (
        <button onClick={() => navFunc(currPage - 1)} disabled={false}>
          {english ? "Go back" : "Volver"}
        </button>
      )}
      {currPage - 2 > 0 && (
        <button onClick={() => navFunc(currPage - 2)}>{currPage - 2}</button>
      )}
      {currPage - 1 > 0 && (
        <button onClick={() => navFunc(currPage - 1)}>{currPage - 1}</button>
      )}
      <button disabled onClick={() => navFunc(currPage)}>
        {currPage}
      </button>
      {currPage + 1 > totalPages && (
        <button onClick={() => navFunc(currPage + 1)}>{currPage - 1}</button>
      )}
      {currPage + 2 > totalPages && (
        <button onClick={() => navFunc(currPage + 2)}>{currPage - 2}</button>
      )}
      {nextPage && (
        <button onClick={() => navFunc(currPage + 1)}>
          {english ? "Next page" : "Siguiente página"}
        </button>
      )}
    </div>
  );
};
export default NavButtons;
