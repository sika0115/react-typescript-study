export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  };
  return (
    <div>
      <p>練習2：返却値の型指定</p>
      <button onClick={onClickPractice}>練習2を実行</button>
    </div>
  );
};
