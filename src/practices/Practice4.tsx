export const Practice4 = () => {
  //暗黙的にanyになってるのエラーが出る(tsconfigで"strict":trueの場合)
  //"noImplicitAny": false　暗黙anyエラーを出さなくする
  const calcTotalFee = (num: any) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習4：設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習4を実行</button>
    </div>
  );
};
