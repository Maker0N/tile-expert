// ФАЙЛ С ТИПАМИ ДАННЫХ. НЕ НУЖДАЕТСЯ В РЕДАКТИРОВАНИИ

export type IProps = {
  user:
    | {
        name: string;
        age: number;
      }
    | undefined;
};
