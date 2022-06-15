// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { useState, Fragment, memo, useMemo } from "react";

import { IProps } from "./interface";

// memoized component
const ChildComponent = memo(({ user: { name, age } }: IProps) => {
  console.log("ChildComponent has been updated. Memoization is not working.");

  return (
    <div>
      user name: {name}, user age: {age || "unknown"}
    </div>
  );
});

export const MainComponent = ({
  user = { name: "unknown", age: null } // default value for `props.user`
}: IProps) => {
  const [state, setState] = useState<boolean>(false); // change state for component force updating
  const data = useMemo(() => user, [user.name, user.age])
  return (
    <Fragment>
      <button onClick={() => setState(!state)} className="btn btn-info">
        MainComponent force updating
      </button>
      <ChildComponent user={data} />
    </Fragment>
  );
};
